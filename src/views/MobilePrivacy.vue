<template>
	<v-app>
		<MobileHeader></MobileHeader>
		<v-main>
			<v-container>
				<v-row>
					<MobileLeft></MobileLeft>
					<v-col cols="12" sm="6">
						<v-sheet width="auto" class="mx-auto text-left">
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
	color: #00e;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

:deep(ul) {
	list-style: none;
	margin-bottom: 1rem;
}

.v-main {
	margin-top: 10vh;
}
:deep(h3) {
	margin-bottom: 1rem;
}
:deep(h4) {
	margin-bottom: 1rem;
}
:deep(p) {
	line-height: 1.5rem;
	margin-bottom: 1rem;
	color: #222;
}
:deep(li) {
	list-style-position: inside;
	margin-bottom: 0.5rem;
	font-weight: bold;
	text-indent: -1rem;
	padding-left: 1rem;
	color: #222;
}

:deep(.highlited) {
	background-color: #191919;
	border-radius: 10px;
	margin: 2rem 0;
	padding: 0 1rem 1.5rem;
	overflow-x: scroll;
}
:deep(.code-lang) {
	background-color: #666666;
	font-size: 0.9rem;
	width: min-content;
	border-radius: 5px;
	text-align: center;
}
:deep(.code-lang-color) {
	color: #ffffff;
	padding: 3px 8px;
}

:deep(pre) {
	text-align: left;
	font-size: 0.9rem;
	line-height: 1.5rem;
	margin-top: -0.6rem;
	padding-left: 1rem;
}

:deep(.v) {
	color: #4ec9b0;
}
:deep(.lt) {
	color: #7a8e98;
}
:deep(.b) {
	color: #9cdcfe;
}
:deep(.e) {
	color: #ffffff;
}
:deep(.y) {
	color: #ce9178;
}
:deep(.t) {
	color: #dcdcaa;
}
:deep(.div) {
	color: #569cd6;
}
:deep(.l) {
	color: #bc89bd;
}
:deep(.g) {
	color: #74985d;
}
.gsi-material-button {
	-moz-user-select: none;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: WHITE;
	background-image: none;
	border: 1px solid #747775;
	-webkit-border-radius: 4px;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	color: #1f1f1f;
	cursor: pointer;
	font-family: 'Roboto', arial, sans-serif;
	font-size: 14px;
	height: 40px;
	letter-spacing: 0.25px;
	outline: none;
	overflow: hidden;
	padding: 0 12px;
	position: relative;
	text-align: center;
	-webkit-transition:
		background-color 0.218s,
		border-color 0.218s,
		box-shadow 0.218s;
	transition:
		background-color 0.218s,
		border-color 0.218s,
		box-shadow 0.218s;
	vertical-align: middle;
	white-space: nowrap;
	width: auto;
	max-width: 400px;
	min-width: min-content;
}

.gsi-material-button .gsi-material-button-icon {
	height: 20px;
	margin-right: 12px;
	min-width: 20px;
	width: 20px;
}

.gsi-material-button .gsi-material-button-content-wrapper {
	-webkit-align-items: center;
	align-items: center;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-flex-wrap: nowrap;
	flex-wrap: nowrap;
	height: 100%;
	justify-content: space-between;
	position: relative;
	width: 100%;
}

.gsi-material-button .gsi-material-button-contents {
	-webkit-flex-grow: 1;
	flex-grow: 1;
	font-family: 'Roboto', arial, sans-serif;
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	vertical-align: top;
}

.gsi-material-button .gsi-material-button-state {
	-webkit-transition: opacity 0.218s;
	transition: opacity 0.218s;
	bottom: 0;
	left: 0;
	opacity: 0;
	position: absolute;
	right: 0;
	top: 0;
}

.gsi-material-button:disabled {
	cursor: default;
	background-color: #ffffff61;
	border-color: #1f1f1f1f;
}

.gsi-material-button:disabled .gsi-material-button-contents {
	opacity: 38%;
}

.gsi-material-button:disabled .gsi-material-button-icon {
	opacity: 38%;
}

.gsi-material-button:not(:disabled):active .gsi-material-button-state,
.gsi-material-button:not(:disabled):focus .gsi-material-button-state {
	background-color: #303030;
	opacity: 12%;
}

.gsi-material-button:not(:disabled):hover {
	-webkit-box-shadow:
		0 1px 2px 0 rgba(60, 64, 67, 0.3),
		0 1px 3px 1px rgba(60, 64, 67, 0.15);
	box-shadow:
		0 1px 2px 0 rgba(60, 64, 67, 0.3),
		0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.gsi-material-button:not(:disabled):hover .gsi-material-button-state {
	background-color: #303030;
	opacity: 8%;
}
</style>
