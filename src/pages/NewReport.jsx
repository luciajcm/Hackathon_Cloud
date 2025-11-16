import { useState } from "react";
import { createReport } from "../api/reports"; // <- correcto

export default function NewReport() {
  const [form, setForm] = useState({
    tipo: "",
    urgencia: "MEDIA",
    descripcion: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createReport(form);
      alert("Reporte creado!");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tipo"
        onChange={(e) => setForm({ ...form, tipo: e.target.value })}
      />
      <textarea
        placeholder="Descripción"
        onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
      />
      <button>Enviar</button>
    </form>
  );
}
