
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
  const [cart,setCart]= useState([]);
  const[totalHr, setTotalHr] = useState(0)
  const [remaining, setRemaining] = useState(0)

  const handleAddToSelect = (title) =>{
    const isExist = cart.find(item =>item.id===title.id )
    let count =title.credit;
    if(isExist){
      return alert("you can't add more")
    }
    else{
      cart.forEach(item => {
        count = count + item.credit
        
      });
      const totalremaining = 20-count;
      setTotalHr(count)
      setRemaining(totalremaining)
     
      setCart([...cart,title])
    }
    
  }

  return (
    <div className='max-w-7xl mx-auto my-8 px-4'>
      <h1 className='text-5xl text-center font-bold'>Course Registration</h1>
      <div className='flex gap-2'>
        <Courses handleAddToSelect={handleAddToSelect}></Courses>
        <Cart cart={cart} totalHr={totalHr} remaining={remaining} ></Cart>
      </div>

    </div>
  )
}

export default App
