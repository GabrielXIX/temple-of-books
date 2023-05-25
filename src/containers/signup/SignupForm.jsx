import LoginLogo from "../../assets/loginLogo.png";

import { useForm } from "react-hook-form";
import { db } from "../../ConfigFirebase";
import { collection, addDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";

import { StyledSignupForm } from "../../styles/SignupForm.style";
import { useAuth } from "../../contexts/AuthContext";

export default function SignupForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/explore";

  async function createUser({ name, username, email, password }) {
    try {
      const usersRef = collection(db, "users");
      await addDoc(usersRef, {
        name: name,
        username: username,
        email: email,
        password: password,
        bookshelf: [],
        recently_viewed: [],
      });

      auth.login(username);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <StyledSignupForm>
        <div>
          <img src={LoginLogo} alt="Login Logo" />
        </div>
        <div>
          <h3>Registrarse</h3>
          <div>
            <input type="text" placeholder="Nombre" {...register("name", { required: true, maxLength: 50 })} />
            <input type="text" placeholder="Correo Electrónico" {...register("username", { required: true, maxLength: 50 })} />
          </div>
          <div>
            <input type="text" placeholder="Nombre de Usuario" {...register("email", { required: true, maxLength: 50 })} />
            <input type="password" placeholder="Contraseña" {...register("password", { required: true, maxLength: 50 })} />
          </div>
          <button className="mainBtn" type="submit">
            Registrarse
          </button>
        </div>
      </StyledSignupForm>
    </form>
  );
}
