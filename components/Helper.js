export const formatQuantity = (quantity, id) => {
  let formatedQty = quantity >= 1000 ? `${quantity / 1000} kg` : `${quantity} gm`;

  if ([16, 32].includes(id)) {
    formatedQty = `${quantity} piece`;
  }
  return formatedQty;
};
