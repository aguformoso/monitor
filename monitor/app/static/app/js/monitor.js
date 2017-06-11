/**
 * Created by agustin on 6/5/17.
 */

(function (f, b) {
    var c = f.createElement(b),
        e = f.getElementsByTagName(b)[0];
    c.src = "https://cdn.dev.lacnic.net/require.js";
    c.type = "text/javascript";
    e.parentNode.insertBefore(c, e);
    c.onload = c.onreadystatechange = function () {

        // Require libraries loaded
        requirejs.config({
            "paths": {
                "boomerang": "https://cdn.rawgit.com/LACNIC/boomerang/master/boomerang",
                "rt": "https://cdn.rawgit.com/LACNIC/boomerang/master/plugins/rt",
                "navtiming": "https://cdn.rawgit.com/LACNIC/boomerang/master/plugins/navtiming",
            }
        });

        require(["boomerang", "rt", "navtiming"], function (/* No params */) {
            // Configuration loaded now, safe to do other require calls
            // that depend on that config.

            //  Launch a blocking fetch before running BOOMR
            fetch(
                'https://simon.lacnic.net/getCountry'
            ).then(function (a) {
                return a.text();
            }).then(function (country_origin) {

                //  After knowing the country, run BOOMR
                BOOMR.subscribe("before_beacon", function (o) {

                    //  Native fetch implementation is not ready for POST yet...
                    //  Polyfill version neither... :( https://github.com/github/fetch/blob/master/fetch.js

                    o.user_agent = navigator.userAgent;
                    o.country_origin = country_origin;
                });

                BOOMR.init({
                    beacon_url: "https://monitor.dev.lacnic.net/post/",
                    beacon_type: "POST",
                    log: false
                });
            })
        });
    }
}(document, "script"));