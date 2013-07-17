/**
 * Scriptdoc-file for jQuery 1.2.3
 *
 * Created: Jan 25, 2007 19:31:20 GMT
 * Courtesy of Edwin Martin
 *
 * Updated: July 12, 2007
 * Updated by Michelle Petersen
 *
 * Updated: Oct 15, 2007
 * Updated by Davey Waterson
 *
 * Updated: Feb 26, 2008
 * Updated by Michelle Petersen
 */

/**
 * This function accepts a string containing a CSS or basic XPath selector which is then used to match a set of elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>$</b>(<b>html</b>: String) : jQuery<br>
 * <br>
 * Create DOM elements on-the-fly from the provided String of raw HTML.<br>
 * <br>
 * <b>$</b>(<b>elems</b>: Element|Array) : jQuery<br>
 * <br>
 * Wrap jQuery functionality around a single or multiple DOM Element(s).<br>
 * <br>
 * <b>$</b>(<b>fn</b>: Function) : jQuery<br>
 * <br>
 * A shorthand for $(document).<br>
 * <br>
 * @param {String|Element|Function|jQuery} expr
 * @param {Element|jQuery} context
 * @return {jQuery}
 */
function jQuery(expr, context){};

/**
 * This function accepts a string containing a CSS or basic XPath selector which is then used to match a set of elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>$</b>(<b>html</b>: String) : jQuery<br>
 * <br>
 * Create DOM elements on-the-fly from the provided String of raw HTML.<br>
 * <br>
 * <b>$</b>(<b>elems</b>: Element|Array) : jQuery<br>
 * <br>
 * Wrap jQuery functionality around a single or multiple DOM Element(s).<br>
 * <br>
 * <b>$</b>(<b>fn</b>: Function) : jQuery<br>
 * <br>
 * A shorthand for $(document).<br>
 * <br>
 * @param {String} expr
 * @param {Element|jQuery} context
 * @return {jQuery}
 */
var $ = jQuery;

/**
 * The current version of jQuery.
 * @return {String}
 */
jQuery.jquery = '1.2.3';

/**
 * The current version of jQuery.
 * @return {String}
 */
$.jquery = '1.2.3';

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

/**
 * Access a single matched element.
 * @param {Number} num Element's index in array
 * @return {Element}
 */
jQuery.prototype.get = function(num){};

/**
 * Get a document via ajax.<br>
 * This is an easy way to send a simple GET request to a server without having to use
 * the more complex $.ajax function. <BR>
 * It allows a single callback function to be specified that will be executed when
 * the request is complete (and only if the response has a successful response code).
 * <BR>If you need to have both error and success callbacks, you may want to use
 * $.ajax.<br>
 * @param {String} url Document URL
 * @param {Object} data Parameters hash to send with request
 * @param {Function} callback Callback function which will be called when document is loaded
 * @return {XMLHttpRequest}
 */
jQuery.get = function(url, data, callback){};

/**
 * Get a document via ajax.<br>
 * This is an easy way to send a simple GET request to a server without having to use
 * the more complex $.ajax function. <BR>
 * It allows a single callback function to be specified that will be executed when
 * the request is complete (and only if the response has a successful response code).
 * <BR>If you need to have both error and success callbacks, you may want to use
 * $.ajax.<br>
 * @param {String} url Document URL
 * @param {Object} data Parameters hash to send with request
 * @param {Function} callback Callback function which will be called when document is loaded
 * @return {XMLHttpRequest}
 */
$.get = function(url, data, callback){};



/**
 * Set the jQuery object to an array of elements, while maintaining the stack.
 * @param {Element|Array} elems
 * @return {jQuery}
 */
jQuery.prototype.pushStack = function(elems){};

/**
 * Set the jQuery object to an array of elements.
 * @param {Element|Array} elems
 * @return {jQuery}
 */
jQuery.prototype.setArray = function(elems){};

/**
 * Execute a function within the context of every matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.each = function(fn){};

/**
 * Searches every matched element for the object and returns the index of the element, if found, starting with zero.
 * @param {Element} subject
 * @return {Number}
 */
jQuery.prototype.index = function(subject){};

