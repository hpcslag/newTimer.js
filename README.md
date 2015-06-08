# newTimer.js
timer class can help you add time

###initialization timer
```javascript
var Timer = require('./timer.js');
var timer = new Timer(function() { // init timer with defalut(0) seconds
    console.log("FOO");
}, 0);
```

###add time
````javascript
timer.add(1000);
```
