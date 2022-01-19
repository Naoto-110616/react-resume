import classes from "./Resume.module.css";

import { AiOutlineMail, AiFillChrome, AiFillGithub } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Resume = () => {
	return (
		<>
			<section className={classes.resume}>
				<div className={classes["self-introduction"]}>
					<h2 className={classes.name}>
						<ruby>
							大川尚斗<rp>(</rp>
							<rt>オオカワナオト</rt>
							<rp>)</rp>
						</ruby>
					</h2>
					<p>フロントエンドエンジニア</p>
				</div>
				<div className={classes["self-info"]}>
					<div>
						<div className={classes.profile}>
							<h2>PROFILE</h2>
							<p></p>
						</div>
						<div className={classes.personal}>
							<h2>PERSONAL DETAILS</h2>
							<div>
								<h3>Address</h3>
								<p>大阪市平野区長吉出戸2-1-8</p>
							</div>
						</div>
						<div className={classes.contact}>
							<h2>CONTACT</h2>
							<ul>
								<li>
									<AiOutlineMail />
									<p>siodeitadaku@gmail.com</p>
								</li>
								<li>
									<BsTelephone />
									<p>090-5019-3951</p>
								</li>
								<li>
									<AiFillChrome />
									<p>https://portfolio-page-react.web.app</p>
								</li>
								<li>
									<AiFillGithub />
									<p>https://github.com/Naoto-110616/react-portfolio</p>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h2>職歴</h2>
						<div>
							<h3>title</h3>
							<div>
								<p>subtitle</p>
								<p>年</p>
							</div>
							<p>要約</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Resume;
