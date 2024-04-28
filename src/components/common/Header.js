import '../common/_Header.scss';
import Logo from './Logo';
import Hamburger from './Hamburger';

const Header = () => {

	return (
		<header className="header">
			<Logo />
			<Hamburger />
		</header>
	)
};

export default Header;