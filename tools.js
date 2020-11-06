// 1.判断数据类型：
function type(target) {
  // 1.分两类：原始值，引用值
  // 2.区分引用值
  const template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number - object",
    "[object Boolean]": "boolean - object",
    "[object String]": "string - object"
  }

  if (target === null) return null

  if (typeof (target) == 'object') {
    // Array
    // Object
    // 包装类（new Number）Object.prototype.toString
    const str = Object.prototype.toString.call(target)
    return template[str]
  } else {
    return typeof (target) // 原始值
  }
}

// 2.数组去重
Array.prototype.unique = function () {
  let obj = {},
    arr = [],
    len = this.length
  for (let i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      obj[this[i]] = "abc"
      arr.push(this[i])
    }
  }
  return arr
}