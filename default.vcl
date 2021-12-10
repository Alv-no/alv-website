vcl 4.0;

backend default {
    .host = "localhost";
    .port = "9000";
}

sub vcl_recv {
    if (req.method == "PURGE") {
        return (purge);
    }    
}

sub vcl_backend_response {
	set beresp.ttl = 1w;
}	