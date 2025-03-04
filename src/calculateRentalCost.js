/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;

  if (days >= 7) {
    sum = 40 * days - 50;
  } else if (days >= 3) {
    sum = 40 * days - 20;
  } else {
    sum = 40 * days;
  }

  return sum;
}

module.exports = calculateRentalCost;
