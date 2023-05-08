const getshoppingCart = () => {
  let shoppingCart = {};
  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};
const removeFromDb = (id) => {
  const shoppingCart = getshoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const AddToDb = (id) => {
  let shoppingCart = getshoppingCart();
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};
export { AddToDb, getshoppingCart, removeFromDb, deleteShoppingCart };
