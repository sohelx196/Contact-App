import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./component/Header";
import { SideBar } from "./component/SideBar";
import Footer from "./features/footer/Footer";

import Login from "./features/login/Login";
import { UserDetail } from "./component/UserDetail";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <>
      <Header />

      <div className="flex">
        <SideBar />
        <div className="w-full h-screen p-8">
             
        </div>
      </div>    
      <Footer />
    </>
  );
}

export default App;