/**
 * Access a property on the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>attr</b>(<b>properties</b>: Map) : jQuery<br>
 * <br>
 * Set a key/value object as properties to all matched elements.<br>
 * <br>
 * <b>attr</b>(<b>key</b>: String, <b>value</b>: Object) : jQuery<br>
 * <br>
 * Set a single property to a value, on all matched elements.<br>
 * <br>
 * <b>attr</b>(<b>key</b>: String, <b>value</b>: Function) : jQuery<br>
 * <br>
 * Set a single property to a computed value, on all matched elements.<br>
 * <br>
 * @param {String} name
 * @param {String} value
 * @return {Object}
 */
jQuery.prototype.attr = function(name, value){};

/**
 * Access a style property on the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>css</b>(<b>properties</b>: Map) : jQuery<br>
 * <br>
 * Set a key/value object as style properties to all matched elements.<br>
 * <br>
 * <b>css</b>(<b>key</b>: String, <b>value</b>: String|Number) : jQuery<br>
 * <br>
 * Set a single style property to a value, on all matched elements.<br>
 * <br>
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
jQuery.prototype.css = function(name, value){};

/**
 * Get the text contents of all matched elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>text</b>(<b>val</b>: String) : String<br>
 * <br>
 * Set the text contents of all matched elements.<br>
 * @param {String} value
 * @return {String}
 */
jQuery.prototype.text = function(value){};

/**
 * Wrap all matched elements with a structure of other elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>wrap</b>(<b>elem</b>: Element) : jQuery<br>
 * <br>
 * Wrap all matched elements with a structure of other elements.<br>
 * <br>
 * @param {String} html
 * @return {jQuery}
 */
jQuery.prototype.wrap = function(html){};

/**
 * Append content to the inside of every matched element.
 * @param {Element|jQuery|String} content
 * @return {jQuery}
 */
jQuery.prototype.append = function(content){};

/**
 * Prepend content to the inside of every matched element.
 * @param {Element|jQuery|String} content
 * @return {jQuery}
 */
jQuery.prototype.prepend = function(content){};

/**
 * Insert content before each of the matched elements.
 * @param {Element|jQuery|String} content
 * @return {jQuery}
 */
jQuery.prototype.before = function(content){};

/**
 * Insert content after each of the matched elements.
 * @param {Element|jQuery|String} content
 * @return {jQuery}
 */
jQuery.prototype.after = function(content){};

/**
 * End the most recent 'destructive' operation, reverting the list of matched elements back to its previous state.
 * @return {jQuery}
 */
jQuery.prototype.end = function(){};

/**
 * Searches for all elements that match the specified expression.
 * @param {String} expr
 * @return {jQuery}
 */
jQuery.prototype.find = function(expr){};

/**
 * Clone matched DOM Elements and select the clones.<BR>
 * <BR>
 * Calling the clone method with an argument
 * is being deprecated (the clone method, as a whole, is being kept). <BR>
 * <BR>
 * Instead of calling <B>.clone(false)</B> you should now do: <b>.clone().empty()</B> instead.
 * @return {jQuery}
 */
jQuery.prototype.clone = function(){};

/**
 * Removes all elements from the set of matched elements that do not match the specified expression(s).
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>filter</b>(<b>filter</b>: Function) : jQuery<br>
 * <br>
 * Removes all elements from the set of matched elements that do not pass the specified filter.<br>
 * <br>
 * @param {String|Function} expression
 * @return {jQuery}
 */
jQuery.prototype.filter = function(expression){};

/**
 * Removes the specified Element from the set of matched elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>not</b>(<b>expr</b>: String) : jQuery<br>
 * <br>
 * Removes elements matching the specified expression from the set of matched elements.<br>
 * <br>
 * <b>not</b>(<b>elems</b>: jQuery) : jQuery<br>
 * <br>
 * Removes any elements inside the array of elements from the set of matched elements.<br>
 * <br>
 * @param {String|jQuery} expr
 * @return {jQuery}
 */
jQuery.prototype.not = function(expr){};

/**
 * Adds more elements, matched by the given expression, to the set of matched elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>add</b>(<b>html</b>: String) : jQuery<br>
 * <br>
 * Adds more elements, created on the fly, to the set of matched elements.<br>
 * <br>
 * <b>add</b>(<b>elements</b>: Element|Array) : jQuery<br>
 * <br>
 * Adds one or more Elements to the set of matched elements.<br>
 * <br>
 * @param {String|Element|Array} expr
 * @return {jQuery}
 */
jQuery.prototype.add = function(expr){};

/**
 * Checks the current selection against an expression and returns true, if at least one element of the selection fits the given expression.
 * @param {String} expr
 * @return {Boolean}
 */
