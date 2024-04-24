<template>
	<v-app>
		<MobileHeader></MobileHeader>
		<v-main>
			<v-container>
				<v-row>
					<MobileLeft></MobileLeft>
					<v-col cols="12" sm="6">
						<v-sheet max-width="500" class="mx-auto">
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5">
												<div>
													<h2>About this page</h2>
												</div>
											</v-col>
											<v-col cols="12" sm="7">
												<div>
													<p>
														このページはアラフィフ事務員のポートフォリオページです。IT業界未経験、プログラミング未経験からN
														Code
														Laboにてプログラミングを勉強してこのブログを作成しました。
													</p>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5">
												<div>
													<h2 class="mt-3">About me</h2>
												</div>
											</v-col>
											<v-col cols="12" sm="7">
												<div>
													<p>
														アラフィフ事務員。大学に入れずデザインの専門学校に入学し、卒業後デザイン会社で新聞の折込チラシをデザイン。激務の為退職後さまざまな職を経験し、英検2級を取得して営業事務として勤務。『LIFE
														SHIFT』を読んでプログラマーになるべく転職活動中。2年前まではプログラミングに多様な言語がある事を知らず、『|』この記号をタイピングすることもできませんでした。
													</p>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<div>
								<h2 class="text-left mb-5">Works</h2>
							</div>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5" class="mb-3">
												<div>
													<h4 class="mb-2">Flaskを使用しブログを作成</h4>
													<a href="https://github.com/Mototaityou/blog">
														<p>GitHub(コードのみ)</p>
													</a>
													<p>
														MVTモデルの基礎を勉強すべく Python, HTML, CSS,
														Flaskを使用しブログを作成。MySQLを使用してCRUDの基礎を勉強しました。
													</p>
												</div>
											</v-col>
											<v-col cols="12" sm="7" class="mb-3 text-center">
												<iframe
													src="https://drive.google.com/file/d/1QS4sqvd0_e3gzWDQYoQ2rm-ikqbA0zFe/preview"
													width="350"
													height="200"
												></iframe>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5" class="mb-3">
												<div>
													<h4 class="mb-2">オセロゲーム</h4>
													<a href="https://github.com/Mototaityou/reversi">
														<p>GitHub</p>
													</a>
													<p>
														JavaScriptをゼロから勉強し、class,
														関数を理解するためにオセロを作りました。
													</p>
												</div>
											</v-col>
											<v-col cols="12" sm="7" class="text-center">
												<div>
													<a href="https://othellogame-60847.web.app">
														<v-img
															max-height="250"
															src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/OthelloGame.png"
															alt="OthelloGame"
														></v-img
													></a>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5" class="mb-3">
												<div>
													<h4 class="mb-2">チャット</h4>
													<a href="https://github.com/Mototaityou/my-chat3">
														<p>GitHub</p>
													</a>
													<p>
														チャット機能とクラウドサービス、NoSQLデータベースを勉強するため、Firebase
														Codelab を参考にVue.js, Vuetify,
														Typescriptでチャットを作成し、Firebaseにデプロイしました。
													</p>
												</div>
											</v-col>
											<v-col cols="12" sm="7" class="text-center">
												<div>
													<a href="https://mychat-c4f8d.web.app">
														<v-img
															max-height="250"
															src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/ChatImage2.png"
															alt="FrendlyChat"
														></v-img
													></a>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5" class="mb-3">
												<div>
													<h4 class="mb-2">事務員のプログラミングBLOG</h4>
													<p>GitHub</p>
												</div>
											</v-col>
											<v-col cols="12" sm="7" class="text-left">
												<div>
													<p>
														AWSを勉強するためにこのブログをVue.js, Vuetify,
														Typescriptにて作成しました。(イラストはイラストレーターで描きました)
													</p>
												</div>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<div>
													<h5>AWS構成図</h5>
													<v-img
														class="mb-2 mx-auto"
														max-height="500"
														max-width="500"
														src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/Blog.drawio.png"
														alt="Author"
													></v-img>
												</div>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<div>
													<h5>実装機能</h5>
												</div>
												<v-container>
													<v-row>
														<v-col>
															<div>
																<ul>
																	<li>
																		<h5>フロントエンド</h5>
																	</li>
																	<li>
																		<p class="text-body-1">
																			Vue3 Composition API
																		</p>
																	</li>
																	<li>
																		<p class="text-body-1">Vuetify</p>
																	</li>
																	<li>
																		<p class="text-body-1">Vue router</p>
																	</li>
																	<li>
																		<h5>プログラミング言語</h5>
																	</li>
																	<li>
																		<p class="text-body-1">Typescript</p>
																	</li>
																	<li>
																		<p class="text-body-1">HTML</p>
																	</li>
																	<li>
																		<p class="text-body-1">SCSS, CSS</p>
																	</li>
																	<li>
																		<p class="text-body-1">JavaScript</p>
																	</li>
																</ul>
															</div>
														</v-col>
													</v-row>
													<v-row>
														<v-col>
															<div>
																<h5 class="mb-1">表示機能(home 記事)</h5>
																<p class="mb-7">
																	API Gateway(HTTP), Lambda(Python),
																	DynamoDbを使ってブログの記事を表示できるようにしました。DynamoDBのテーブル設計はPartition
																	KeyとSort
																	Keyをクエリすれば表示できるように構築しました。
																</p>
																<h5 class="mb-1">お問合せフォーム(contact)</h5>
																<p class="mb-7">
																	API Gateway(REST),
																	Lambda(Python),SESを使ってお問い合わせフォームから管理者(自分)にメールを送れるように構築しました。
																</p>
																<h5 class="mb-1">記事(コメント欄)</h5>
																<p class="mb-7">
																	CognitoのサインインページからOIDC
																	Idp(Google)経由でサインインし、認証(JWT)をAPI
																	Gateway(REST)で受け取り承認の検証ができたらLambda(Python)経由でDynamoDBにコメントを書き込めるように構築しました。
																</p>
																<h5 class="mb-1">記事(CRUD管理)</h5>
																<p class="mb-7">
																	ローカルで管理しているVue.jsにCognitoにてログインできたらブログの記事をCRUDできるようAPI
																	Gateway(REST),
																	Lambda(Python)を使ってDynamoDBへ接続できるように構築しました。
																</p>
																<h5 class="mb-1">CI/CD</h5>
																<p class="mb-7">
																	CI/CDはVS
																	CodeからGitHubへアップデートされたらCodePipelineが起動してCodeBuildにてビルドし、S3にアップロードされCloudFrontのキャッシュをLambda(Python)にて削除できるように構築しました。
																</p>
																<p class="text-body-2">
																	※Amplifyはもう少し様子を見たほうが良い、使わない方が勉強になるし。と先生からおすすめされたのでAmplifyは使いませんでした。
																</p>
																<p class="text-body-2">
																	※VS
																	Codeを使ってDockerコンテナ内でLambdaを構築しています。(Dockerコンテナを勉強するため)
																</p>
															</div>
														</v-col>
													</v-row>
												</v-container>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5">
												<div>
													<h2>My skill set(事務職)</h2>
												</div>
											</v-col>
											<v-col cols="12" sm="7">
												<div>
													<ul>
														<li>
															<p class="text-body-2">(一応事務職なので)</p>
														</li>
														<li>
															<p class="text-body-1">
																Microsoft Office Specialist Word 2013
															</p>
														</li>
														<li>
															<p class="text-body-1">
																Microsoft Office Specialist Excel 2013
															</p>
														</li>
														<li>
															<p class="text-body-1">
																Microsoft Office Specialist PowerPoint 2013
															</p>
														</li>
														<li>
															<p class="text-body-1">
																実用英語検定2級 (メールで納期の調整程度)
															</p>
														</li>
														<li>
															<p class="text-body-1">
																Illustrator(会社のパンフレットが作れる程度)
															</p>
														</li>
														<li>
															<p class="text-body-1">
																Photoshop(写真の加工、切り取り程度)
															</p>
														</li>
													</ul>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col>
												<div>
													<h2>My skill set</h2>
													<h5>(勉強したプログラミング)</h5>
												</div>
												<div>
													<v-table>
														<tbody>
															<tr>
																<td>OS</td>
																<td>mac</td>
																<td>2年</td>
																<td>
																	インストールから環境構築、設定、開発が可能
																</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>Python</td>
																<td>2年</td>
																<td>簡単なプログラミングが可能</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>HTML</td>
																<td>2年</td>
																<td>簡単なプログラミングが可能</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>CSS</td>
																<td>2年</td>
																<td>簡単なプログラミングが可能</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>JavaScript</td>
																<td>1年</td>
																<td>簡単なプログラミングが可能</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>Typescript</td>
																<td>6ヶ月</td>
																<td>簡単なプログラミングが可能</td>
															</tr>
															<tr>
																<td>フレームワーク</td>
																<td>Vue.js</td>
																<td>1年</td>
																<td>このブログが作成できる</td>
															</tr>
															<tr>
																<td>DB</td>
																<td>MySQL</td>
																<td>3ヶ月</td>
																<td>
																	インストールから簡単なテーブル作成が可能
																</td>
															</tr>
															<tr>
																<td>Firebase</td>
																<td>主なサービス</td>
																<td>1年</td>
																<td>
																	Cloud Firestore, Authentication, Hosting,
																	Cloud Storage,
																</td>
															</tr>
															<tr>
																<td>開発</td>
																<td>Docker</td>
																<td>7ヶ月</td>
																<td>主にLambdaのアップロードのため</td>
															</tr>
															<tr>
																<td>AWS</td>
																<td>主なサービス</td>
																<td>7ヶ月</td>
																<td>
																	Route 53, CloudFront, S3, CodePipeline,
																	CodeBuild, API Gateway, Lambda, DynamoDB, SES,
																	Cognito
																</td>
															</tr>
														</tbody>
													</v-table>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									class="text-left mb-4"
									:elevation="isHovering ? 12 : 2"
									:class="{ 'on-hover': isHovering }"
									v-bind="props"
								>
									<v-container>
										<v-row>
											<v-col cols="12" sm="5">
												<div>
													<h2>Contact Me</h2>
												</div>
											</v-col>
											<v-col cols="12" sm="7">
												<div>
													<RouterLink to="/contact">
														<v-btn class="mb-4">CONTACT</v-btn>
													</RouterLink>
													<p>
														最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトや私について何かコメントがありましたら、上記ボタンをご利用ください。
													</p>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
						</v-sheet>
					</v-col>
					<MobileRight></MobileRight>
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
import MobileRight from '@/components/molecules/MobileRight.vue';
</script>

<style scoped>
a {
	color: #222;
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
h4 {
	font-size: 1.1rem;
}
h5 {
	font-size: 1rem;
	line-height: 1.6rem;
	margin-bottom: 1.2rem;
	color: #222;
}
</style>
