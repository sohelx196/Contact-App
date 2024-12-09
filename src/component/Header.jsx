import { MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";

export function Header() {


  
  return (
    <div className="border border-white rounded-md p-3 m-5 flex items-center bg-zinc-900">

    <div className="">
      {/* <MdContacts className="text-3xl mr-4 text-slate-500" /> */}
      <h6 className="font-normal text-3xl text-slate-400 mx-6"><span className="text-4xl text-orange-300">O</span>ne<span className="text-4xl text-orange-300">P</span>lace<span className="text-4xl text-orange-300">S</span>oftware</h6>
    </div>

    {/* <div className="justify-end"> 
      <h4 className="text-white "><Link to="signUp">Sign Up</Link></h4>
    </div> */}
       
    </div>
  );
}
