import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.png';

export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A farm" className="logo"/>
            <h1>GreenThumbup Items</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>
    </header>
}