export default function convertPricestringToNum(string) {
  const priceString = string.product.price;
  const priceWithOutComma = priceString.replace(/,/g, "");
  const currentValue = parseInt(priceWithOutComma);
  return currentValue;
}
