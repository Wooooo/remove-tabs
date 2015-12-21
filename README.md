# remove-tabs
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
So I use tagged function to remove them.
```
const r = require('remove-tabs');

var a = 
r`      Not
        annoyed any more :)`;

console.log(a); // 'Not\nannoyed any more :)'
```

# 
RemoveTabs module checks first line's tab number and removes other lines's tabs according to it.
