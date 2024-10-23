import { MdContacts } from "react-icons/md";

export function Header() {
  return (
    <div className="border border-white rounded-md p-3 m-5 flex items-center bg-zinc-900">
      <MdContacts className="text-3xl mr-4 text-slate-500" />
      <h3 className="font-semibold text-3xl text-slate-500 ">Contact :</h3>
    </div>
  );
}
