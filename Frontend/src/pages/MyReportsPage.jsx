import { useEffect, useState } from "react";
import { getMyReports } from "../api/reports"; // <- correcto
import { updateReport } from "../api/reports"; // <- correcto
import { useParams, useNavigate } from "react-router-dom";

export default function EditReportPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    descripcion: "",
    urgencia: "",
    tipo: ""
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const all = await getMyReports();
    const rep = all.find(r => r.reporte_id == id);

    if (!rep) return;

    setForm({
      descripcion: rep.descripcion,
      urgencia: rep.urgencia,
      tipo: rep.tipo
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateReport(id, form);
      alert("Reporte actualizado");
      navigate("/reports/me");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Editar Reporte #{id}</h2>

      <form onSubmit={handleSubmit}>
        <label>Tipo</label>
        <input
          value={form.tipo}
          onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          required
        />

        <label>Urgencia</label>
        <select
          value={form.urgencia}
          onChange={(e) => setForm({ ...form, urgencia: e.target.value })}
        >
          <option>BAJA</option>
          <option>MEDIA</option>
          <option>ALTA</option>
        </select>

        <label>Descripción</label>
        <textarea
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          required
        />

        <button>Guardar cambios</button>
      </form>
    </div>
  );
}
