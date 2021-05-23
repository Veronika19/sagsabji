import { useDispatch } from 'react-redux';
import { quantityUp, quantityDown, resetCount } from '../store';
import { useSelector } from 'react-redux';
import { FiPlusSquare, FiMinusSquare, FiShoppingCart } from 'react-icons/fi';
import { formatQuantity } from './Helper';

const Counter = ({ id, name, minQuantity }) => {
  // console.log('======', name);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const item = cart.filter((each) => each.id == id);

  let addToCart = (
    <button
      onClick={() => dispatch(quantityUp(id, name, +minQuantity))}
      className="flex flex-row justify-around items-center py-1 w-full md:px-8 text-sm  bg-green-700 text-yellow-400 rounded-tl-xl rounded-tr-xl"
    >
      <span>Add to basket</span> <FiShoppingCart size={18} />
    </button>
  );

  if (item.length > 0) {
    let quantity = formatQuantity(item[0].quantity, item[0].id);

    addToCart = (
      <>
        <button
          onClick={() => dispatch(quantityDown(id, name, +minQuantity))}
          className="px-3 md:px-8 py-1 text-lg bg-green-700 text-yellow-400 rounded-sm rounded-tl-xl"
        >
          <FiMinusSquare />
        </button>
        <h3 className="text-gray-900 title-font font-bold">{quantity}</h3>
        <button
          onClick={() => dispatch(quantityUp(id, name, +minQuantity))}
          className="px-3 md:px-8 py-1 text-lg bg-green-700 text-yellow-400 rounded-sm rounded-tr-xl"
        >
          <FiPlusSquare />
        </button>
      </>
    );
  }

  return <div className="flex text-base justify-between mb-1">{addToCart}</div>;
};

export default Counter;
