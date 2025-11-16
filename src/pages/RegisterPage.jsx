import { useState } from "react";
import { register } from "../api/auth";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    password: "",
    numero_telefonico: ""
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      await register(form);
      setMsg("Registro exitoso. Ahora puedes iniciar sesión.");
    } catch (err) {
      setMsg(err.message || "Error en el registro.");
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: "auto" }}>
      <h2>Crear Cuenta</h2>

      <form onSubmit={handleSubmit}>
        
        <label>Nombre completo</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label>Correo institucional</label>
        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          placeholder="nombre.apellido@utec.edu.pe"
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Número telefónico</label>
        <input
          type="text"
          name="numero_telefonico"
          value={form.numero_telefonico}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrarme"}
        </button>
      </form>

      {msg && <p style={{ marginTop: 15 }}>{msg}</p>}
    </div>
  );
}
