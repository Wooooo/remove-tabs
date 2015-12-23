# remove-tabs
[![Build Status](https://travis-ci.org/Wooooo/remove-tabs.svg?branch=master)](https://travis-ci.org/Wooooo/remove-tabs)
[![Npm Version](https://img.shields.io/npm/v/remove-tabs.svg)](https://npmjs.org/wooooo/remove-tabs)
[![Node Version](https://img.shields.io/node/v/remove-tabs.svg)](https://npmjs.org/wooooo/remove-tabs)
[![Npm License](https://img.shields.io/npm/l/remove-tabs.svg)](https://npmjs.org/wooooo/remove-tabs)

Remove tabs which are added between multi-line template strings by using tagged

<a name="install"></a>
# Install
nodejs
```
npm install remove-tabs --save
```

```javascript
//app.js
const r = require('remove-tabs');
...
```

browser
```html
<script src="path/to/bower_components/remove-tabs/remove-tabs.js"></script>
<script>
	var r = window['removeTabs'];
	...
</script>
```

amd
```javascript
//main.js
require.config({
	...
	paths: {
		...
		'removeTabs': 'path/to/bower_components/remove-tabs/remove-tabs'
	}
});
```

```javascript
//app.js
define(['removeTabs'], function(r) {
	...
});
```

<a name="compability"></a>
# Compability
- Compability depends on whether supports "template string" or not
- IE edge(12+), nodejs(4+), firefox(34+), chrome(41+), Safari(9+), iOS(9+)

[More Detail](https://kangax.github.io/compat-table/es6/#test-template_strings)
<a name="usage"></a>
# Usage
Added tabs are annoying when multi-line template strings.
```javascript
var a = `These
		are annoying!!!`;
		
console.log(a); // 'These\n\t\tare annoying!!!'
```

So I use tagged function to remove them. <br/>
It checks first line's tab number and removes other lines's tabs according to it.

```javascript
var a = 
r`		Not
		annoyed any more :)`;

console.log(a); // 'Not\nannoyed any more :)'
```

If you don't like leading tagged, top-tagged is also allowed.


```javascript
var a = r`
		Not
		annoyed any more too! :)`;

console.log(a); // 'Not\nannoyed any more too! :)'

```

<a name="license"></a>
# License
[MIT](LICENSE)