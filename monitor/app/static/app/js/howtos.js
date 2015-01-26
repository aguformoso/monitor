// Since we don't set a beacon_url, we'll just subscribe to the before_beacon function
// and print the results into the browser itself.
BOOMR.subscribe('before_beacon', function(o) {
	var html = "", t_name, t_other, others = [];
    var json = {};

	if(!o.t_other) o.t_other = "";

	for(var k in o) {
		if(!k.match(/^(t_done|t_other|bw|lat|bw_err|lat_err|u|r2?)$/)) {
			if(k.match(/^t_/)) {
				o.t_other += "," + k + "|" + o[k];
			}
			else {
				others.push(k + " = " + o[k]);
			}
		}
	}

    if (o.t_done) {
        html += "This page took " + o.t_done + " ms to load<br>";
        json.t_done = o.t_done;
    }
	if(o.t_other) {
		t_other = o.t_other.replace(/^,/, '').replace(/\|/g, ' = ').split(',');
		html += "Other timers measured: <br>";
		for(var i=0; i<t_other.length; i++) {
			html += "&nbsp;&nbsp;&nbsp;" + t_other[i] + " ms<br>";
		}
	}
    if (o.bw) {
        html += "Your bandwidth to this server is " + parseInt(o.bw * 8 / 1024) + "kbps (&#x00b1;" + parseInt(o.bw_err * 100 / o.bw) + "%)<br>";
        json.bw = o.bw;
        json.bw_err = o.bw_err;
    }
    if (o.lat) {
        html += "Your latency to this server is " + parseInt(o.lat) + "&#x00b1;" + o.lat_err + "ms<br>";
        json.lat = o.lat;
        json.lat_err = o.lat_err;
    }

	var r = document.getElementById('results');
    r.innerHTML = html;
//    r.innerHTML += JSON.stringify(json);

    for(var k in o) {
        json[k] = o[k];
    }

    if(others.length) {

//       json.nt_red_cnt=nt_red_cnt;
//       json.nt_nav_type=others.nt_nav_type;
//       json.nt_nav_st=others.nt_nav_st;
//       json.nt_red_st=others.nt_red_st;
//       json.nt_red_end=others.nt_red_end;
//       json.nt_fet_st=others.nt_fet_st;
//       json.nt_dns_st=others.nt_dns_st;
//       json.nt_dns_end=others.nt_dns_end;
//       json.nt_con_st=others.nt_con_st;
//       json.nt_con_end=others.nt_con_end;
//       json.nt_req_st=others.nt_req_st;
//       json.nt_res_st=others.nt_res_st;
//       json.nt_res_end=others.nt_res_end;
//       json.nt_domloading=others.nt_domloading;
//       json.nt_domint=others.nt_domint;
//       json.nt_domcontloaded_st=others.nt_domcontloaded_st;
//       json.nt_domcontloaded_end=others.nt_domcontloaded_end;
//       json.nt_domcomp=others.nt_domcomp;
//       json.nt_load_st=others.nt_load_st;
//       json.nt_load_end=others.nt_load_end;
//       json.nt_unload_st=others.nt_unload_st;
//       json.nt_unload_end=others.nt_unload_end;
//       json.nt_spdy=others.nt_spdy;
//       json.nt_first_paint=others.nt_first_paint;
//       json.rt_start=others.rt.start;
//       json.rt_tstart=others.rt.tstart;
//       json.rt_bstart=others.rt.bstart;
//       json.rt_end=others.rt.end;
//       json.bw_time=others.bw_time;

		r.innerHTML += "Other parameters:<br>";

		for(var i=0; i<others.length; i++) {
			var t = document.createTextNode(others[i]);
			r.innerHTML += "&nbsp;&nbsp;&nbsp;";
			r.appendChild(t);
			r.innerHTML += "<br>";

		}
	}

    jQuery.ajax(
        {
            url: "post/",
            type: "POST",
            data: json
        }
    );

});

