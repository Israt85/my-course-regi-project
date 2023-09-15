
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
  const [cart,setCart]= useState([]);
  const handleAddToSelect = (title) =>{
    setCart([...cart,title])
  }

  return (
    <div className='max-w-7xl mx-auto my-8 px-4'>
      <h1 className='text-5xl text-center font-bold'>Course Registration</h1>
      <div className='flex gap-2'>
        <Courses handleAddToSelect={handleAddToSelect}></Courses>
        <Cart cart={cart}></Cart>
      </div>

    </div>
  )
}

export default App
