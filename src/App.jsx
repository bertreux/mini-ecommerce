import { Outlet } from "react-router-dom";
import Menu from "./composants/Menu"

const App = () => {
  return ( <>
  <div className="page">
    <Menu/>
    <div className="container">
      <Outlet/>
    </div>
  </div>
  </> );
}
 
export default App;