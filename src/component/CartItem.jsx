export default function CartItem({ product, remove }) {
  const {title, image, price, id} = product || {};
  return (
    <div className="container col-span-2">
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
        <div className="card card-side bg-white shadow-xl">
          <figure>
            <img className="w-40" src={image} alt={title} />
          </figure>
          <div className="card-body">
            <h6 className="text-black">{title}</h6>
            <h3 className="text-xl font-bold text-gray-700">
              Price: {price}
            </h3>
            <div className="card-actions justify-end">
              <button onClick={() => remove(id)} className="btn btn-sm btn-primary btn-outline">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
