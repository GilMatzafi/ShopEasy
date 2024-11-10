// Utility function to round numbers to 2 decimal places
const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  
  export const updateCart = (state) => {
    
    // Calculate item prices
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    
    // Calculate shipping price
    // If items price is greater than 100, shipping is free; otherwise, it's 10
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
    
    // Calculate tax price at 15% of the items price
    state.taxPrice = addDecimals(0.15 * state.itemsPrice);
    
    // Calculate the total price (items + shipping + tax)
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);
    
    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(state));

    return state;
};
  