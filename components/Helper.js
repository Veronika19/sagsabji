export const formatQuantity = (quantity, id) => {
  let formatedQty = quantity >= 1000 ? `${quantity / 1000} kg` : `${quantity} gm`;
  /**Adding nimboo=16 and bel=32 as they are sold in pieces not in quantity */
  if ([16, 32, 45, 46, 49, 50].includes(id)) {
    formatedQty = `${quantity} piece`;
  }
  return formatedQty;
};
