import classes from "./JobHistory.module.css";
import Individual from "./Individual";
import Skills from "../../module/Skills/Skills";

const individualList = [
	{
		id: "j1",
		profession: "フロントエンドエンジニア",
		name: "株式会社イデアイメージ",
		period: "2021/5 - 現在(10ヶ月)",
		work: [
			"- WordPressを用いたサイト構築、運用、保守",
			"- フロントのコーディング、各種テスト",
			"- レスポンシブデザイン対応",
			"- Dockerを使用した開発環境構築",
			"- 既存プロジェクトへwebpackの導入",
			"- タスク管理ツールの提案、導入 ",
		],
	},
	{
		id: "j2",
		profession: "社内サーバー監視、保守",
		name: "株式会社アドライン",
		period: "2020/7 - 2020/12(6ヶ月)",
		work: ["- 社内サーバー監視、保守", "- 電話対応", "- Linuxの基本操作"],
	},
	{
		id: "j3",
		profession: "アシスタントディレクター",
		name: "株式会社D-rec",
		period: "2018/12 - 2020/5(17ヶ月)",
		work: ["- TV番組制作"],
	},
];
const educationalBgList = [
	{
		id: "e1",
		profession: "TV番組制作コース卒",
		name: "放送芸術学院専門学校",
		period: "2018/4 - 2020/3",
		work: ["- TV番組制作"],
	},
];

const JobHistory = () => {
	const individual = individualList.map((data) => (
		<Individual key={data.id} data={data} />
	));
	const educationalBg = educationalBgList.map((data) => (
		<Individual key={data.id} data={data} />
	));
	return (
		<div className={classes["job-history"]}>
			<h2>職歴</h2>
			{individual}
			<h2>学歴</h2>
			{educationalBg}
			<h2>スキル</h2>
			<Skills />
		</div>
	);
};

export default JobHistory;
