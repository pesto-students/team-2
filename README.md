# team-2

WebRTC - 
peer to peer communication / browser to browser communication.
initial communication (handshaking) and signalling is established through the server and a websocket. after that clients communicate directly.
can achieve lower latency than web sockets.
newer tech, not supported by all browsers.
higher latency for multiple connection scenario.


WebSockets -

The WebSocket specification defines an API establishing "socket" connections between a web browser and a server.
example : var connection = new WebSocket('ws://www.Vidoo.com/video', ['soap', 'xmpp']);
can use 'wss' for secure connection like 'https'.
The second argument accepts optional subprotocols. It can be a string or an array of strings.



