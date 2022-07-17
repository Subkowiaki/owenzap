export function valueFormaterBrl(value: number) {
  const valueString = value.toString();
  const cents = valueString.slice(-2);
  const brl = valueString.slice(0 , valueString.length - 2);

  return `R$: ${brl},${cents}`
}