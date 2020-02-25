
exports.min = function min (array) {
  if(!array || array.length == 0) return 0;
  return array.reduce((min, item)=> item < min ? min = item : min);
}

exports.max = function max (array) {
  if(!array || array.length == 0) return 0;
  return array.reduce((max, item)=> item > max ? max = item : max);
}

exports.avg = function avg (array) {
  if(!array || array.length == 0) return 0;
  return array.reduce((sum, item)=> sum += item, 0)/array.length;
}
