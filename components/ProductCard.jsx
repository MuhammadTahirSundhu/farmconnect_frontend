const ProductCard = ({ title, price }) => {
    return (
      <div className="bg-white border rounded-lg shadow-lg p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-green-700 font-semibold text-lg">{price}</p>
        <button className="bg-green-700 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-800">
          View Details
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  