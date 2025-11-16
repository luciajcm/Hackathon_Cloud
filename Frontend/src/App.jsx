import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const { token, role } = useAuth();

  console.log("Token:", token, "Role:", role);

  if (!token) return <LoginPage />;

  return <div>Dashboard</div>;
}
