import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { connectWebSocket } from "../websocket/ws";

export default function AdminReportsPage() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    const ws = connectWebSocket(
      user.role,
      user.id,
      (msg) => {
        console.log("Mensaje recibido:", msg);

        if (msg.type === "report_update") {
          alert("Nuevo cambio en reporte");
        }
      }
    );

    // ⬅ IMPORTANTE: Cerrar al salir del componente
    return () => {
      console.log("Cerrando WebSocket desde el frontend…");
      ws.close(); // ← Esto activa automáticamente tu $disconnect Lambda
    };
  }, [user]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel Administrador</h1>
      <p>WebSocket escuchando cambios...</p>
    </div>
  );
}
