function decimalAdjust(type, value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }

  value = value.toString().split('e');
  value = Math[type](+`${value[0]}e${value[1] ? +value[1] - exp : -exp}`);

  value = value.toString().split('e');
  return +`${value[0]}e${value[1] ? +value[1] + exp : exp}`;
}

const round10 = (value, exp) => decimalAdjust('round', value, exp);

export const ceil10 = (value, exp) => decimalAdjust('ceil', value, exp);

export default round10;
