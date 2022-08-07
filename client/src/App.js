import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import Header from "Components/Header";
import Main from "Pages/Main";
import Featured from "Pages/Trending";
import Signup from "Components/Signup";
import Login from "Components/Login";
import CardDetails from "Components/MovieDetails";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <>
      <GlobalStyles />
      <Header />
      <AppContainer>
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <Main /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/login"
            exact
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            exact
            element={user ? <Navigate replace to="/" /> : <Signup />}
          />
          <Route path="/trending" exact element={<Featured />} />
          <Route path="/movies/:id" exact element={<CardDetails />} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  background-color: #181b21;
  min-height: 100vh;
  font-family: sans-serif;
`;

export default App;
