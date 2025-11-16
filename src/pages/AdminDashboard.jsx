import { useEffect, useState } from "react";
import { connectWebSocket } from "../api/websocket"; // <- correcto
import { getReports } from "../api/reports";          // <- correcto
import ReportList from "../components/ReportList";    // <- correcto

export default function AdminDashboard({ user }) {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    load();

    const socket = connectWebSocket({
      rol: user.rol,
      userId: user.userId,
      onMessage: (newReport) => {
        console.log("Reporte actualizado:", newReport);
        load();
      }
    });

    return () => socket.close();
  }, []);

  async function load() {
    const data = await getReports("PENDIENTE");
    setReports(data);
  }

  return (
    <div>
      <h1>Reportes Pendientes</h1>
      <ReportList reports={reports} />
    </div>
  );
}
