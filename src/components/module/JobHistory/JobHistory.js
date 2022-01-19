import classes from "./JobHistory.module.css";
import Individual from "./Individual";
import Skills from "../../module/Skills/Skills";

const JobHistory = () => {
	return (
		<div className={classes["job-history"]}>
			<h2>職歴</h2>
			<Individual />
			<Individual />
			<Individual />
			<h2>スキル</h2>
			<Skills />
		</div>
	);
};

export default JobHistory;
