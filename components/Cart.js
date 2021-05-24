import { FiSend } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { resetCart } from '../store';
import { formatQuantity } from './Helper';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let whatsAppMsg = '';
  if (cart.length >= 1) {
    cart.forEach((element, index) => {
      let quantity = formatQuantity(element.quantity, element.id);
      whatsAppMsg += `${index + 1}.${element.name} = *${quantity}* \n`;
    });
  }
  whatsAppMsg = whatsAppMsg.substr(0, whatsAppMsg.length - 1);
  whatsAppMsg = encodeURI(whatsAppMsg);

  const sendOrder = (whatsAppMsg) => {
    dispatch(resetCart());
    window.open(`https://api.whatsapp.com/send?phone=918897433040&text=${whatsAppMsg}`);
  };

  let cartComp = '';
  if (cart.length) {
    cartComp = (
      <div className="flex justify-between flex-wrap content-center border-8 fixed left-0 bottom-0 w-full md:w-11/12 md:left-14 px-2 bg-yellow-600 h-14 min-h-0 mb-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
        <div className="text-white text-lg ml-2">
          <i>Total added: {cart.length} items</i>
        </div>
        <button
          onClick={() => sendOrder(whatsAppMsg)}
          className="px-6 md:px-8 text-lg bg-green-700 text-yellow-400 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl"
        >
          <div className="flex  flex-row items-center">
            <span className="mr-2">Order</span>
            <FiSend />
          </div>
        </button>
      </div>
    );
  }

  return <>{cartComp}</>;
}
