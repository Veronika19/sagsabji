/**
 * Category groups from table
 * {1: Weight, 2: Quantity, 3: Dozen}
 */

export const formatQuantity = (quantity, optnGrpId) => {
  let formatedQty = quantity >= 1000 ? `${quantity / 1000} kg` : `${quantity} gm`;
  /**Adding nimboo=16 and bel=32 as they are sold in pieces not in quantity */
  console.log('optnGrpIdoptnGrpId', optnGrpId);
  if (optnGrpId === 2) {
    formatedQty = `${quantity} piece`;
  }
  if (optnGrpId === 3) {
    formatedQty = `${quantity} dozen`;
  }
  return formatedQty;
};
