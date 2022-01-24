import classes from "./CV.module.css";

import SelfIntroduction from "../../module/SelfIntroduction/SelfIntroduction";
import Profile from "../../module/Profile/Profile";
import JobHistory from "../../module/JobHistory/JobHistory";

const jobHistoryList = [
	{
		id: "j1",
		profession: "フロントエンドエンジニア",
		name: "株式会社イデアイメージ",
		period: "2021/5 - 現在 (10ヶ月)",
		work: [
			"･WordPressを用いたサイト構築の際は、後の作業を減らすために ソースコードを触ることなく、管理画面から更新作業をできるように構築しました。",
			"･社内の開発環境を統一するために、Dockerの導入を提案、開発環境構築をしました。",
			"･サイト構築の際に、javascriptファイルが肥大化していく問題を、webpackを導入することで解決しました。",
		],
	},
	{
		id: "j2",
		profession: "社内サーバー監視、保守",
		name: "株式会社アドライン",
		period: "2020/7 - 2020/12 (6ヶ月)",
		work: [
			"･全て電話でのみの対応になるので、お客様へ具体的に理解しやすく 説明することを心がけました。 障害が起きない限りは、業務が無いのでIT言語の勉強をしていました。",
		],
	},
	{
		id: "j3",
		profession: "アシスタントディレクター",
		name: "株式会社D-rec",
		period: "2018/12 - 2020/5 (17ヶ月)",
		work: [
			"･放送日が決まっているので、納期を必ず守らなければならず、また制作にかかわるメンバーが非常に多いので、１つでも工程が遅れると全てに影響します。ですので時間の管理、タスクの管理と処理、期日までの進捗管理徹底して行うよう心がけました。その結果、働いていた期間1度も遅刻がなく、タスクに関して納期を過ぎたこと、忘れたこと、タスクが漏れたことも1度もございませんでした。",
		],
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
const remarks = "大阪市内または、フルリモート勤務を希望いたします。";
const cv = true;
const CV = () => {
	return (
		<>
			<section className={classes.cv}>
				<SelfIntroduction />
				<div className={classes["self-info"]}>
					<Profile />
					<JobHistory
						cv={cv}
						jobHistoryList={jobHistoryList}
						educationalBgList={educationalBgList}
						remarks={remarks}
					/>
				</div>
			</section>
		</>
	);
};

export default CV;
