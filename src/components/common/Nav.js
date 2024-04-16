import '../common/_Nav.scss';
const Nav = ({additionalClass}) => {

	const navLinks = [
		{name: 'home', url: '/'},
		{name: 'shop', url: '/'},
		{name: 'about', url: '/'},
		{name: 'contact', url: '/'},
	];

	return (
		<nav className={`nav ${additionalClass}`}>
			<ul className="nav__list">
				{navLinks.map(({name, url}) => (
					<li key={name} className="nav__item">
						<a href={url} className="nav__link">{name}</a>
					</li>
				))}
			</ul>
		</nav>
	)

};
export default Nav;