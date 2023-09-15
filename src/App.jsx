
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart,setCart]= useState([]);
  const[totalHr, setTotalHr] = useState(0)
  const [remaining, setRemaining] = useState(20)

  const handleAddToSelect = (title) =>{
    const isExist = cart.find(item =>item.id===title.id )
    let count =title.credit;
    if(isExist){
      return toast("You can't add more course!!")
    }
    else{
      cart.forEach(item => {
        count = count + item.credit
        
      });
      const totalremaining = 20-count;
      if(count >20){
        return toast("Sorry!! you have insufficient remaining.")
      }
      setTotalHr(count)
      setRemaining(totalremaining)
     
      setCart([...cart,title])
    }

    
  }

  return (
    <div className='max-w-full mx-auto my-8 px-4'>
      <h1 className='text-5xl text-center font-bold'>Course Registration</h1>
      <div className='flex gap-2'>
        <Courses handleAddToSelect={handleAddToSelect}></Courses>
        <Cart cart={cart} totalHr={totalHr} remaining={remaining} ></Cart>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
