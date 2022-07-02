export default function formatPrice (numb: number): string {
  const price = (numb/100).toString().replace(".", ",") + " €";
  return price
}