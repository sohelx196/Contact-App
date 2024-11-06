

export function PropsUserProfile({profile,username,contact}) {
    
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