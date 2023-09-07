import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "scenes/homePage/index_home_component";
import Loginpage from "scenes/loginPage/login_component";
import ProfilePage from "scenes/profilePage/index_profile_component";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token))

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/home" element={isAuth ? <Homepage /> : <Navigate to='/' />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
            <Route path="/" element={<Loginpage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
