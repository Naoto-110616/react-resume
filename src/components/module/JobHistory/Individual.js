import classes from "./Individual.module.css";

const Individual = () => {
	return (
		<>
			<div className={classes["individual"]}>
				<div>
					<h3>フロントエンドエンジニア</h3>
					<div className={classes.company}>
						<p>株式会社イデアイメージ</p>
						<p>2021/5 - 現在</p>
					</div>
					<p className={classes.detail}>
						- WordPressを用いたサイト構築、運用、保守
					</p>
				</div>
			</div>
		</>
	);
};

export default Individual;
