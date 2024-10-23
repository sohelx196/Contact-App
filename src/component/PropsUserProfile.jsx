import { InputForm } from "./InputForm";


export function PropsUserProfile(props) {
    let profile = props.profile;
    let username = props.username;
    let contact = props.contact;
   
    
    // let type = props.type;
    // let placeholder = props.placeholder;
    return(
        <>
         
         <div className="text-white border rounded-md will-change-contents p-4 h-max m-5 hover:shadow-slate-300  hover:shadow-inner">
            <div className='items-center'>
              <img src={profile} alt="User Image" className='rounded-lg h-w-9 w-9'/>    
            </div>


            <div className="mt-3">
                <h6>Username : {username} </h6>
            </div>
            <div>
                <h6>Contact : {contact} </h6>
            </div>
        
         </div> 
    
    </>
    )
}