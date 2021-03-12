module.exports = function reverse (n) {
    if (n > 0){
        let str = n + "";
      return Number(str.split('').reverse().join(''));
      } else {
          if (n < 0) {
        let str = -(n) + "";
        return Number(str.split('').reverse().join(''));
          }
        }
}
