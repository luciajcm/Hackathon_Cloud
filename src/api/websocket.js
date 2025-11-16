export function connectWebSocket({ rol, userId, onMessage }) {
  const WS_URL = import.meta.env.VITE_WS_URL;
  const url = `${WS_URL}?rol=${rol}&userId=${userId}`;

  const socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("Conectado al WebSocket");
  };

  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);

    if (msg.type === "report_update") {
      onMessage(msg.payload);
    }
  };

  socket.onclose = () => {
    console.log("WebSocket desconectado");
  };

  socket.onerror = (e) => {
    console.error("WS Error", e);
  };

  return socket;
}
