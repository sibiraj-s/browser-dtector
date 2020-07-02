const toFixed = (val: string | number, fixed = -1): string | null => {
  const REG_EXP = new RegExp(`^-?\\d+(?:.\\d{0,${fixed}})?`);
  const match = Number(val).toString().match(REG_EXP);
  return match ? match[0] : null;
};

export default {
  toFixed,
};
