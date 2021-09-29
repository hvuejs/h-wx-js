# h-ios-input

## Install

```base
    npm install h-ios-input --save
```


## ES Module

Example for how to import the ES module from another module:

```javascript
import hIosInput from "h-ios-input";

hIosInput.watchInput(); // Global listening input

```

```javascript

import hIosInput from "h-ios-input";

// vue
<input @blur="changeScroll" />

// methods:
function changeScroll () {
  hIosInput.fixScroll();
}

```
