import classes from './Header.module.css';
import logo from "../assets/logo.jpeg"

const Header = () => {
    return <img className={classes.logo} alt="Eden Logo" src={logo}></img>
};

export default Header;