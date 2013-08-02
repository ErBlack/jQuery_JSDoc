/**
 * Scriptdoc-file for jQuery
 */

/**
 * This function accepts a string containing a CSS or basic XPath selector which is then used to match a set of elements.
 * Alternatives
 * $(html: String) : jQuery
 * Create DOM elements on-the-fly from the provided String of raw HTML.
 * $(elems: Element|Array) : jQuery
 * Wrap jQuery functionality around a single or multiple DOM Element(s).
 * $(fn: Function) : jQuery
 * A shorthand for $(document).
 * 
 * @param {String|Element|Function|jQuery} expr
 * @param {Element|jQuery} context
 * @return {jQuery}
 */
function jQuery(expr, context){};
/**
 * This function accepts a string containing a CSS or basic XPath selector which is then used to match a set of elements.
 * Alternatives
 * $(html: String) : jQuery
 * Create DOM elements on-the-fly from the provided String of raw HTML.
 * $(elems: Element|Array) : jQuery
 * Wrap jQuery functionality around a single or multiple DOM Element(s).
 * $(fn: Function) : jQuery
 * A shorthand for $(document).
 * @param {String} expr
 * @param {Element|jQuery} context
 * @return {jQuery}
 */
var $ = jQuery;
/**
 * The number of elements in the jQuery object.
 * @alias $.length
 * @type {Number}
 */
jQuery.prototype.length = 0;
/**
 * The number of elements currently matched.
 * @return {Number}
 */
jQuery.prototype.size = function(){};