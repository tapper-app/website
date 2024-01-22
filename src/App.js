import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePageComponent from "./pages/home.page.component";
import NotFoundPageComponent from "./pages/not.found.page.component";
import DownloadsPageComponent from "./pages/downloads.page.component";

function App() {
  return (
    <div className="AppRoot">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePageComponent />}/>
          <Route exact path="/downloads" element={<DownloadsPageComponent />}/>
          <Route path='*' exact={true} element={<NotFoundPageComponent />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
