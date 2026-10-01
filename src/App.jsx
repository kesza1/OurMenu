import './App.css'
import { MenuList } from './components/MenuList'
import {Button, ButtonGroup} from "@heroui/react";
function App() {
  return (
< div className='bg-gray-800 text-white' >
  <header>
    <h1 className='text-center text-3xl font-bold text-amber-400'>Our menu</h1>

  </header>
  <main className='max-w-300 shadow-2xl p-4 mx-auto'>
    <MenuList></MenuList>
  </main>
</div > 
  )

}


export default App
