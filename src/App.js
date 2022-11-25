import logo from './assets/logo.svg';
import './App.css';
import {Route} from "react-router";
import Navigation from "./routes/navigation/navigation";

function App() {
  return (
    <Route path='/' element={<Navigation/>} >
      <Route></Route>
    </Route>
  );
}

export default App;
