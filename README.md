# remove-tabs
[![Build Status](https://travis-ci.org/Wooooo/remove-tabs.svg?branch=master)](https://travis-ci.org/Wooooo/remove-tabs)
[![Npm Version](https://img.shields.io/npm/v/remove-tabs.svg)](https://npmjs.org/wooooo/remove-tabs)
[![Node Version](https://img.shields.io/node/v/remove-tabs.svg)](https://npmjs.org/wooooo/remove-tabs)
[![Npm License](https://img.shields.io/npm/l/remove-tabs.svg)](https://npmjs.org/wooooo/remove-tabs)

Remove tabs which are added between multi-line template strings by using tagged

# Install
```
npm install remove-tabs --save
```

# Usage
Added tabs are annoying when multi-line template strings.
```
var a = `These
        are annoying!!!`;
        
console.log(a); // 'These\n\t\t\t\tare annoying!!!'
```
So I use tagged function to remove them. <br/>
It checks first line's tab number and removes other lines's tabs according to it.
```
const r = require('remove-tabs');


var a = 
r`      Not
        annoyed any more :)`;

console.log(a); // 'Not\nannoyed any more :)'
```