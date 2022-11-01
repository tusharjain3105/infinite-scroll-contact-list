import { useContext } from "preact/hooks";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  return (
    <button className="logout" onClick={logout}>
      <MdLogout size={20} />
      <span>Logout</span>
    </button>
  );
};

export default Logout;