jQuery.prototype.is = function(expr){};

/**
 * Get the current value of the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>val</b>(<b>value</b>: String) : jQuery<br>
 * <br>
 * Set the value of every matched element.<br>
 * <br>
 * @param {String} [value] New value
 * @return {String}
 */
jQuery.prototype.val = function(value){};

/**
 * Get the html contents of the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>html</b>(<b>value</b>: String) : jQuery<br>
 * <br>
 * Set the html contents of every matched element.<br>
 * <br>
 * @param {String} [value] New value
 * @return {String}
 */
jQuery.prototype.html = function(value){};

/**
 * @param {Array} args
 * @param {Boolean} table
 * @param {Number} dir
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.domManip = function(){};

/**
 * Extends the jQuery object itself.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>$.extend</b>(<b>target</b>: Object, <b>prop1</b>: Object, <b>propN</b>: Object) : Object<br>
 * <br>
 * Extend one object with one or more others, returning the original, modified, object.<br>
 * <br>
 * @param {Object} prop
 * @return {Object}
 */
jQuery.extend = function(prop){};

/**
 * Extends the jQuery object itself.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>$.extend</b>(<b>target</b>: Object, <b>prop1</b>: Object, <b>propN</b>: Object) : Object<br>
 * <br>
 * Extend one object with one or more others, returning the original, modified, object.<br>
 * <br>
 * @param {Object} prop
 * @return {Object}
 */
$.extend = function(prop){};

/**
 * Run this function to give control of the $ variable back to whichever library first implemented it.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>$.noConflict</b>(<b>extreme</b>) : jQuery<br>
 * <BR>Revert control of both the $ and jQuery variables to their original owners.
 * <B>Use with discretion.</B>
 * <BR>This is a more-extreme version of the simple noConflict method,
 * as this one will completely undo what jQuery has introduced. This is to be
 * used in an extreme case where you'd like to embed jQuery into a high-conflict
 * environment.
 * <BR><B>NOTE:</B> It's very likely that plugins won't work after this particular
 * method has been called.
 * @return {jQuery}
 */
jQuery.noConflict = function(){};

/**
 * A generic iterator function, which can be used to seemlessly iterate over both objects and arrays.
 * @id jQuery.$.each
 * @alias $.each
 * @param {Object} obj
 * @param {Function} fn
 * @return {Object}
 */
jQuery.each = function(obj, fn){};

/**
 * A generic iterator function, which can be used to seemlessly iterate over both objects and arrays.
 * @id jQuery.$.each
 * @alias $.each
 * @param {Object} obj
 * @param {Function} fn
 * @return {Object}
 */
$.each = function(obj, fn){};

/**
 * Remove the whitespace from the beginning and end of a string.
 * @param {String} str
 * @return {String}
 */
jQuery.trim = function(str){};

/**
 * Remove the whitespace from the beginning and end of a string.
 * @param {String} str
 * @return {String}
 */
$.trim = function(str){};

/**
 * Merge two arrays together, removing all duplicates.
 * @param {Array} first
 * @param {Array} second
 * @return {Array}
 */
jQuery.merge = function(first, second){};

/**
 * Merge two arrays together, removing all duplicates.
 * @param {Array} first
 * @param {Array} second
 * @return {Array}
 */
$.merge = function(first, second){};

/**
 * Filter items out of an array, by using a filter function.
 * @param {Array} array
 * @param {Function} fn
 * @param {Boolean} inv
 * @return {Array}
 */
jQuery.grep = function(array, fn, inv){};

/**
 * Filter items out of an array, by using a filter function.
 * @param {Array} array
 * @param {Function} fn
 * @param {Boolean} inv
 * @return {Array}
 */
$.grep = function(array, fn, inv){};

/**
 * Translate all items in an array to another array of items.
 * @param {Array} array
 * @param {Function} fn
 * @return {Array}
 */
jQuery.map = function(array, fn){};

/**
 * Translate all items in an array to another array of items.
 * @param {Array} array
 * @param {Function} fn
 * @return {Array}
 */
$.map = function(array, fn){};

/**
 * Determine the index of the first parameter in the <code>array</code>.
 * @param {String} value
 * @param {Array} array
 * @return {Number} -1 if not found
 */
jQuery.inArray = function(value, array){};

