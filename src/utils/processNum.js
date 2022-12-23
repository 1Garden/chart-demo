const processNum = (num) => {
  return num.toFixed(2).toString().replace(/\d+/, (n) => {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ',';
    });
  });
};

export default processNum;
