import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePageComponent from "./pages/home.page.component";
import NotFoundPageComponent from "./pages/not.found.page.component";

function App() {
  return (
    <div className="AppRoot">
      <HashRouter>
        <Routes>
          <Route exact path="/" component={HomePageComponent}/>
          <Route path='*' exact={true} component={NotFoundPageComponent}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
