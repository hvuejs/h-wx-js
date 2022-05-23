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
import * as hwx from "h-wx-js";

hwx.watchInput(); // Global listening input

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
