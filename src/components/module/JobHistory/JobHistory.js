import classes from "./JobHistory.module.css";
import Individual from "./Individual";

const JobHistory = () => {
	return (
		<div className={classes["job-history"]}>
			<h2>職歴</h2>
			<Individual />
			<Individual />
			<Individual />
		</div>
	);
};

export default JobHistory;
