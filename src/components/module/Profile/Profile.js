import classes from "./Profile.module.css";

import { AiOutlineMail, AiFillChrome, AiFillGithub } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Profile = () => {
	return (
		<>
			<div>
				<div className={classes.profile}>
					<h2>PROFILE</h2>
					<p>
						<span>フロントエンドエンジニアとして</span>
						<span>1年の経験をさせていただきました。</span>
						<span>責任感、チームプレイを大切にしながら、</span>
						<span>業務を進めてまいります。</span>
						<span>よろしくお願い致します。</span>
					</p>
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
							<p>
								<a href="https://portfolio-page-react.web.app">
									https://portfolio-page-react.web.app
								</a>
							</p>
						</li>
						<li>
							<AiFillGithub />
							<p>
								<a href="https://github.com/Naoto-110616/react-portfolio">
									https://github.com/Naoto-110616/react-portfolio
								</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Profile;
