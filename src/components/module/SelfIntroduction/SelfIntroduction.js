import classes from "./SelfIntroduction.module.css";

const SelfIntroduction = () => {
	return (
		<>
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
		</>
	);
};

export default SelfIntroduction;
