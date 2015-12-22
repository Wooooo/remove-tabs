function r() {
	var strings = arguments[0];
	var values = Array.prototype.slice.call(arguments, 1);
	
	// concentrate strings and interpolations
	var str = strings.raw.reduce(function(prev, cur, idx) {
		return prev + values[idx-1] + cur;
	})
	.replace(/\r\n/g, '\n');
	
	
	var newlineAndTabs = str.match(/^\n[\t]*/);
	
	
	if( newlineAndTabs != null ) {
		var matched = newlineAndTabs[0];
		
		str = str.replace(new RegExp(matched, 'g'), '\n').substr(1);
	}
	
	else {
		var matched = str.match(/^[\t]*/)[0];
		
		str = str.substr(matched.length).replace(new RegExp('\n'+matched, 'g'), '\n');
	}
	
	return str;
}

module.exports = r;