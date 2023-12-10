import Image from 'next/image';
import styles from './navbar.module.scss'

export default function Navbar() {
	interface NavLinks {
		id: number;
		link: string;
	}

	let id: number = 0;

	const NAV_LINKS: Array<NavLinks> = [
		{ id: id++, link: 'Home' },
		{ id: id++, link: 'About Us' },
		{ id: id++, link: 'Save Our Veterans' },
		{ id: id++, link: 'Contact' },
	];

	return (
		<nav className={styles.navbar}>
			<div className='logo-div'>
				<Image
					src='/../images/veterans-logo.png'
					width={500}
					height={500}
					alt='Veterans Endorsed Logo'
					style={{
						maxWidth: '75%',
						height: 'auto'
					}}
				/>
			</div>
			<ul className={styles.navLinks}>
				{NAV_LINKS.map((navLink) => {
					return (
						<li className={styles.navLink} key={navLink.id}>
							<a href='#'>
								{navLink.link}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
