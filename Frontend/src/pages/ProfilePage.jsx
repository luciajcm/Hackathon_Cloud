import { useEffect, useState } from "react";
import { getMe } from "../api/users"; // <- correcto

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const u = await getMe();
      setUser(u);
    } catch (err) {
      console.error(err);
    }
  }

  if (!user) return <p>Cargando...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Mi Perfil</h1>
      <p><strong>Nombre:</strong> {user.nombre}</p>
      <p><strong>Correo:</strong> {user.correo}</p>
      <p><strong>Rol:</strong> {user.rol}</p>

      <a href="/profile/edit">Editar perfil</a>
    </div>
  );
}
