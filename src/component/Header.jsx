import { MdContacts } from "react-icons/md";

export function Header() {
  return (
    <div className="border border-white rounded-md p-3 m-5 flex items-center bg-zinc-900">
      {/* <MdContacts className="text-3xl mr-4 text-slate-500" /> */}
      <h6 className="font-normal text-3xl text-slate-400 mx-6"><span className="text-4xl text-orange-300">O</span>ne<span className="text-4xl text-orange-300">P</span>lace<span className="text-4xl text-orange-300">S</span>oftware</h6>
    </div>
  );
}
