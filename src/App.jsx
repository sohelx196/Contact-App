
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './component/Header'
import { SideBar } from './component/SideBar'

import InputFiledCalling from './component/InputFiledCalling'



function App() {
 
  return (
    <>

      <Header/>
      <div className='m-4'>
      <SideBar/>        
     <InputFiledCalling/>                         
                                   
      </div>
  
    </>
  )
}

export default App
