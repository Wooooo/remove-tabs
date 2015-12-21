function r(strings) {
	var str = strings.raw[0];
	
	var tabs = str.match(/^[\t]*/)[0];
	
	return str.substr(tabs.length).replace(new RegExp('\n'+tabs, 'g'), '\n');
}

module.exports = r;