import classes from "./Individual.module.css";

const Individual = (props) => {
	const work = props.data.work.map((data) => (
		<p key={`${data.id}_${data}`} className={classes.detail}>
			{data}
		</p>
	));
	return (
		<>
			<div className={classes["individual"]}>
				<div>
					<h3>{props.data.profession}</h3>
					<div className={classes.company}>
						<p>{props.data.name}</p>
						<p>{props.data.period}</p>
					</div>
					{work}
				</div>
			</div>
		</>
	);
};

export default Individual;
