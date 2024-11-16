const ProductSlider = () => {
    return (
      <div className="w-full bg-white border rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <div className="flex gap-4 overflow-x-auto">
          <div className="min-w-[200px] bg-green-100 p-4 rounded-lg text-center">
            Product A
          </div>
          <div className="min-w-[200px] bg-green-100 p-4 rounded-lg text-center">
            Product B
          </div>
          <div className="min-w-[200px] bg-green-100 p-4 rounded-lg text-center">
            Product C
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductSlider;
  