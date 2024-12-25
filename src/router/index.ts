import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				title: '事務員のプログラミングBLOG',
				desc: 'アラフィフ事務員が老後2000万円問題を解決するためにプログラミング教室 N Code Laboでプログラミングをゼロから勉強。プログラマーに転職できるようにと日々勉強している内容とプログラミングを選んだ経緯をブログにします。'
			}
		},
		{
			path: '/pc',
			name: 'pc',
			component: () =>
				import(/* webpackChunkName: "HomeViewPc" */ '../views/HomeViewPc.vue'),
			meta: {
				title: '事務員のプログラミングBLOG',
				desc: 'アラフィフ事務員が老後2000万円問題を解決するためにプログラミング教室 N Code Laboでプログラミングをゼロから勉強。プログラマーに転職できるようにと日々勉強している内容とプログラミングを選んだ経緯をブログにします。'
			}
		},
		{
			path: '/about',
			name: 'about',
			component: () =>
				import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
			meta: {
				title: 'アラフィフ事務員のプロフィール',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のプロフィール'
			}
		},
		{
			path: '/articles/:slug/:id',
			name: 'ArticalesDetails',
			component: () =>
				import(
					/* webpackChunkName: "ArticalesDetails" */ '../views/ArticalesDetails.vue'
				),
			meta: {
				title: 'articles'
			}
		},
		{
			path: '/contact',
			name: 'contact',
			component: () =>
				import(/* webpackChunkName: "contact" */ '../views/ContactDetail.vue'),
			meta: {
				title: 'お問い合わせ｜アラフィフ事務員',
				desc: 'アラフィフ事務員への問い合わせページ'
			}
		},
		{
			path: '/search/:slug',
			name: 'search',
			component: () =>
				import(/* webpackChunkName: "search" */ '../views/SearchView.vue'),
			meta: {
				title: '検索結果｜アラフィフ事務員',
				desc: '事務員のプログラミングBLOG内の検索結果'
			}
		},
		{
			path: '/thanks',
			name: 'thanks',
			component: () =>
				import(/* webpackChunkName: "thanks" */ '../views/ThanksView.vue'),
			meta: {
				title: 'アラフィフ事務員のメール送信完了ページ',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のメール送信完了ページ'
			}
		},
		{
			path: '/IdpCode',
			name: 'IdpCode',
			component: () =>
				import(/* webpackChunkName: "IdpCode" */ '../views/IdpCode.vue')
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: () =>
				import(
					/* webpackChunkName: "portfolio" */ '../views/portfolioViewPc.vue'
				),
			meta: {
				title: 'アラフィフ事務員のポートフォリオ',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のポートフォリオ'
			}
		},
		{
			path: '/privacy',
			name: 'privacy',
			component: () =>
				import(/* webpackChunkName: "Privacy" */ '../views/PrivacyPolicy.vue'),
			meta: {
				title: 'アラフィフ事務員のプライバシーポリシー',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のプライバシーポリシー'
			}
		},
		{
			path: '/mobile',
			name: 'mobile',
			component: () =>
				import(/* webpackChunkName: "TopMobile" */ '../views/TopMobile.vue'),
			meta: {
				title: '事務員のプログラミングBLOG',
				desc: 'アラフィフ事務員が老後2000万円問題を解決するためにプログラミング教室 N Code Laboでプログラミングをゼロから勉強。プログラマーに転職できるようにと日々勉強している内容とプログラミングを選んだ経緯をブログにします。'
			}
		},
		{
			path: '/mobile/about',
			name: 'mobileAbout',
			component: () =>
				import(
					/* webpackChunkName: "MobileAbout" */ '../views/MobileAbout.vue'
				),
			meta: {
				title: 'アラフィフ事務員のプロフィール',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のプロフィール'
			}
		},
		{
			path: '/mobile/articles/:slug/:id',
			name: 'MobileArticle',
			component: () =>
				import(
					/* webpackChunkName: "MobileArticle" */ '../views/MobileArticle.vue'
				)
		},
		{
			path: '/mobile/search/:slug',
			name: 'MobileSearch',
			component: () =>
				import(
					/* webpackChunkName: "MobileSearch" */ '../views/MobileSearch.vue'
				),
			meta: {
				title: '検索結果｜アラフィフ事務員',
				desc: '事務員のプログラミングBLOG内の検索結果'
			}
		},
		{
			path: '/mobile/contact',
			name: 'mobileContact',
			component: () =>
				import(
					/* webpackChunkName: "MobileContact" */ '../views/MobileContact.vue'
				),
			meta: {
				title: 'お問い合わせ｜アラフィフ事務員',
				desc: 'アラフィフ事務員への問い合わせページ'
			}
		},
		{
			path: '/mobile/thanks',
			name: 'mobileThanks',
			component: () =>
				import(
					/* webpackChunkName: "MobibleThank" */ '../views/MobileThank.vue'
				),
			meta: {
				title: 'アラフィフ事務員のメール送信完了ページ',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のメール送信完了ページ'
			}
		},
		{
			path: '/mobile/portfolio',
			name: 'mobilePortfolio',
			component: () =>
				import(
					/* webpackChunkName: "MobilePortfolio" */ '../views/MobilePortFolio.vue'
				),
			meta: {
				title: 'アラフィフ事務員のプロフィール',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のプロフィール'
			}
		},
		{
			path: '/mobile/privacy',
			name: 'mobileprivacy',
			component: () =>
				import(
					/* webpackChunkName: "MobilePrivacy" */ '../views/MobilePrivacy.vue'
				),
			meta: {
				title: 'アラフィフ事務員のプライバシーポリシー',
				desc: '営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員のプライバシーポリシー'
			}
		}
	]
});

export default router;
