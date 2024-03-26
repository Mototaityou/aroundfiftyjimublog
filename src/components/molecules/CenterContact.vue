<script setup lang="ts">
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, helpers } from "@vuelidate/validators";
import {
  requiredMessage,
  emailMessage,
  minLengthMessage,
} from "@/ValidatorMessage";
import { useRouter } from "vue-router";
import RestApiService from "@/services/RestApiService";

const router = useRouter();

const initialState = {
  name: "",
  email: "",
  message: "",
};

const state = reactive({
  ...initialState,
});

const rules = {
  name: {
    required: helpers.withMessage(requiredMessage("お名前"), required),
  },
  email: {
    required: helpers.withMessage(requiredMessage("メールアドレス"), required),
    email: helpers.withMessage(emailMessage, email),
  },
  message: {
    required: helpers.withMessage(requiredMessage("お問合わせ"), required),
    minLengthValue: helpers.withMessage(
      minLengthMessage("お問合せ", 10),
      minLength(10)
    ),
  },
};

const v$ = useVuelidate(rules, state);
const messageResult = ref();
const errorMessage = ref("");
const MessageError = ref(true);

const post = async () => {
  const datas = {
    title: state.name,
    contact: state.email,
    content: state.message,
  };
  console.log(datas);

  const result = await v$.value.$validate();
  console.log("result", result);
  if (result === true) {
    RestApiService.create(datas)
      .then((response) => {
        messageResult.value = response.data.body;
        console.log(messageResult.value);
        setTimeout(() => {
          router.push("thanks");
        }, 1000);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        messageResult.value = error;
        errorMessage.value =
          "送信が失敗しました。もう一度お試しいただくか、twitterからお問い合わせいただけますと幸いです。";
      });
  } else {
    console.log(result);
  }
};
</script>

<template>
  <v-col cols="12" sm="6">
    <h2 class="mb-3">お問合せフォーム</h2>
    <p class="mb-5">
      ブログ管理者までお問い合わせがある場合はこちらよりお願いいたします。
    </p>

    <v-form @submit.prevent="post">
      <v-text-field
        label="お名前"
        variant="outlined"
        v-model="state.name"
        :error-messages="v$.name.$errors.map((e:any) => e.$message)"
        :counter="2"
        required
        @input="v$.name.$touch"
        @blur="v$.name.$touch"
      ></v-text-field>

      <v-text-field
        label="メールアドレス [必須]"
        v-model="state.email"
        variant="outlined"
        :error-messages="v$.email.$errors.map((e:any) => e.$message)"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      >
      </v-text-field>
      <v-textarea
        label="お問い合わせ [必須]"
        v-model="state.message"
        auto-grow
        variant="outlined"
        rows="3"
        :error-messages="v$.message.$errors.map((e:any) => e.$message)"
        :counter="10"
        required
        @input="v$.message.$touch"
        @blur="v$.message.$touch"
        data-formrun-required
      ></v-textarea>

      <v-card v-if="MessageError" class="mb-5" color="yellow"
        ><p>{{ errorMessage }}</p></v-card
      >
      <v-btn
        type="submit"
        @click="v$.$validate"
        :click="post"
        block
        color="#BDBDBD"
      >
        送信
      </v-btn>
    </v-form>
    <a href="https://twitter.com/aroundfiftyjimu">
      <v-icon
        size="x-large"
        color="#222"
        icon="fa-brands fa-twitter"
        class="mt-10 mb-10 mr-5"
      ></v-icon>
    </a>
    <a
      href="https://twitter.com/intent/tweet?screen_name=aroundfiftyjimu&ref_src=twsrc%5Etfw"
      class="twitter-mention-button"
      data-show-count="false"
      >Tweet to @aroundfiftyjimu</a
    >
  </v-col>
</template>
<style scoped>
a {
  color: #222;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
h3 {
  margin-bottom: 1rem;
}

ul {
  list-style: disc;
}

li {
  padding-bottom: 1rem;
}
._formrun_gotcha {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>
