var props = require('repl')._builtinLibs.reduce(function (obj, modulename) {
  obj[modulename] = {
    get: function () {
      return require(modulename);
    }
  };
  return obj;
}, {});

Object.defineProperties(exports, props);
