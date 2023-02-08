vcl 4.0;

backend default {
    .host = "localhost";
    .port = "8080";
}

sub vcl_recv {
    if (req.method == "PATCH") {
        ban("req.url ~ .");
        return (synth(200, "Full cache cleared"));
    }
    unset req.http.Cookie;
}

sub vcl_backend_response {
	set beresp.ttl = 2w;
  set beresp.grace = 10m;

  if (beresp.status == 500 || beresp.status == 502 || beresp.status == 503 || beresp.status == 504)
  {
    if (bereq.is_bgfetch)
    {
        return (abandon);
    }

    set beresp.uncacheable = true;
  }
}	
