/**
 * Created by agustin on 6/5/17.
 */

define(function () {

    monitor = {};

    /*
     * Call from outer scope as MONITOR.init();
     */
    monitor.init = function () {
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
                        "boomerang": "https://cdn.rawgit.com/LACNIC/boomerang/a3b8ac59/boomerang",
                        "rt": "https://cdn.rawgit.com/LACNIC/boomerang/a3b8ac59/plugins/rt",
                        "navtiming": "https://cdn.rawgit.com/LACNIC/boomerang/a3b8ac59/plugins/navtiming",
                    }
                });

                /*
                 * Boomerang works ith globally suscribed object BOOMR
                 */
                require(["boomerang"], function (/* No params */) {

                    /*
                     * RT and Nav Timing plugins use the global BOOMR variable
                     */
                    require(["rt", "navtiming"], function (/* No params */) {

                        //  Subscribing a promise before launch
                        fetch(
                            'https://simon.lacnic.net/getCountry'
                            // 'http://simon.local:8000/getCountry'
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
                                // beacon_url: "http://monitor.local:8004/post/",
                                beacon_type: "POST",
                                log: false
                            });
                        })
                    });
                });
            }
        }(document, "script"));
    };

    return monitor;
});