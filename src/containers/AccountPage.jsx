import Nav from "../components/Nav.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

import { useNavigate } from "react-router-dom";
import { db } from "../ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";

import { StyledPageStructure } from "../styles/PageStructure.style.jsx";
import { StyledUserInfo } from "../styles/UserInfo.jsx";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersRef = collection(db, "users");
        const usersData = await getDocs(usersRef);
        const currentUser = usersData.docs.find(doc => doc._document.data.value.mapValue.fields.username.stringValue === auth.user);

        setUserInfo({
          name: currentUser._document.data.value.mapValue.fields.name.stringValue,
          email: currentUser._document.data.value.mapValue.fields.email.stringValue,
          username: currentUser._document.data.value.mapValue.fields.username.stringValue,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUserData();
  });

  function handleLogout() {
    auth.logout();
    navigate("/");
  }
  return (
    <StyledPageStructure>
      <Nav />
      <StyledUserInfo>
        <h1>Perfil</h1>
        <p>
          <strong>Nombre:</strong> {userInfo.name}
        </p>
        <p>
          <strong>Correo electronico:</strong> {userInfo.email}
        </p>
        <p>
          <strong>Nombre de Usuario:</strong> {userInfo.username}
        </p>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </StyledUserInfo>
    </StyledPageStructure>
  );
}
