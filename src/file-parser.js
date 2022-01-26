/**
 * We want to be able to convert a given file size ( string or number )
 * of any valid unit of measure ( "gb", "mb", "kb", etc ) into a floating
 * point number that represents the file size in mbs
 *
 * The fileParser function should work like this:
 *
 * fileParser("100kb")     ---> 0.1
 * fileParser("100mb")     ---> 100.00
 * fileParser("100gb")     ---> 102400.00
 * fileParser("100tb")     ---> 104857600.00
 * fileParser("   100kb")  ---> 0.1
 * fileParser("100    kb") ---> 0.1
 * fileParser("100kb   ")  ---> 0.1
 *
 * Also, any invalid input (format or unit) should result in an error.
 * For example:
 *
 * fileParser()           ---> Error
 * fileParser("whatever") ---> Error
 * fileParser("100wba")   ---> Error
 * fileParser("110al0")   ---> Error
 *
 * @param  {string} file-size - file size to be converted
 * @return {number}
 */
module.exports = function (fileSize) {
  // ...
};
