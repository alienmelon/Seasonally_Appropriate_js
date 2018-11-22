# Welcome to Seasonally_Appropriate.js
Make your page seasonally appropriate with this very simple DOM javascript snow script for your website.
There are many javascript snow effects. This one is mine.

Click here for a live demo. [http://tetrageddon.com/seasonal/](http://tetrageddon.com/seasonal/)

Seasonally_Appropriate.js spawns snow, but can also be used for leaves, rain (give it a high fall speed), falling skulls, meteorites, and raining flames!
Images are included in the seasonal_js_img folder, where you can replace them with your own graphics.

You can adjust wind velocity, snow amount, and the falling speed!

## To make it snow on your website simply...

Copy the contents of the folder into the root directory of your site. Note that the seasonal_js_img folder and seasonally_appropriate.js should be in the same folder as the page where you want it to snow.

Include
```
<script src="seasonally_appropriate.js"></script>
```
Beneath your page's title tags...

Then call the
```
start_snowing(num_snowAmount, num_windSpeed, num_fallSpeed)
```
function in your page's onload event. Pass it the appropriate values.

Values that look nice are...
```
start_snowing(50, 10, 5);
```

To make it stop snowing call...
```
stop_snowing();
```

That's it! Now it's snowing on your website!

![screenshot](http://tetrageddon.com/seasonal/screenshot.png "Screenshot")
