import React from 'react';

function Header() {
  return (
    <header> <a href="javascript:;" className="logo"><img src="./assets/images/jio-logo.jpg" alt="JioWorldCentre" /></a> 

		<div className="rgtNav">
			<ul className="navUL">
				<li><a href="javascript:;">Menu 01</a></li>
				<li><a href="javascript:;">Menu 02</a></li>
				<li><a href="javascript:;">Menu 03</a></li>
				<li><a href="javascript:;">Menu 04</a></li>
				<li><a href="javascript:;">Menu 05</a></li>
			</ul>
			<div className="rgtBox">
			<ul>
				<li><a href="javascript:;"><img src="./assets/images/login.png" alt="JIO" /></a></li>
				<li><a href="javascript:;"><img src="./assets/images/search.png" alt="JIO" /></a></li>
				<li><a href="javascript:;" className="hamburger"><span>Menu</span></a></li>
			</ul>
		 
		</div>
		</div>


	</header>
  );
}

export default Header;
