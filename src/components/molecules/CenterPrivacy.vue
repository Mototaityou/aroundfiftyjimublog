<script setup lang="ts"></script>
<template>
	<v-col cols="12" sm="9">
		<v-sheet width="760" class="mx-auto text-left">
			<h3>プライバシーポリシー</h3>
			<v-divider
				:thickness="3"
				color="#222"
				class="border-opacity-75 mb-8"
			></v-divider>
			<h4 class="mb-4">個人情報の利用目的</h4>
			<v-divider
				:thickness="1"
				color="#222"
				class="border-opacity-75 mb-4"
			></v-divider>
			<p>
				当ブログでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。<br />
				取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
			</p>
			<br />
			<h4 class="mb-4">コメントについて</h4>
			<v-divider
				:thickness="1"
				color="#222"
				class="border-opacity-75 mb-4"
			></v-divider>
			<p>
				当ブログでは、コメントで記載いただいた、氏名（ハンドルネーム）、メールアドレス、コメント内容、IPアドレスを取得いたします。利用目的は、荒らし対策やスパム検出です。また、記事内において、ユーザー様からのコメントといった形で内容を紹介させていただく場合もございます。なお、コメントを投稿された段階で、プライバシーポリシーに同意いただいたとみなしますことあらかじめご承知おきください。
			</p>
			<br />
			<h4 class="mb-4">アクセス解析ツールについて</h4>
			<v-divider
				:thickness="1"
				color="#222"
				class="border-opacity-75 mb-4"
			></v-divider>
			<p>
				当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。<br />
				この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a
					href="https://marketingplatform.google.com/about/analytics/terms/jp/"
					>Googleアナリティクスサービス利用規約のページ</a
				>や<a href="https://policies.google.com/technologies/ads?hl=ja"
					>Googleポリシーと規約ページ</a
				>をご覧ください。
			</p>
			<br />
			<h3>免責事項</h3>
			<v-divider
				:thickness="3"
				color="#222"
				class="border-opacity-75 mb-8"
			></v-divider>
			<p>
				当ブログに掲載された内容によって生じた損害等の一切の責任を負いかねますこと、あらかじめご承知おきください。当ブログをご利用いただく際は、自己責任でおこなわれるようお願いいたします。なお、当ブログの内容、情報は正確性を重視して掲載しておりますが、情報が古くなったり、誤情報が入っていたりする可能性もあります。必ずしも正確性を保証するものではありません。また、当ブログで紹介しているリンク先のWebサイト上で提供される情報、サービスに関しましても一切の責任は負いかねます。
			</p>
			<br />
			<h4 class="mb-4">著作権について</h4>
			<v-divider
				:thickness="1"
				color="#222"
				class="border-opacity-75 mb-4"
			></v-divider>
			<p>
				当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
				当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、<RouterLink
					to="/contact"
					>お問い合わせフォーム</RouterLink
				>よりご連絡ください。迅速に対応いたします。
			</p>
			<br />
			<h4 class="mb-4">リンクについて</h4>
			<v-divider
				:thickness="1"
				color="#222"
				class="border-opacity-75 mb-4"
			></v-divider>
			<p>
				当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
				ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
			</p>
			<br />
		</v-sheet>
	</v-col>
</template>
<style scoped>
a {
	color: #00e;
	text-decoration: none;
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
</style>
