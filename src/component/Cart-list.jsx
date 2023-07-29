import { useEffect, useState } from "react";
import CartItem from "./cartItem";
import fetchCartList from "../utils/fetchCartList";
import RemoveCart from "../utils/removeCart";
import convertPricestringToNum from "../utils/convertPricestringToNum";

const CartList = () => {
  const [cartItem, setCartItem] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCartList()
      .then((data) => {
        if (data?.msg == "success") {
          setCartItem(data?.data);
        }
      })
      .catch((err) => console.log("There was an error", +err));
  }, []);

  // rmeove Item
  const handleRemovecart = (productId) => {
    RemoveCart(productId)
      .then((data) => {
        if (data?.msg === "success") {
          // remove that item from my local state : iutems
          const reminingItems = cartItem.filter(
            (item) => item.product.id !== productId
          );

          setCartItem(reminingItems);
        }
      })
      .catch((err) => console.log("There was an erros"));
  };

  // calculate price
  const calculateTotalPrice = () => {
    const totalPrice = cartItem.reduce((total, currentValue) => {
      const price = convertPricestringToNum(currentValue);
      return total + price;
    }, 0);
    return totalPrice.toLocaleString();
  };

  //   decide what to Render
  let output;
  if (error) {
    output = <div>There was an Error</div>;
  } else if (cartItem.length > 0) {
    output = cartItem.map((item) => (
      <CartItem
        key={item?.id}
        product={item.product}
        remove={handleRemovecart}
      ></CartItem>
    ));
  } else {
    <div>Please Add a Products</div>;
  }

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        {output}

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: 10</h2>
            <h6>Total Price: ${calculateTotalPrice()}</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartList;