/**
 * Determine the index of the first parameter in the <code>array</code>.
 * @param {String} value
 * @param {Array} array
 * @return {Number} -1 if not found
 */
$.inArray = function(value, array){};

/**
 * Contains flags for the useragent, read from navigator.
 */
jQuery.browser = {
	msie: true,
	opera: true,
	mozilla: true,
	safari: true,
	version: ''
};

/**
 * Contains flags for the useragent, read from navigator.
 */
$.browser = {
	msie: true,
	opera: true,
	mozilla: true,
	safari: true,
	version: ''
};

/**
 * Get a set of elements containing the unique parents of the matched set of elements.
 * @param {String} [expr]
 * @return {jQuery}
 */
jQuery.prototype.parent = function(expr){};

/**
 * Get a set of elements containing the unique ancestors of the matched set of elements (except for the root element).
 * @param {String} [expr]
 * @return {jQuery}
 */
jQuery.prototype.parents = function(expr){};

/**
 * Get a set of elements containing the unique next siblings of each of the matched set of elements.
 * @param {String} [expr]
 * @return {jQuery}
 */
jQuery.prototype.next = function(expr){};

/**
 * Get a set of elements containing the unique previous siblings of each of the matched set of elements.
 * @param {String} [expr]
 * @return {jQuery}
 */
jQuery.prototype.prev = function(expr){};

/**
 * Get a set of elements containing all of the unique siblings of each of the matched set of elements.
 * @param {String} [expr]
 * @return {jQuery}
 */
jQuery.prototype.siblings = function(expr){};

/**
 * Get a set of elements containing all of the unique children of each of the matched set of elements.
 * @param {String} [expr]
 * @return {jQuery}
 */
jQuery.prototype.children = function(expr){};

/**
 * Append all of the matched elements to another, specified, set of elements.
 * @param {Element|jQuery} content
 * @return {jQuery}
 */
jQuery.prototype.appendTo = function(content){};

/**
 * Prepend all of the matched elements to another, specified, set of elements.
 * @param {Element|jQuery} content
 * @return {jQuery}
 */
jQuery.prototype.prependTo = function(content){};

/**
 * Insert all of the matched elements before another, specified, set of elements.
 * @param {Element|jQuery} content
 * @return {jQuery}
 */
jQuery.prototype.insertBefore = function(content){};

/**
 * Insert all of the matched elements after another, specified, set of elements.
 * @param {Element|jQuery} content
 * @return {jQuery}
 */
jQuery.prototype.insertAfter = function(content){};

/**
 * Remove an attribute from each of the matched elements.
 * @param {String} name
 * @return {jQuery}
 */
jQuery.prototype.removeAttr = function(name){};

/**
 * Adds the specified class(es) to each of the set of matched elements.
 * @param {String} className
 * @return {jQuery}
 */
jQuery.prototype.addClass = function(className){};


/**
 * Replaces one class name to another on each of the set of matched elements.
 * @param {String} from Class to be replaced. Can contain regexp patterns
 * @param {String} to New class name, can be empty string
 * @return {jQuery}
 */
jQuery.prototype.replaceClass = function(from, to){};

/**
 * Removes all or the specified class(es) from the set of matched elements.
 * @param {String} className
 * @return {jQuery}
 */
jQuery.prototype.removeClass = function(className){};

/**
 * Adds the specified class if it is not present, removes it if it is present.
 * @param {String} className
 * @return {jQuery}
 */
jQuery.prototype.toggleClass = function(className){};

/**
 * Removes all matched elements from the DOM.
 * @param {String} expr
 * @return {jQuery}
 */
jQuery.prototype.remove = function(expr){};

/**
 * Removes all child nodes from the set of matched elements.
 * @return {jQuery}
 */
jQuery.prototype.empty = function(){};

/**
 * Reduce the set of matched elements to a single element.
 * @param {Number} pos
 * @return {jQuery}
 */
jQuery.prototype.eq = function(pos){};

/**
 * Reduce the set of matched elements to all elements before a given position.<BR>
 * <BR>This method is being deprecated in favor of the new <b>.slice()</b> method
 * (which works identically to an array's slice method). <BR>
 * <BR>
 * You can duplicate <b>$("div").lt(2) </B>like so: <b>$("div").slice(0,2);</b>
 * @deprecated
 * @param {Number} pos
 * @return {jQuery}
 */
jQuery.prototype.lt = function(pos){};

