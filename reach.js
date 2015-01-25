'use strict';

var get = require('getobject').get;

function reach(parts, obj){
  return get(obj, parts);
}

module.exports = reach;
