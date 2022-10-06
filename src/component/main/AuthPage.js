import React, { useCallback, useEffect, useState } from "react";

const dataUser = [
  {
    userName: "admin",
    name: "Administrator",
    password: "admin123",
  },
  {
    userName: "yos",
    name: "Yos Sularko",
    password: "21232123",
  },
];

const AuthPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [dataLogin, setDataLogin] = useState({
    userName: "",
    name: "",
    password: "",
  });

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();

      if (!userName || !password) {
        alert("Form tidak boleh kosong!");
        return;
      }

      const idx = dataUser.findIndex((item) => item.userName === userName);

      if (idx === -1) {
        alert("User belum terdaftar!");
        return;
      }

      const findUser = dataUser[idx];

      if (findUser.password !== password) {
        alert("Password salah!");
        return;
      }

      setDataLogin(findUser);

      const dataStorage = JSON.stringify(findUser);
      window.localStorage.setItem("dataLogin", dataStorage);
      console.log("berhasil login: ", findUser);
    },
    [userName, password]
  );

  const handleLogout = useCallback(() => {
    setDataLogin({
      userName: "",
      name: "",
      password: "",
    });

    window.localStorage.removeItem("dataLogin");
  }, []);

  useEffect(() => {
    const getDataLogin = () => {
      const dataStorage = window.localStorage.getItem("dataLogin");
      const dataParse =
        dataStorage !== null ? JSON.parse(dataStorage) : dataLogin;

      setDataLogin(dataParse);
    };

    if (!dataLogin.userName) {
      getDataLogin();
    }
  }, [dataLogin]);
  return (
    <div>
      <h3>9. Auth Page</h3>
      {dataLogin.userName ? (
        <div>
          <h3>Selamat Datang {dataLogin.name}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <p>login default = username: admin, password: admin123</p>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                placeholder="masukan username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                placeholder="masukan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <input type="submit" value="Login" />
          </form>
        </>
      )}
    </div>
  );
};

export default AuthPage;