/**
 * Reduce the set of matched elements to all elements after a given position.
 * <BR>This method is being deprecated in favor of the new <b>.slice()</b> method
 * (which works identically to an array's slice method). <BR>
 * <BR>
 * You can duplicate <b>$("div").gt(2) </B>like so: <b>$("div").slice(2);</b>
 * @deprecated
 * @param {Number} pos
 * @return {jQuery}
 */
jQuery.prototype.gt = function(pos){};

/**
 * Filter the set of elements to those that contain the specified text.<BR>
 * <BR>
 * This method is being deprecated in favor of just using a regular .filter()
 * statement. <BR>
 * <BR>
 * You can duplicate <B>.contains()</B> like so: <B>$("div").filter(":contains(Your Text)");</B>
 * @param {String} str
 * @return {jQuery}
 */
jQuery.prototype.contains = function(str){};

/**
 * Get the current computed, pixel, width of the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>width</b>(<b>value</b>: String|Number) : jQuery<br>
 * <br>
 * Set the CSS width of every matched element.<br>
 * <br>
 * @param {String|Number} [value]
 * @return {Number}
 */
jQuery.prototype.width = function(value){};

/**
 * Get the current computed, pixel, height of the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>height</b>(<b>val</b>: String|Number) : jQuery<br>
 * <br>
 * Set the CSS width of every matched element.<br>
 * <br>
 * @param {String|Number} [value]
 * @return {String}
 */
jQuery.prototype.height = function(value){};

/**
 * A handy, and fast, way to traverse in a particular direction and find a specific element.
 * @param {Element} cur
 * @param {String|Number} num
 * @param {String} dir
 * @return {Element}
 */
jQuery.nth = function(cur, num, dir){};

/**
 * A handy, and fast, way to traverse in a particular direction and find a specific element.
 * @param {Element} cur
 * @param {String|Number} num
 * @param {String} dir
 * @return {Element}
 */
$.nth = function(cur, num, dir){};

/**
 * All elements on a specified axis.
 * @param {Element} elem
 * @return {Array}
 */
jQuery.sibling = function(elem){};

/**
 * All elements on a specified axis.
 * @param {Element} elem
 * @return {Array}
 */
$.sibling = function(elem){};

/**
 * Binds a handler to a particular event (like click) for each matched element.
 * @param {String} type
 * @param {Function} fn
 * @param {Object} data
 * @return {jQuery}
 */
jQuery.prototype.bind = function(type, fn){};

/**
 * Binds a handler to a particular event (like click) for each matched element.
 * @param {String} type
 * @param {Function} fn
 * @param {Object} data
 * @return {jQuery}
 */
jQuery.prototype.one = function(type, fn){};

/**
 * The opposite of bind, removes a bound event from each of the matched elements.
 * @param {String} type
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.unbind = function(type, fn){};

/**
 * Trigger a type of event on every matched element.
 * @param {String} type
 * @return {jQuery}
 */
jQuery.prototype.trigger = function(type){};

/**
 * Toggle between two function calls every other click.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>toggle</b>() : jQuery<br>
 * <br>
 * Toggles each of the set of matched elements.<br>
 * <br>
 * @param {Function} even
 * @param {Function} odd
 * @return {jQuery}
 */
jQuery.prototype.toggle = function(odd, even){};

/**
 * A method for simulating hovering (moving the mouse on, and off, an object).
 * @param {Function} over
 * @param {Function} out
 * @return {jQuery}
 */
jQuery.prototype.hover = function(over, out){};

