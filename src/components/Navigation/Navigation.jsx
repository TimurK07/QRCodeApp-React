import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {

	return (
			<nav className={s.container}>
					<Link to='/generate' className={s.link}>Генерировать QR Code</Link>
					<Link to='/scan' className={s.link}>Сканировать QR Code</Link>
					<Link to='/generatehistory' className={s.link}>История генеририрования</Link>
					<Link to='/scanhistory' className={s.link}>История сканирования</Link>
			</nav>
	)
}