import React from "react";

const Navbar = () => {
	const { darkModeEnabled, setDarkModeEnabled } = useTheme();

	return (
		<nav
			id="navbar-example2"
			className={`navbar navbar-expand-lg ${darkModeEnabled === true ? "navbar-dark bg-dark" : "bg-light"
				}`}
		>
			<div className="container justify-content-start">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				
				<div
					className="collapse navbar-collapse nav nav-stacked"
					id="navbarTogglerDemo01"
				>
					<div className="mx-auto d-flex flex-column flex-lg-row flex-fill align-items-center">
						<ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center justify-content-md-evenly flex-fill">
							{/* New Links */}
							<li className="nav-item">
								<a
									className="nav-link"
									href="#"
								>
									Story 1
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="#"
								>
									Story 2
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="#"
								>
									Story 3
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
