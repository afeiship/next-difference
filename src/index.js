import nx from '@jswork/next';

nx.difference = function (inArray1, inArray2) {
  return inArray1.filter(function (i) {
    return inArray2.indexOf(i) === -1;
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.difference;
}

export default nx.difference;
