const PerPieceItems = [16, 43, 54, 55];
const PerDozenItems = [50, 51];

export const formatQuantity = (quantity, id) => {
  let formatedQty = quantity >= 1000 ? `${quantity / 1000} kg` : `${quantity} gm`;
  /**Adding nimboo=16 and bel=32 as they are sold in pieces not in quantity */
  if (PerPieceItems.includes(id)) {
    formatedQty = `${quantity} piece`;
  }
  if (PerDozenItems.includes(id)) {
    formatedQty = `${quantity} dozen`;
  }
  return formatedQty;
};