/**
 * Bind a function to be executed whenever the DOM is ready to be traversed and manipulated.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.ready = function(fn){};

/**
 * Bind a function to the scroll event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.scroll = function(fn){};

/**
 * Bind a function to the submit event of each matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>submit</b>() : jQuery<br>
 * <br>
 * Trigger the submit event of each matched element.<br>
 * <br>
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.submit = function(fn){};

/**
 * Bind a function to the focus event of each matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>focus</b>() : jQuery<br>
 * <br>
 * Trigger the focus event of each matched element.<br>
 * <br>
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.focus = function(fn){};

/**
 * Bind a function to the keydown event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.keydown = function(fn){};

/**
 * Bind a function to the dblclick event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.dblclick = function(fn){};

/**
 * Bind a function to the keypress event of each matched element.
 * @id jQuery.keypress
 * @alias $.keypress
 * @alias jQuery.prototype.keypress
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.keypress = function(){};

/**
 * Bind a function to the error event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.error = function(fn){};

/**
 * Bind a function to the blur event of each matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>blur</b>() : jQuery<br>
 * <br>
 * Trigger the blur event of each matched element.<br>
 * <br>
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.blur = function(fn){};

/**
 * Bind a function to the load event of each matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>load</b>(<b>url</b>: String, <b>params</b>: Object, <b>callback</b>: Function) : jQuery<br>
 * <br>
 * Load HTML from a remote file and inject it into the DOM.<br>
 * <br>
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.load = function(fn){};

/**
 * Bind a function to the select event of each matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>select</b>() : jQuery<br>
 * <br>
 * Trigger the select event of each matched element.<br>
 * <br>
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.select = function(fn){};

/**
 * Bind a function to the mouseup event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.mouseup = function(fn){};

/**
 * Bind a function to the unload event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.unload = function(fn){};

/**
 * Bind a function to the change event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.change = function(fn){};

/**
 * Bind a function to the mouseout event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.mouseout = function(fn){};

/**
 * Bind a function to the keyup event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.keyup = function(fn){};

/**
 * Bind a function to the click event of each matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>click</b>() : jQuery<br>
 * <br>
 * Trigger the click event of each matched element.<br>
 * <br>
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.click = function(fn){};

/**
 * Bind a function to the resize event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.resize = function(fn){};

/**
 * Bind a function to the mousemove event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.mousemove = function(fn){};

/**
 * Bind a function to the mousedown event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.mousedown = function(fn){};

/**
 * Bind a function to the mouseover event of each matched element.
 * @param {Function} fn
 * @return {jQuery}
 */
jQuery.prototype.mouseover = function(fn){};

/**
 * Displays each of the set of matched elements if they are hidden.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>show</b>(<b>speed</b>: String|Number, <b>callback</b>: Function) : jQuery<br>
 * <br>
 * Show all matched elements using a graceful animation and firing an optional callback after completion.<br>
 * <br>
 * @param {String|Number} [speed]
 * @param {Function} [callback]
 * @return {jQuery}
 */
jQuery.prototype.show = function(speed, callback){};

/**
 * Hides each of the set of matched elements if they are shown.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>hide</b>(<b>speed</b>: String|Number, <b>callback</b>: Function) : jQuery<br>
 * <br>
 * Hide all matched elements using a graceful animation and firing an optional callback after completion.<br>
 * <br>
 * @param {String|Number} [speed]
 * @param {Function} [callback]
 * @return {jQuery}
 */
jQuery.prototype.hide = function(speed, callback){};

/**
 * Reveal all matched elements by adjusting their height and firing an optional callback after completion.
 * @alias jQuery.prototype.slideDown
 * @param {String|Number} speed
 * @param {Function} [callback]
 * @return {jQuery}
 */
jQuery.prototype.slideDown = function(speed, callback){};

/**
 * Hide all matched elements by adjusting their height and firing an optional callback after completion.
 * @param {String|Number} speed
 * @param {Function} [callback]
 * @return {jQuery}
 */
jQuery.prototype.slideUp = function(speed, callback){};

/**
 * Toggle the visibility of all matched elements by adjusting their height and firing an optional callback after completion.
 * @param {String|Number} speed
 * @param {Function} [callback]
 * @return {jQuery}
 */
jQuery.prototype.slideToggle = function(speed, callback){};

/**
 * Fade in all matched elements by adjusting their opacity and firing an optional callback after completion.
 * @param {String|Number} speed
 * @param {Function} [callback]
 * @return {jQuery}
 */
jQuery.prototype.fadeIn = function(speed, callback){};

/**
 * Fade out all matched elements by adjusting their opacity and firing an optional callback after completion.
 * @param {String|Number} speed
 * @param {Function} [callback]
 * @return {jQuery}
 */
jQuery.prototype.fadeOut = function(speed, callback){};

/**
 * Fade the opacity of all matched elements to a specified opacity and firing an optional callback after completion.
 * @param {String|Number} speed
 * @param {Number} opacity
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.fadeTo = function(speed, callback){};

/**
 * A function for making your own, custom, animations.
 * @param {Object} params
 * @param {String|Number} speed
 * @param {String} easing
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.animate = function(params, speed, easing, callback){};

/**
 * Load HTML from a remote file and inject it into the DOM, only
 * if it's been modified by the server.<BR>
 * <BR>
 * This convenience method is being removed in favor of the long form use of $.ajax()<BR>
 * <BR>
 * <PRE>
 * $.ajax({ url: "some.php", ifModified: true, ...});
 * </PRE>
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.loadIfModified = function(url, params, callback){};

/**
 * Serializes a set of input elements into a string of data.
 * @return {String}
 */
