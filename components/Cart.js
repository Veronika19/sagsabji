import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { formatQuantity } from './Helper';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.count('cart');

  let whatsAppMsg = '';
  if (cart.length >= 1) {
    cart.forEach((element, index) => {
      let quantity = formatQuantity(element.quantity, element.id);
      whatsAppMsg += `${index + 1}.${element.name} = *${quantity}* \n`;
    });
  }
  whatsAppMsg = whatsAppMsg.substr(0, whatsAppMsg.length - 1);
  whatsAppMsg = encodeURI(whatsAppMsg);
  return (
    <>
      {cart.length && (
        <>
          <div className="flex justify-between flex-wrap content-center border-8 fixed left-0 bottom-0 w-full md:w-11/12 md:left-14 px-2 bg-yellow-600 h-14 min-h-0 mb-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
            <div className="text-white text-lg ml-2">
              <i>Total added: {cart.length} items</i>
            </div>
            <button className="px-6 md:px-8 py-1 text-lg bg-green-700 text-yellow-400 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl mr-2">
              <a href={`https://api.whatsapp.com/send?phone=918897433040&text=${whatsAppMsg}`}>
                <FiSend />
              </a>
            </button>
          </div>
        </>
      )}
    </>
  );
}
