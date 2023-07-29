import createCart from "../utils/createCart";

export default function Product({ products = {} }) {
  const handleAddtoCart = () => {
    createCart(products.id)
      .then((data) => {
        if (data?.msg == "success") {
          alert("The Product Was added to cart");
        }
      })
      .catch((err) => alert("There Was an Error", +err));
  };
  return (
    <div className="card w-100 bg-white shadow-xl">
      <figure>
        <img src={products.image} alt={products.title} />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{products.title}</h6>
        <p className="text-sm text-gray-400">{products.short_des}</p>
        <h6 className="font-bold"> {products.price} </h6>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddtoCart}
            className="btn btn-sm btn-outline btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
