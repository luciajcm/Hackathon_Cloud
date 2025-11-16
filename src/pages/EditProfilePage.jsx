import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMe, updateMe } from "../api/users"; // <- correcto

export default function EditProfilePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    numero_telefonico: ""
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const u = await getMe();
    setForm({
      nombre: u.nombre,
      numero_telefonico: u.numero_telefonico
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateMe(form);
      alert("Perfil actualizado");
      navigate("/profile");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Editar Perfil</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />

        <label>Número telefónico</label>
        <input
          value={form.numero_telefonico}
          onChange={(e) => setForm({ ...form, numero_telefonico: e.target.value })}
        />

        <button>Guardar</button>
      </form>
    </div>
  );
}
