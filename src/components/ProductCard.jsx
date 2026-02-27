export default function ProductCard({ product, onBuyNow }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-64 h-[420px] flex flex-col overflow-hidden">

      <div className="h-44 w-full bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-4 text-center">

        <h2 className="text-lg font-semibold h-12 flex items-center justify-center">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm h-12 overflow-hidden">
          {product.description}
        </p>

        <p className="text-lg font-medium mt-2">
          ₹{product.price}
        </p>

        <div className="flex justify-center mt-2 text-orange-400 text-sm">
          ★ ★ ★ ★ <span className="text-black">★</span>
        </div>

        <button 
        className="mt-auto w-full py-2 bg-teal-600 text-white font-medium hover:bg-teal-700 transition rounded-md" 
        onClick={onBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}