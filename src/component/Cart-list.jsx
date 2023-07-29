import { useEffect, useState } from "react";
import CartItem from "./cartItem";
import fetchCartList from "../utils/fetchCartList";

const CartList = () => {
  const [cartItem, setCartItem] = useState([]);
  console.log("Milon", cartItem);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchCartList()
      .then((data) => {
        if (data?.msg == "success") {
          setCartItem(data);
        }
      })
      .catch((err) => console.log("There was an error", +err));
  }, []);

  //   remove cart
  // const handleRemoveCart = () => {
  //   removeCart(productId)
  //     .then((data) => {
  //       if (data?.msg === "success") {
  //         const remainingItem = cartItem.filter(
  //           (item) => item.product.id !== productId
  //         );
  //         setCartItem(remainingItem);
  //       }
  //     })
  //     .catch((err) => console.log("There was an Error", err));
  // };

  //   decide what to Render
  let output;
  if (error) {
    output = <div>There was an Error</div>;
  } else if (cartItem.length > 0) {
    output = cartItem.map((item) => (
      <CartItem product={cartItem} key={item.id}></CartItem>
    ));
  } else {
    <div>Please Add a Products</div>;
  }

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      {/* {cartItem.length === 0 ? (
        <Loader></Loader>
      ) : (
        
      )} */}
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        {output}

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: 10</h2>
            <h6>Total Price: $1,000</h6>
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
