import { useEffect, useState } from "react";
import { getMe } from "../api/users";  // <-- IMPORT CORRECTO

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await getMe();   // <-- USA TU MÉTODO REAL
        setProfile(res);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  if (!profile) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Mi Perfil</h1>
      <p><b>Nombre:</b> {profile.nombre}</p>
      <p><b>Correo:</b> {profile.correo}</p>
    </div>
  );
}
