import LoginLogo from "../../assets/loginLogo.png";

import { useForm } from "react-hook-form";
import { db } from "../../ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";

import { StyledLoginForm } from "../../styles/LoginForm.style";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/explore";

  async function handleLogin({ email, password }) {
    const usersRef = collection(db, "users");
    const usersData = await getDocs(usersRef);
    const user = usersData.docs.find(doc => doc._document.data.value.mapValue.fields.email.stringValue === email);

    if (!user) {
      alert("Usuario no existe");
      return;
    }

    const dbPassword = user._document.data.value.mapValue.fields.password.stringValue;

    if (dbPassword !== password) {
      alert("Contraseña incorrecta");
      return;
    }

    //set user in context
    const dbUsername = user._document.data.value.mapValue.fields.username.stringValue;
    auth.login(dbUsername);

    navigate(redirectPath, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <StyledLoginForm>
        <img src={LoginLogo} alt="Login Logo" />
        <div>
          <h3>Iniciar Sesión</h3>
          <p>Correo Electrónico</p>
          <input type="text" placeholder="john.doe@gmail.com" {...register("email", { required: true, maxLength: 20 })} />
          <p>Contraseña</p>
          <input type="password" {...register("password", { required: true, maxLength: 20 })} />
          <button className="mainBtn" type="submit">
            Iniciar Sesión
          </button>
        </div>
      </StyledLoginForm>
    </form>
  );
}
