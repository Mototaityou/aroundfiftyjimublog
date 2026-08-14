<template>
	<v-app>
		<HeaderTitle></HeaderTitle>
		<v-main>
			<v-container>
				<v-row>
					<LeftNavArticles></LeftNavArticles>
					<v-col cols="12" sm="9">
						<div class="text-center">
							<h2 class="mb-4">業務改善×web開発ポートフォリオ</h2>
						</div>
						<v-sheet max-width="760" class="mx-auto">
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
													<h2>About me</h2>
												</div>
											</v-col>
											<v-col cols="12" sm="7">
												<div>
													<div>
														営業事務・物流事務として受発注管理や在庫管理、<br />
														海外メーカーとの調整業務に従事してきました。<br />
														現在は学習塾運営企業のITサービス管理課に所属し、<br />
														デバイス管理および業務自動化業務に携わっています。<br />
														利用者視点で課題を捉え、<br />
														業務改善と継続的な技術学習に取り組んでいます。
													</div>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
						</v-sheet>
						<v-sheet max-width="760" class="mx-auto">
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
													<h2>My Story</h2>
												</div>
											</v-col>
											<v-col cols="12" sm="7">
												<div>
													<div>
														システムを利用するだけでなく、<br />
														自ら開発できるようになりたいと考え、<br />
														Python、JavaScript、TypeScript、Vue.js、AWSの学習を開始しました。<br />
														現在はITサービス管理課にて<br />
														Power Automate Desktopによる業務自動化を担当し、<br />
														回線情報更新業務を約60分から約2分へ短縮するなど
														業務改善に取り組んでいます。<br />
														個人開発ではVue.jsとAWSを利用した<br />
														サーバーレスWebシステムを開発し、<br />
														学習と実践を継続しています。
													</div>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<!-- <v-hover v-slot="{ isHovering, props }">
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
														仕事では常に「どうすればもっと良くなるか」を考えながら取り組んできました。<br /><br />
														デザイン、物流、営業事務、業務改善とさまざまな経験を通じて培った利用者視点を大切にしています。<br /><br />
														現在は個人開発を通じて技術力を磨きながら、課題解決に貢献できるエンジニアを目指しています。
													</p>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover> -->
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
													<h2>Technical Skills</h2>
												</div>
												<div>
													<v-table>
														<tbody>
															<tr>
																<td>OS</td>
																<td>mac</td>

																<td>
																	インストールから環境構築、設定、開発が可能
																</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>Python</td>

																<td>
																	FlaskによるWebアプリ開発、AWS
																	Lambda開発、CRUD機能実装
																</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>HTML/CSS</td>

																<td>レスポンシブ対応を考慮したWebページ作成</td>
															</tr>

															<tr>
																<td>言語</td>
																<td>JavaScript</td>

																<td>オセロゲーム開発、DOM操作、クラス設計</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>TypeScript</td>

																<td>Vue.jsアプリケーション開発、API連携</td>
															</tr>
															<tr>
																<td>フレームワーク</td>
																<td>Vue.js</td>
																<td>Composition APIを利用したSPA開発</td>
															</tr>
															<tr>
																<td>DB</td>
																<td>MySQL</td>
																<td>テーブル設計およびCRUD実装経験</td>
															</tr>
															<tr>
																<td>Firebase</td>
																<td>主なサービス</td>

																<td>
																	Cloud Firestore, Authentication, Hosting,
																	Cloud Storage,
																</td>
															</tr>
															<tr>
																<td>開発</td>
																<td>Docker</td>
																<td>コンテナ環境での開発および動作確認</td>
															</tr>
															<tr>
																<td>AWS</td>
																<td>主なサービス</td>

																<td>
																	Vue.jsとAWSを利用した<br />
																	サーバーレスブログを個人開発 <br /><br />
																	インフラ<br />
																	Route 53<br />
																	CloudFront<br />
																	S3<br /><br />
																	API<br />
																	API Gateway<br />
																	Lambda<br /><br />
																	認証<br />
																	Cognito<br /><br />
																	DB<br />
																	DynamoDB<br /><br />
																	メール<br />
																	SES<br /><br />
																	CI/CD<br />
																	CodePipeline<br />
																	CodeBuild
																</td>
															</tr>
															<tr>
																<td>RPA</td>
																<td>WinActor</td>

																<td>
																	シナリオ新規開発<br />
																	残高集計の自動化：約150ノード<br />
																	残業時間の集計・報告業務の自動化：約200ノード
																</td>
															</tr>
															<tr>
																<td>RPA</td>
																<td>Power Automate Desktop</td>
																<td>
																	業務フロー設計、自動化開発、運用保守<br />回線
																	情報更新業務では約 60 分を約 2
																	分、人事情報反映業務では約 60 分を約 5
																	分、請求明細作成業務で は約 60 分を約 10
																	分まで短縮
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
											<v-col class="mb-3">
												<div>
													<h4 class="mb-2">事務員のプログラミングBLOG</h4>
													<a
														href="https://github.com/Mototaityou/aroundfiftyjimublog"
													>
														<h5 class="div">GitHub</h5>
													</a>
												</div>
												<div>
													<h5 class="mb-2">概要</h5>
													<p>
														Vue.jsとAWSを利用して開発したサーバーレス構成の個人ブログです。記事表示、お問い合わせ、コメント投稿、記事管理機能を実装しています。
													</p>
													<h5 class="mb-2">開発目的</h5>
													<p>
														AWSサービスの理解を深めるため、認証機能を備えたサーバーレスwebシステムの構築を目的として開発しました。
													</p>
													<h5 class="mb-2">使用技術</h5>
													<p>
														Vue.js / TypeScript / AWS Lambda / API Gateway /
														DynamoDB / Cognito / S3 / CloudFront / SES /
														CodePipeline
													</p>
													<h5 class="mb-2">工夫した点</h5>
													<p>
														Googleアカウントによる認証機能を実装し、認証済みユーザーのみコメントを投稿できる構成としました。<br />
														CognitoとAPI
														Gatewayを連携する際にはJWT認証の仕組みの理解に苦労しましたが、公式ドキュメントを参照しながら検証を繰り返し、認証済ユーザーのみコメント投稿できる構成を実装しました。<br />
														また、GitHubへのpushを契機に自動デプロイを実行するCI/CD環境を構築しました。
													</p>
													<h5 class="mb-2">学んだこと</h5>
													<p>
														Google認証とCognitoの連携<br />
														JWT認証の仕組み<br />
														API GatewayとLambdaの連携<br />
														DynamoDBのテーブル設計<br />
														CI/CDの構築
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
													<h5 class="mb-2">構成概要</h5>
													<p>
														静的コンテンツはS3とCloudFrontで配信し、APIはLambdaとAPI
														Gatewayで構築しています。データはDynamoDBで管理し、認証にはAmazon
														Cognitoを利用しています。
													</p>
												</div>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<div>
													<h5>実装機能</h5>
													<div class="d-flex justify-center">
														<ul>
															<li>記事一覧表示</li>
															<li>お問い合わせフォーム</li>
															<li>コメント投稿</li>
															<li>Googleログイン</li>
															<li>記事CRUD管理</li>
															<li>CI/CD自動デプロイ</li>
														</ul>
													</div>
												</div>
												<v-container>
													<v-row>
														<v-col>
															<div>
																<h5>フロントエンド</h5>
															</div>
														</v-col>
														<v-col>
															<div>
																<p>Vue3 Composition API</p>
																<p>Vuetify</p>
																<p>Vue router</p>
															</div>
														</v-col>
														<v-col>
															<div>
																<h5>プログラミング言語</h5>
															</div>
														</v-col>
														<v-col>
															<div>
																<p>TypeScript</p>
																<p>HTML</p>
																<p>SCSS, CSS</p>
																<p>JavaScript</p>
															</div>
														</v-col>
													</v-row>
													<v-row>
														<v-col>
															<div>
																<h5 class="mb-1">表示機能(home 記事)</h5>
																<p class="mb-7">
																	API Gateway(HTTP), Lambda(Python),
																	DynamoDBを使ってブログの記事を表示できるようにしました。DynamoDBのテーブル設計はPartition
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
																	CI/CD環境を構築し、GitHubへのpushを契機にCodePipelineが起動し、自動ビルド・自動デプロイを実行します。<br />
																	デプロイ後はLambdaによってCloudFrontキャッシュを削除し、最新コンテンツを即時反映できるようにしました。
																</p>
																<p class="text-body-2">
																	※開発環境はDockerコンテナ上に構築し、Lambda開発環境の再現性向上を意識しました。
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
											<v-col class="mb-3">
												<div>
													<h4 class="mb-2">
														FlaskによるCRUD機能付きブログアプリ開発
													</h4>
													<a href="https://github.com/Mototaityou/blog">
														<h5 class="div">GitHub(ソースコード)</h5>
														<div class="d-flex flex-row justify-center">
															<iframe
																src="https://drive.google.com/file/d/1QS4sqvd0_e3gzWDQYoQ2rm-ikqbA0zFe/preview"
																width="350"
																height="200"
																allow="autoplay"
															></iframe>
														</div>
													</a>
													<h5 class="mb-2">概要</h5>
													<p>
														PythonとFlaskを利用して開発したブログアプリケーションです。記事の作成・閲覧・更新・削除（CRUD）機能を実装しています。
													</p>
													<h5 class="mb-2">開発目的</h5>
													<p>
														バックエンド開発の基礎的な仕組みを理解するため、FlaskとMySQLを用いたCRUD機能付きwebアプリケーションを開発しました。
													</p>
													<h5 class="mb-2">使用技術</h5>
													<p>Python / Flask / MySQL / HTML / CSS / Jinja2</p>
													<h5 class="mb-2">工夫した点</h5>
													<p>
														MySQLと連携し、記事データの登録・表示・更新・削除を行うCRUD機能を実装しました。また、ルーティングとJinja2テンプレートを利用して画面表示と処理を分離し、保守しやすい構成を意識して開発しました。
													</p>
													<h5 class="mb-2">学んだこと</h5>
													<p>
														HTTPリクエストとレスポンスの流れ<br />
														Flaskによるルーティング<br />
														Jinja2テンプレートを利用した画面描画<br />
														MySQLとのデータ連携<br />
														CRUD機能の設計と実装<br />
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
											<v-col class="mb-3">
												<div>
													<h4 class="mb-2">リアルタイムチャットアプリ開発</h4>
													<a href="https://github.com/Mototaityou/my-chat3">
														<h5 class="div">GitHub</h5>
													</a>
													<div>
														<a href="https://mychat-c4f8d.web.app">
															<v-img
																max-height="250"
																src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/ChatImage2.png"
																alt="FrendlyChat"
															></v-img
														></a>
													</div>
													<h5 class="mb-2">概要</h5>
													<p>
														Vue.jsとFirebaseを用いて開発したリアルタイムチャットアプリケーションです。Firebase
														Authenticationによるユーザー認証機能と、Cloud
														Firestoreによるメッセージ機能を実装しています。
													</p>
													<h5 class="mb-2">開発目的</h5>
													<p>
														リアルタイム通信の仕組みを理解するため、Firebase
														Cloud
														Firestoreを利用したチャットアプリケーションを開発しました。
													</p>

													<h5 class="mb-2">使用技術</h5>
													<p>
														Vue.js / TypeScript / Vuetify / Firebase
														Authentication / Cloud Firestore / Hosting
													</p>
													<h5 class="mb-2">工夫した点</h5>
													<p>
														Firebase
														Authenticationを利用し、承認済みユーザーのみがチャットに参加できる構成としました。また、Cloud
														Firestoreを利用してメッセージをリアルタイムに反映し、サーバーを構築せずにチャット機能を実装しました。
													</p>
													<h5 class="mb-2">学んだこと</h5>
													<p>
														Firebase Authenticationによる認証<br />
														Cloud Firestoreによるリアルタイムデータ同期<br />
														Vue.jsとFirebaseの連携<br />
														リアルタイム通信の仕組み<br />
														TypeScriptを利用したフロントエンド開発<br />
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
											<v-col class="mb-3">
												<div>
													<h4 class="mb-2">JavaScriptによるオセロゲーム</h4>
													<a href="https://github.com/Mototaityou/reversi">
														<h5 class="div">GitHub</h5>
														<div>
															<a href="https://othellogame-60847.web.app">
																<v-img
																	max-height="250"
																	src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/OthelloGame.png"
																	alt="OthelloGame"
																></v-img
															></a>
														</div>
													</a>
													<h5 class="mb-2">概要</h5>
													<p>
														JavaScriptの基礎学習として開発したブラウザゲームです。オセロのルールを再現し、石の反転処理や勝敗判定を実装しています。
													</p>
													<h5 class="mb-2">開発目的</h5>
													<p>
														JavaScriptによるロジック実装を学習するため、オセロゲームを開発しました。石の反転処理や勝敗判定などを実装し、状態管理の考え方を学ぶことを目的としました。
													</p>
													<h5 class="mb-2">使用技術</h5>
													<p>JavaScript / HTML / CSS</p>
													<h5 class="mb-2">工夫した点</h5>
													<p>
														クラス設計を利用し、ゲームロジックと画面表示を分離して実装しました。また、石の斑点処理をメソッドとして管理し、可読性と保守性を意識した構成としました。
													</p>
													<h5 class="mb-2">学んだこと</h5>
													<p>
														JavaScriptのクラス設計<br />
														DOM操作<br />
														イベント処理<br />
														配列を利用した状態管理<br />
														ゲームロジックの実装<br />
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
													<h2>Achievements</h2>
												</div>
											</v-col>
											<v-col cols="12" sm="7">
												<div>
													<ul>
														<li>
															<p class="text-body-1">Power Automate Desktop</p>
														</li>
														<li>
															<p class="text-body-1">
																回線情報更新業務<br />
																60 分 → 2 分
															</p>
														</li>
														<li>
															<p class="text-body-1">
																人事情報反映業務<br />
																60 分 → 5 分
															</p>
														</li>
														<li>
															<p class="text-body-1">
																請求明細作成業務<br />
																60 分 → 10 分
															</p>
														</li>
													</ul>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover>
							<!-- <v-hover v-slot="{ isHovering, props }">
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
													<h2>Technical Skills</h2>
												</div>
												<div>
													<v-table>
														<tbody>
															<tr>
																<td>OS</td>
																<td>mac</td>

																<td>
																	インストールから環境構築、設定、開発が可能
																</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>Python</td>

																<td>
																	FlaskによるWebアプリ開発、AWS
																	Lambda開発、CRUD機能実装
																</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>HTML/CSS</td>

																<td>レスポンシブ対応を考慮したWebページ作成</td>
															</tr>

															<tr>
																<td>言語</td>
																<td>JavaScript</td>

																<td>オセロゲーム開発、DOM操作、クラス設計</td>
															</tr>
															<tr>
																<td>言語</td>
																<td>TypeScript</td>

																<td>Vue.jsアプリケーション開発、API連携</td>
															</tr>
															<tr>
																<td>フレームワーク</td>
																<td>Vue.js</td>
																<td>Composition APIを利用したSPA開発</td>
															</tr>
															<tr>
																<td>DB</td>
																<td>MySQL</td>
																<td>
																	インストールから簡単なテーブル作成が可能
																</td>
															</tr>
															<tr>
																<td>Firebase</td>
																<td>主なサービス</td>

																<td>
																	Cloud Firestore, Authentication, Hosting,
																	Cloud Storage,
																</td>
															</tr>
															<tr>
																<td>開発</td>
																<td>Docker</td>

																<td>コンテナ環境での開発および動作確認</td>
															</tr>
															<tr>
																<td>AWS</td>
																<td>主なサービス</td>

																<td>
																	サーバーレスブログを個人開発 <br />（Route 53,
																	CloudFront, S3, CodePipeline, CodeBuild, API
																	Gateway, Lambda, DynamoDB, SES, Cognito）
																</td>
															</tr>
															<tr>
																<td>RPA</td>
																<td>WinActor</td>

																<td>
																	シナリオ新規開発<br />
																	残高集計の自動化：約150ノード<br />
																	残業時間の集計・報告業務の自動化：約200ノード
																</td>
															</tr>
															<tr>
																<td>RPA</td>
																<td>Power Automate Desktop</td>
																<td>
																	業務フロー設計、自動化開発、運用保守<br />回線
																	情報更新業務では約 60 分を約 2
																	分、人事情報反映業務では約 60 分を約 5
																	分、請求明細作成業務で は約 60 分を約 10
																	分まで短縮
																</td>
															</tr>
														</tbody>
													</v-table>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-hover> -->
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
				</v-row>
			</v-container>
		</v-main>
		<FooterTitle></FooterTitle>
	</v-app>
</template>
<script setup lang="ts">
import HeaderTitle from '../components/Organisms/HeaderTitle.vue';
import FooterTitle from '../components/Organisms/FooterTitle.vue';
import LeftNavArticles from '../components/molecules/LeftNavArticles.vue';
import { h } from 'vue';
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
	margin-top: 30px;
}
:deep(h3) {
	margin-bottom: 1rem;
}
:deep(h4) {
	margin-bottom: 1rem;
}
:deep(p) {
	line-height: 1.6rem;
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
