import { useContext } from "preact/compat";
import { AuthContext } from "../providers/AuthProvider";
import AuthPage from "./AuthPage";
import { MdLogout } from "react-icons/md";
import ItemList from "./ItemList";
import Navbar from "./Navbar";

const HomePage = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (!isAuthenticated) return <AuthPage />;

  history.replaceState(null, null, "/home");

  return (
    <>
      <Navbar />
      <ItemList />
    </>
  );
};

export default HomePage;
