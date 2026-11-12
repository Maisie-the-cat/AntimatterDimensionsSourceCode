if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    const startNum = typeof start === "number" ? start : 0;

    if (startNum + search.length > this.length) {
      return false;
    }
    return this.indexOf(search, startNum) !== -1;
  };
}


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this === null || this === undefined) {
        throw new TypeError('"this" is null or not defined');
      }

      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      const n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // A. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

if (!Math.log10) {
  Math.log10 = Math.log10 || function(x) {
    return Math.log(x) * Math.LOG10E;
  };
}

if (!Math.log2) {
  Math.log2 = Math.log2 || function(x) {
    return Math.log(x) * Math.LOG2E;
  };
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    const thisArgFinal = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArgFinal, this[i], i, this);
    }
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value(predicate, thisArg) {
      // 1. Let O be ? ToObject(this value).
      if (this === null || this === undefined) {
        throw new TypeError('"this" is null or not defined');
      }

      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.

      // 5. Let k be 0.
      let k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // A. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        const kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // E. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

Array.max = function(array) {
  return Math.max(...array);
};

Array.min = function(array) {
  return Math.min(...array);
};

Object.invert = function(obj) {
  const result = {};
  const keys = Object.keys(obj);
  for (let i = 0, length = keys.length; i < length; i++) {
    result[obj[keys[i]]] = keys[i];
  }
  return result;
};

if (typeof Object.assign !== "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    // .length of function is 2
    value: function assign(target, ...sources) {

      // TypeError if undefined or null
      if (target === null || target === undefined) {
        throw new TypeError("Cannot convert undefined or null to object");
      }

      const to = Object(target);

      for (const nextSource of sources) {
        // Skip over if undefined or null
        if (nextSource !== null && nextSource !== undefined) {
          for (const nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
