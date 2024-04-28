import '../common/_Hamburger.scss';
import open from '../../img/icon-hamburger.svg';
import close from '../../img/icon-close.svg';
import { useState } from 'react';
import Nav from './Nav';

const Hamburger = () => {

	const [active, setActive] = useState(false);

	const hamburgerStateHandler = () => {
		setActive(!active);
	};

	return (
		<div className="burger">
			<button onClick={hamburgerStateHandler} className="burger__button">
				{active ? <img src={close} alt='close hamburger button' /> : <img src={open} alt='open hamburger button' />}
			</button>
			<Nav additionalClass={active ? 'active' : ''} />
		</div>
	)

};
export default Hamburger;