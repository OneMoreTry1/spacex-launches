import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LaunchPage from "./components/LaunchPage";
import Main from "./components/Main";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:launchId" element={<LaunchPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