jQuery.prototype.serialize = function(){};

/**
 * Evaluate all script tags inside this jQuery.
 * @return {jQuery}
 */
jQuery.prototype.evalScripts = function(){};

/**
 * Attach a function to be executed whenever an AJAX request begins and there is none already active.
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.ajaxStart = function(callback){};

/**
 * Attach a function to be executed whenever all AJAX requests have ended.
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.ajaxStop = function(callback){};

/**
 * Attach a function to be executed whenever an AJAX request completes.
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.ajaxComplete = function(callback){};

/**
 * Attach a function to be executed whenever an AJAX request completes successfully.
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.ajaxSuccess = function(callback){};

/**
 * Attach a function to be executed whenever an AJAX request fails.
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.ajaxError = function(callback){};

/**
 * Attach a function to be executed before an AJAX request is sent.
 * @param {Function} callback
 * @return {jQuery}
 */
jQuery.prototype.ajaxSend = function(callback){};

/**
 * Load a remote page using an HTTP GET request, only if
 * it has been modified since it was last retrieved.<BR>
 * <BR>
 * This convenience method is being removed in favor of the long form use of $.ajax()<BR>
 * <BR>
 * <PRE>
 * $.ajax({ url: "some.php", ifModified: true, ...});
 * </PRE>
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {XMLHttpRequest}
 */
jQuery.getIfModified = function(url, params, callback){};

/**
 * Load a remote page using an HTTP GET request, only if
 * it has been modified since it was last retrieved.<BR>
 * <BR>
 * This convenience method is being removed in favor of the long form use of $.ajax()<BR>
 * <BR>
 * <PRE>
 * $.ajax({ url: "some.php", ifModified: true, ...});
 * </PRE>
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {XMLHttpRequest}
 */
$.getIfModified = function(url, params, callback){};

/**
 * Loads, and executes, a remote JavaScript file using an HTTP GET request.
 * @param {String} url
 * @param {Function} [callback]
 * @return {XMLHttpRequest}
 */
jQuery.getScript = function(url, callback){};

/**
 * Loads, and executes, a remote JavaScript file using an HTTP GET request.
 * @param {String} url
 * @param {Function} [callback]
 * @return {XMLHttpRequest}
 */
$.getScript = function(url, callback){};

/**
 * Load JSON data using an HTTP GET request.
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {XMLHttpRequest}
 */
jQuery.getJSON = function(url, params, callback){};

/**
 * Load JSON data using an HTTP GET request.
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {XMLHttpRequest}
 */
$.getJSON = function(url, params, callback){};

/**
 * Load a remote page using an HTTP POST request.
 * @param {String} url
 * @param {Object} params
 * @param {Function} [callback]
 * @return {XMLHttpRequest}
 */
jQuery.post = function(url, params, callback){};

/**
 * Load a remote page using an HTTP POST request.
 * @param {String} url
 * @param {Object} params
 * @param {Function} [callback]
 * @return {XMLHttpRequest}
 */
$.post = function(url, params, callback){};

/**
 * Set the timeout of all AJAX requests to a specific amount of time.<BR>
 * <BR>
 * This convenience method is being removed in favor of the long form
 * use of the more-explicit $.ajaxSetup():<BR>
 * <BR>
 * <PRE>$.ajaxSetup({timeout: 3000});</PRE>
 * @param {Number} time
 */
jQuery.ajaxTimeout = function(time){};

/**
 * Set the timeout of all AJAX requests to a specific amount of time.<BR>
 * <BR>
 * This convenience method is being removed in favor of the long form
 * use of the more-explicit $.ajaxSetup():<BR>
 * <BR>
 * <PRE>$.ajaxSetup({timeout: 3000});</PRE>
 * @param {Number} time
 */
$.ajaxTimeout = function(time){};

/**
 * Setup global settings for AJAX requests.
 * @param {Object} settings
 * @return {undefined}
 */
jQuery.ajaxSetup = function(){};

/**
 * Setup global settings for AJAX requests.
 * @param {Object} settings
 * @return {undefined}
 */
