export default function Product({ products }) {
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
          <button className="btn btn-sm btn-outline btn-primary">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}
