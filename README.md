# Monitor - Web performance monitoring tool

## Public script
Put the following script in pages you want to monitor variuos browser timers, and perceived bandwidth and latency between browser and server. The script loads in an asynchronous way, so it won't block or downgrade usual page performance.

```javascript
(function (d, s) {
        var js = d.createElement(s),
                sc = d.getElementsByTagName(s)[0];

        js.src = "http://179.0.156.22/static/app/js/monitor.js";
        js.type = "text/javascript";
        sc.parentNode.insertBefore(js, sc);

        js.onload = js.onreadystatechange = function () {

            if(Math.random() > <percentage of users monitored>) { // e.g.: 1.0 for 100% users, 0.6 for 60% users being monitored.
                return;
            }

            BOOMR.init({
                BW: {
                    base_url: '<your/path/to/images/dir>',
                    cookie: 'BW',
                    cookie_exp: <cookie expiration in seconds>
                },
                RT: {
                    cookie: 'RT',
                    cookie_exp: <cookie expiration in seconds>
                }
            })
        };

    }(document, "script"));

```
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/LACNIC/monitor/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

