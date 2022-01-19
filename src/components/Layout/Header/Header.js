import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={classes.header}>
			<h1>Resume</h1>
			<nav>
				<ul>
					<li>
						<NavLink to="/resume" activeClassName={classes.active}>
							Resume
						</NavLink>
					</li>
					<li>
						<NavLink to="/cv" activeClassName={classes.active}>
							CV
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
