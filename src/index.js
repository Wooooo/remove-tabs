function r() {
	var strings = arguments[0];									// template strings
	var values = Array.prototype.slice.call(arguments, 1);	// interpolation values 
	
	// concentrate strings and interpolations
	var str = strings.raw.reduce(function(prev, cur, idx) {
		return prev + values[idx-1] + cur;
	})
	.replace(/\r\n/g, '\n'); // replace for window newline \r\n
	
	
	// check top-tagged applied
	var newlineAndTabs = str.match(/^\n[\t]*/);
	
	
	if( newlineAndTabs != null ) {
		var matched = newlineAndTabs[0];
		
		str = str.replace(new RegExp(matched, 'g'), '\n')
				.substr(1);
	}
	
	else {
		var matched = str.match(/^[\t]*/)[0];
		
		str = str.substr(matched.length)
				.replace(new RegExp('\n'+matched, 'g'), '\n');
	}
	
	return str;
}

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function(){
        	return factory;
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    } else {
        // Browser globals (root is window)
        root["removeTabs"] = factory;
  }
}(this, r));
