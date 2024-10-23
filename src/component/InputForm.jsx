import InputFiledCalling from "./InputFiledCalling";

export function InputForm({ text, type, placeholder, key }) {
  // Use the `key` prop to uniquely identify each instance of the component
  // and prevent unnecessary re-renders when updating only the input fields
  return (
    <div className="text-center item-center" key={key}>
      <form>
        <div className="border border-slate-800 p-5 rounded-lg hover:shadow-gray-500 hover:shadow-inner w-4/5 max-w-md">
          <div>
           <p>{text}</p>
           <input type={type} placeholder={placeholder} />
          </div>
        </div>
      </form>
    </div>
  );
}