import { useContext } from 'react';

import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.png';
import CartContext from '../store/CartContext.jsx';

export default function Header() {
   const cartCtx = useContext(CartContext);

   const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
   }, 0); 
//    const totalCartPrice = cartCtx.items.reduce((totalPrice, item) => totalPrice + item

    return (
     <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A farm" className="logo"/>
            <h1>GreenThumbup fuck you</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({totalCartItems})</Button>
        </nav>
    </header>
    );
}