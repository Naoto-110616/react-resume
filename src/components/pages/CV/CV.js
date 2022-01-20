import classes from "./CV.module.css";

import SelfIntroduction from "../../module/SelfIntroduction/SelfIntroduction";
import Profile from "../../module/Profile/Profile";
import JobHistory from "../../module/JobHistory/JobHistory";

const CV = () => {
	return (
		<>
			<SelfIntroduction />
			<div className={classes["self-info"]}>
				<Profile />
				<JobHistory />
			</div>
		</>
	);
};

export default CV;
