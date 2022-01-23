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
			"≪担当業務≫",
			"･WordPressを使用したサイト構築、運用、保守、プログラム修正",
			"･Dockerを使用した開発環境構築",
			"･フロントのコーディング、各種テスト",
			"･レスポンシブデザイン対応",
			"･タスク管理ツールの提案、導入",
			"≪習得スキル≫",
			"･コーディング技術",
			"･基礎的なレスポンシブ対応",
			"･Docker技術",
			"･webpackを用いたバンドル",
			"≪コメント≫",
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
			"≪担当業務≫",
			"ミスタードーナツ店舗、事業部、工場のインフラ監視、お客様へ 機器の接続確認及び、説明、壊れた機器の交換手配。",
			"≪習得スキル≫",
			"・電話対応",
			"・Linux コマンド",
			"・ネットワークの基礎知識",
			"≪コメント≫",
			"対応は全て電話でのみの対応になるので、お客様へ具体的に理解しやすく 説明することを心がけました。 障害が起きない限りは、業務が無いのでIT言語の勉強をしていました。",
		],
	},
	{
		id: "j3",
		profession: "アシスタントディレクター",
		name: "株式会社D-rec",
		period: "2018/12 - 2020/5 (17ヶ月)",
		work: [
			"≪担当業務≫",
			"ロケ準備業務:朝の情報番組「よーいどん」内の「隣の人間国宝さん」のロケに伴う全ての準備台本作成に伴う情報収集：放送許可の取得やデータ収集撮影した映像の処理に伴う事務：ダビングしたあとデータ化し、PCに取り込む。編集しやすいように環境設定特番に伴う、街頭アンケートや書類作成、取材業務出演者の身の回りのケア業務",
			"≪習得スキル≫",
			"・映像編集のスキル、ノウハウ・ロケ進行、準備、資料作成",
			"・コミュニケーションスキル・タスク管理",
			"≪コメント≫",
			"放送日が決まっているので、納期を必ず守らなければならず、また制作にかかわるメンバーが非常に多いので、１つでも工程が遅れると全てに影響します。ですので時間の管理、タスクの管理と処理、期日までの進捗管理徹底して行うよう心がけました。その結果、働いていた期間1度も遅刻がなく、タスクに関して納期を過ぎたこと、忘れたこと、タスクが漏れたことも1度もございませんでした。",
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

const CV = () => {
	return (
		<>
			<section className={classes.cv}>
				<SelfIntroduction />
				<div className={classes["self-info"]}>
					<Profile />
					<JobHistory
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
