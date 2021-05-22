import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between flex-wrap content-center border-8 fixed left-0 bottom-0 w-full md:w-11/12 md:left-14 px-2 bg-yellow-600 h-14 min-h-0 mb-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
      <div className="text-white text-lg ml-2">
        Total Costs: Rs.400 <i>({cart.length} items)</i>
      </div>
      <button
        onClick={() => dispatch(quantityDown(id, 1))}
        className="px-6 md:px-8 py-1 text-lg bg-green-700 text-yellow-400 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl mr-2"
      >
        <FiShoppingCart />
      </button>
    </div>
  );
}
