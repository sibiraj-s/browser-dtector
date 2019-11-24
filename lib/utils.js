const toFixed = (num, fixed) => {
  const REG_EXP = new RegExp(`^-?\\d+(?:.\\d{0,${fixed || -1}})?`);
  return num.toString().match(REG_EXP)[0];
};

export default {
  toFixed,
};
