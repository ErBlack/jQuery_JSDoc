var console = {
	/**
     * Writes a message to the console. You may pass as many arguments as you'd like, and they will be joined together in a space-delimited line.
     * @param {String|Object} object
     */
    log: function(object) {},
    /**
     * Writes a message to the console with the visual "info" icon and color coding and a hyperlink to the line where it was called.
     * @param {String|Object} object
     */
    info: function(object) {},
    /**
     * Writes a message to the console with the visual "warning" icon and color coding and a hyperlink to the line where it was called.
     * @param {String|Object} object
     */
    warn: function(object) {},
    /**
     * Writes a message to the console with the visual "error" icon and color coding and a hyperlink to the line where it was called.
     * @param {String|Object} object
     */
    error: function(object) {},
    /**
     * Prints an error message together with an interactive stack trace of JavaScript execution at the point where the exception occurred.
     * @param {error-object} object
     */
    exception: function(object) {},
    /**
     * Writes a message to the console, including a hyperlink to the line where it was called.
     * @param {String|Object} object
     */
    debug: function(object) {},
    /**
     * Prints an interactive listing of all properties of the object. This looks identical to the view that you would see in the DOM tab.
     * @param {String|Object} object
     */
    dir: function(object) {},
    /**
     * Prints the XML source tree of an HTML or XML element. This looks identical to the view that you would see in the HTML tab. You can click on any node to inspect it in the HTML tab.
     * @param {node} object
     */
    dirxml: function(object) {},
    /**
     * Tests that an expression is true. If not, it will write a message to the console and throw an exception.
     * @param {expression} expression
     */
    assert: function(expression) {},
    /**
     * Clears the console.
     */
    clear: function() {},
    /**
     * Writes the number of times that the line of code where count was called was executed. The optional argument title will print a message in addition to the number of the count.
     * @param {String} object
     */
    count: function(title) {},
    /**
     * Writes a message to the console and opens a nested block to indent all future messages sent to the console. Call console.groupEnd() to close the block.
     * @param {Object} object
     */
    group: function(object) {},
    /**
     * Closes the most recently opened block created by a call to console.group() or console.groupCollapsed()
     * @param {Object} object
     */
    groupEnd: function(object) {},
    /**
     * Like console.group(), but the block is initially collapsed.
     * @param {Object} object
     */
    groupCollapsed: function(object) {},
    /**
     * Turns on the JavaScript profiler. The optional argument title would contain the text to be printed in the header of the profile report.
     * @param {String} object
     */
    profile: function(title) {},
    /**
     * Turns off the JavaScript profiler and prints its report.
     */
    profileEnd: function() {},
    /**
     * Prints an interactive stack trace of JavaScript execution at the point where it is called.
     */
    trace: function() {},
    /**
     * Creates a new timer under the given name. Call console.timeEnd(name) with the same name to stop the timer and print the time elapsed.
     * @param {String} name
     */
    time: function(name) {},
    /**
     * Stops a timer created by a call to console.time(name) and writes the time elapsed.
     * @param {String} name
     */
    timeEnd: function(name) {},
    /**
     * Creates a time stamp, which can be used together with HTTP traffic timing to measure when a certain piece of code was executed.
     * @param {String} name
     */
    timeStamp: function(name) {}
};
