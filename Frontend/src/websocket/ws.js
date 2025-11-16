export function connectWebSocket(role, userId, onMessage) {
  const WS_URL = "wss://TU-ENDPOINT.execute-api.us-east-1.amazonaws.com/dev";

  const ws = new WebSocket(`${WS_URL}?rol=${role}&userId=${userId}`);

  ws.onopen = () => console.log("WebSocket conectado");

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage(data);
    } catch (e) {
      console.error("❌ Error procesando mensaje WS:", e);
    }
  };

  ws.onerror = (err) => console.error("WS Error:", err);

  ws.onclose = () => console.log("WS cerrado / $disconnect ejecutado");

  return ws;
}
