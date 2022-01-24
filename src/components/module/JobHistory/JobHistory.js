import classes from "./JobHistory.module.css";
import Individual from "./Individual";
import Skills from "../../module/Skills/Skills";

import { AiFillCheckCircle } from "react-icons/ai";

const JobHistory = (props) => {
	const individual = props.jobHistoryList.map((data) => (
		<Individual key={data.id} data={data} />
	));
	const educationalBg = props.educationalBgList.map((data) => (
		<Individual key={data.id} data={data} />
	));
	const remarks = (
		<>
			<h2>備考</h2>
			<div className={classes["remarks"]}>
				<AiFillCheckCircle />
				<p>{props.remarks}</p>
			</div>
		</>
	);
	return (
		<div className={classes["job-history"]}>
			{!props.cv && <h2>職歴</h2>}
			{props.cv && <h2>職務経歴書</h2>}
			{individual}
			<h2>学歴</h2>
			{educationalBg}
			<h2>スキル</h2>
			<Skills />
			{props.remarks && remarks}
		</div>
	);
};

export default JobHistory;
