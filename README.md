# h-wx-js

## Install

```base
npm install h-wx-js

or

yarn add h-wx-js
```


## ES Module

Example for how to import the ES module from another module:

```javascript
import hwx from "h-wx-js";

hwx.watchInput(); // Global listening input

or

import { watchInput } from "h-wx-js";

watchInput();

```

```html

<!-- vue -->
<div>
	<input v-model="value" @blur="changeScroll" />
</div>


<script>

import { fixScroll } from "h-wx-js";

export default {
	data () {
		return {
			value: ""
		}
	},
	methods: {
		changeScroll: function () {
			fixScroll();
		}
	}
}

</script>

```

init ```font-size```

```javascript

// main.js

import { initFontSize } from "h-wx-js";

initFontSize();

```
