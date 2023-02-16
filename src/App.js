import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {Outlet, Route, Routes,} from "react-router-dom";

function App() {

  const Layout=()=>{
    return(
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
  }

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
