import { TargetedEvent, useContext, useRef } from "preact/compat";
import { AuthContext } from "../providers/AuthProvider";

const AuthPage = () => {
  const { login } = useContext(AuthContext);
  const ref = useRef<HTMLFormElement>();
  const onSubmit = async (e: TargetedEvent) => {
    e.preventDefault();
    login(ref.current?.username, ref.current?.password, ref.current?.rememberMe.checked);
    
  };

  history.replaceState(null, null, "/");

  return (
    <section class="auth">
      <form name="auth" onSubmit={onSubmit} ref={ref}>
        <div className="title">Contact List</div>
        <input type="text" placeholder="Username" name="username" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <div>
          <input type="checkbox" name="rememberMe" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="actions">
          <button type="reset">Reset</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default AuthPage;
