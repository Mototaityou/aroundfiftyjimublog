<template>
	<v-app>
		<MobileHeader></MobileHeader>
		<v-main>
			<v-container>
				<v-row>
					<MobileLeft></MobileLeft>
					<v-col cols="12" sm="6">
						<v-sheet width="auto" class="mx-auto text-left">
							<h3 class="mb-3">著者プロフィール</h3>
							<p class="mb-4">
								営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員。
							</p>
							<v-divider
								:thickness="1"
								color="#222"
								class="border-opacity-75 mb-4"
							></v-divider>
							<h3 class="mb-3">略歴</h3>
							<ul class="pl-3">
								<li>高校の部活はアニ研。</li>
								<li>デザイン専門学校に通う</li>
								<li>デザイン会社にグラフィックデザイナーとして勤務</li>
								<li>いろいろな仕事に就く</li>
								<li>英検二級をとって営業事務として勤務</li>
								<li>『LIFE SHIFT』を読んでプログラミングを学び始める</li>
								<li>
									中学生・高校生向けオンラインプログラミング教室N Code Labo
									にアラフィフの参加を許される
								</li>
								<li>
									Python, HTML, SCSS, CSS, SQL, JavaScript,
									TypeScriptの基礎を勉強してFirebaseにチャットページをAWSへはこのブログをデプロイできるようになる
								</li>
								<li>N Code Laboを卒業？して転職活動を始める ←いまここ</li>
							</ul>
						</v-sheet>
					</v-col>
					<RightNav></RightNav>
				</v-row>
			</v-container>
		</v-main>
		<FooterTitle></FooterTitle>
	</v-app>
</template>
<script setup lang="ts">
import MobileHeader from '@/components/Organisms/MobileHeader.vue';
import MobileLeft from '@/components/molecules/MobileLeft.vue';
import FooterTitle from '../components/Organisms/FooterTitle.vue';
import RightNav from '@/components/molecules/RightNav.vue';
</script>

<style scoped>
a {
	color: #222;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

ul {
	list-style: disc;
}
li {
	padding-bottom: 1rem;
}
.v-main {
	margin-top: 12vh;
}
</style>
