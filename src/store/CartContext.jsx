import { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    // totalAmount: 0,
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
      const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

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
    // ... update the state to remove a meal item
}

return state;
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] });
 // const [items, setItems] = useState([]);
    return <CartContext.Provider>{children}</CartContext.Provider>
   
}

export default CartContext; 

