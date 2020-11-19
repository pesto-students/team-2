# team-2

WebRTC - 
used for peer to peer communication / browser to browser communication.
initial communication (handshaking) and signaling is established through the server and a websocket. after that clients communicate directly.
can achieve lower latency than web sockets.
newer tech, not supported by all browsers.

WebRTC still needs servers for clients to exchange metadata to coordinate communication (this is called signaling) and To cope with network address translators (NATs) and firewalls.

Signaling is the process of coordinating communication. In order for a WebRTC application to set up a 'call', its clients need to exchange information:

Session control messages used to open or close communication.
Error messages.
Media metadata such as codecs and codec settings, bandwidth and media types.
Key data, used to establish secure connections.
Network data, such as a host's IP address and port as seen by the outside world.

But sometimes this would not be sufficient because there are possibilities where some users might face connectivity issues because of different IP networks where Firewalls and NATs (Network Address Translators) could include specific network policies that will not allow RTC communications.

In order to solve this kind of network connection scenario, we need to use ICE (Interactive Connectivity Establishment) protocol and it defines a systematic way of finding possible communication options between a peer and the Video Gateway (WebRTC).

ICE (INTERACTIVE CONNECTIVITY ESTABLISHMENT) is a protocol used to generate media traversal candidates that can be used in WebRTC applications, and it can be successfully sent and received through Network Address Translation (NAT)s using STUN and TURN.

STUN (Session Traversal Utilities for NAT) that complements ICE through NATs using UDP protocol. STUN allows applications to discover the presence and types of NATs and firewalls between them and on the public Internet. It can be used by any device to determine the IP address and port allocated to it by a NAT.

Typically A STUN client can send messages to the STUN server to get the Public IP and ports information then STUN server retrieve that information. Using this Public IP and Port information clients will make a peer to peer communication through the internet.

TURN (Traversal Using Relays around NAT) is a protocol that assists in the traversal of network address translators (NAT) or firewalls for webRTC applications. TURN Server allows clients to send and receive data through an intermediary server. The TURN protocol is the extension to STUN.

In a few cases, client communication endpoints are stuck behind different types of NATs, or when a symmetric NAT is in use, it may be easier to send media through a relay server and its called the TURN server.

Typically A TURN client first sends a message to a TURN server to allocate an IP address and port on the TURN server. Once the allocation has succeeded, the client will use the IP address and port number to communicate with peers. The TURN packet contains the destination address of the peer, then converts these packets as the UDP protocol packet and sends this to the peer.

TURN is most useful for Web, Mobile and IoT clients on networks masqueraded by symmetric NAT devices. But the TURN server cost is high because of the server utilization and huge bandwidth usage in the case where more client connections are established.


WebSockets -

The WebSocket specification defines an API establishing "socket" connections between a web browser/client and a server.
video communication through a web socket has higher latencies than WebRTC.


Features - 
Group Meeting
Recording
Video download option
Share screen
Audio and video mute and unmute