$.ajaxSetup = function(){};

/**
 * Load a remote page using an HTTP request.
 * @param {Object} properties
 * @return {XMLHttpRequest}
 */
jQuery.ajax = function(){};

/**
 * Load a remote page using an HTTP request.
 * @param {Object} properties
 * @return {XMLHttpRequest}
 */
$.ajax = function(){};

/**
 * Add the previous selection to the current selection.
 * <BR>Useful for traversing elements, and then adding something that was matched before the last traversion.
 * @return {jQuery}
 */
jQuery.prototype.andSelf = function(){};

/**
 * Find all the child nodes inside the matched elements (including text nodes), or the content document, if the element is an iframe.
 * @return {jQuery}
 */
jQuery.prototype.contents = function(){};


/**
 * Checks the current selection against a class and returns true, if at least one element of the selection has the given class.
 * @param {String} className
 * @return {Boolean}
 */
jQuery.prototype.hasClass = function(className){};

/**
 * Selects a subset of the matched elements.
 * @param {Number} start
 * @param {Number} [end]
 * @return {jQuery}
 */
jQuery.prototype.slice = function(start, end){};

/**
 * Find all sibling elements before the current element.
 * @param {String} expr
 * @return {jQuery}
 */
jQuery.prototype.prevAll = function(expr){};

/**
 * Find all sibling elements after the current element.
 * @param {String} expr
 * @return {jQuery}
 */
jQuery.prototype.nextAll = function(expr){};

/**
 * Wrap all the elements in the matched set into a single wrapper element.
 * @param {String} html
 * @return {jQuery}
 */
jQuery.prototype.wrapAll = function(html){};

/**
 * Wrap the inner child contents of each matched element (including text nodes)
 * @param {String} html
 * @return {jQuery}
 */
jQuery.prototype.wrapInner = function(html){};

/**
 * Replaces all matched elements with the specified HTML or DOM elements.
 * @param {Element|jQuery} content
 * @return {jQuery}
 */
jQuery.prototype.replaceWith = function(content){};

/**
 * Replaces the elements matched by the specified selector with the matched elements.
 * @param {String} selector
 * @return {jQuery}
 */
jQuery.prototype.replaceAll = function(selector){};

/**
 * This particular method triggers all bound event handlers on an element (for a specific event type) WITHOUT executing the browsers default actions.
 * @param {String} type
 * @param {Object} data
 * @return {jQuery}
 */
jQuery.prototype.triggerHandler = function(type, data){};

/**
 * Stops all the currently running animations on all the specified elements.
 * @return {jQuery}
 */
jQuery.prototype.stop = function(){};

/**
 * Returns a reference to the first element's queue (which is an array of functions).
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>queue</b>(<b>callback</b>: Function) : jQuery<br>
 * <b>queue</b>(<b>queue</b>) : jQuery<br>
 * @return {jQuery}
 */
jQuery.prototype.queue = function(callback){};

/**
 * Removes a queued function from the front of the queue and executes it.
 * @return {jQuery}
 */
jQuery.prototype.dequeue = function(){};

/**
 * Serializes all forms and form elements (like the .serialize() method) but returns a JSON data structure for you to work with.
 * @return {Object}
 */
jQuery.prototype.serializeArray = function(){};

/**
 * States if the current page, in the user's browser, is being rendered using the W3C CSS Box Model
 * @type {Boolean}
 */
jQuery.boxModel = true;

/**
 * States if the current page, in the user's browser, is being rendered using the W3C CSS Box Model
 * @type {Boolean}
 */
$.boxModel = true;

/**
 * Remove all duplicate elements from an array of elements.
 * @param {Array} array
 * @return {Array}
 */
jQuery.unique = function(array){};

/**
 * Remove all duplicate elements from an array of elements.
 * @param {Array} array
 * @return {Array}
 */
$.unique = function(array){};

/**
 * Get the current offset of the first matched element relative to the viewport.
 * The returned object contains two integer properties, <code>top</code> and 
 * <code>left</code>. The method works only with visible elements.
 */
jQuery.prototype.offset = function(){ return {top: 0, left: 0};};
/**
 * Takes a function and returns a new one that will always have a particular context.
 * @param {Function} foo - The function whose context will be changed.
 * @param {Object} context - The object to which the context (this) of the function should be set.  
 */
$.proxy = function(foo, context) { return foo; }