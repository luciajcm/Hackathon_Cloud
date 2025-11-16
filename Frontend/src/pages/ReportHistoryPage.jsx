import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReportHistory } from "../api/reports"; // <- correcto

export default function ReportHistoryPage() {
  const { id } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getReportHistory(id);
      setHistory(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Historial del Reporte #{id}</h1>

      {history.length === 0 && <p>No hay historial.</p>}

      {history.map((h, i) => (
        <div key={i} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <p><strong>Estado:</strong> {h.estado}</p>
          <p><strong>Fecha:</strong> {h.fecha}</p>
          <p><strong>Descripción:</strong> {h.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
