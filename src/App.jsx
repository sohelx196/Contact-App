import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./component/Header";
import { SideBar } from "./component/SideBar";
import Footer from "./features/footer/Footer";
import { Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <div className="flex">
        <SideBar />
        <div className="w-full h-screen p-8">
          <Outlet />
        </div>
      </div>    
      <Footer />
      
    </>
  );
}

export default App;
