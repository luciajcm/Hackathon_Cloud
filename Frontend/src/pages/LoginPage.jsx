import "../styles/LoginPage.css";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Sistema de Reportes</h1>
        <p className="login-subtitle">Inicia sesión para continuar</p>

        <LoginForm />

        <div className="login-footer">
          <p className="login-contact">
            ¿Olvidaste tu contraseña? Comunícate con <strong>soporte</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
