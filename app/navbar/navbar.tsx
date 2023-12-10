export default function Navbar() {
	interface NavLinks {
		id: number;
		link: string;
	}

	let id: number = 0;

	const NAV_LINKS: Array<NavLinks> = [
		{ id: id++, link: 'Home' },
		{ id: id++, link: 'About Us' },
		{ id: id++, link: 'Contact' },
	];

	return (
		<nav className='navbar'>
			{NAV_LINKS.map((navLink) => {
				return (
					<ul className='nav-links' key={navLink.id}>
						<li className='nav-link'>
							<a href='#' className='nav-item'>{navLink.link}</a>
						</li>
					</ul>
				);
			})}
		</nav>
	);
}
