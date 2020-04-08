export default function({ number, billion, million, thousand }){
  let num = Math.abs(Number(number));

  // Nine zeros for Billions
  if (Number(num) >= 1.0e+9) {
    return (num / 1.0e+9).toFixed(billion.decimal) + ` ${billion.unit}`;
  }

  // Six zeros for Millions
  if (Number(num) >= 1.0e+6) {
    return (num / 1.0e+6).toFixed(million.decimal) + ` ${million.unit}`;
  }

  // Thrhee zeros for Thousands
  if (Number(num) >= 1.0e+3) {
    return (num / 1.0e+3).toFixed(thousand.decimal) + ` ${thousand.unit}`;
  }

  // return Intl.NumberFormat('pt-BR', {style: 'decimal'}).format(number)
  return num;
}