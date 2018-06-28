(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.difference = function (inArray1, inArray2) {
    return inArray1.filter(function (i) {
      return inArray2.indexOf(i) === -1;
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.difference;
  }

}());
