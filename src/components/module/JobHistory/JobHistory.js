import classes from "./JobHistory.module.css";
import Individual from "./Individual";
import Skills from "../../module/Skills/Skills";

const individualList = [
	{
		id: "j1",
		profession: "フロントエンドエンジニア",
		companyName: "株式会社イデアイメージ",
		period: "2021/5 - 現在(10ヶ月)",
		work: [
			"- WordPressを用いたサイト構築、運用、保守",
			"- WordPressを用いたサイト構築、運用、保守",
		],
	},
];
const JobHistory = () => {
	const individual = individualList.map((data) => (
		<Individual key={data.id} data={data} />
	));
	return (
		<div className={classes["job-history"]}>
			<h2>職歴</h2>
			{individual}
			<h2>スキル</h2>
			<Skills />
		</div>
	);
};

export default JobHistory;
