# nlapi
Public NLAPI (Nightlight API). With public NLAPI, you can get data instantly for your own project.

Read documentation here: https://api.night-light.cz/

To use NLAPI, you can either use the remote source when implementing it on a website:

```html
<script src="https://api.night-light.cz/nlapi2.js" type="application/javascript">
```

Or you can download this package and then import it like so:

```javascript
import { NIGHTLIGHTAPI } from './nlapi2.js';

// Then work with it, example:

var nlapi = new NIGHTLIGHTAPI(login, password);

console.log(nlapi.getUser('someuser').getBio());
```
