import { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    // totalAmount: 0,
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
    );

      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex]
        const updatedItem = {
            ...existingItems, 
            quantity: existingItem.quantity + 1
        };
        updatdItems[existingCartItemIndex] = updatedItem;
      } else {
updatedItems.push({...action.item, quantity: 1 });
      }
    return { ...state, items: updatedItems }    // ... update the state to add a meal item
}

if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      
       upddatedItems.splice(existingCartItemIndex, 1); 
    } else {
       const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
       };
       updatedItems[existingCartItemIndex] = updatedItem;  
    }
    return { ...state, items: updatedItems }    // ... update the state to remove a
}

return state;
}

export function CartContextProvider({ children }) {
    const [ cart, dispatchCartActions ] = useReducer(cartReducer, { items: [] });
 // const [items, setItems] = useState([]);
 function addItem(item) {
    dispatchCartActions({ type: 'ADD_ITEM', item });
 }

 function removeItem(id) {
    dispatchCartActions({ type: 'REMOVE_ITEM', item: { id } });
 }
 const cartContext = {
    items: cart.items,
    addItem,
    removeItem
 };

 console.log(cartContext);

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
   
}
// add some bs to test out git
export default CartContext; 

