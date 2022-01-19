import classes from "./Resume.module.css";

import Profile from "../../module/Profile/Profile";
import SelfIntroduction from "../../module/SelfIntroduction/SelfIntroduction";
import JobHistory from "../../module/JobHistory/JobHistory";

const Resume = () => {
	return (
		<>
			<section className={classes.resume}>
				<SelfIntroduction />
				<div className={classes["self-info"]}>
					<Profile />
					<JobHistory />
				</div>
			</section>
		</>
	);
};

export default Resume;
