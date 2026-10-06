import { useState } from 'react'
import './App.css'
import { MenuList } from './components/MenuList'
import { MyHeader } from './components/myHeader'
function App() {
  const [selectedCateg, setSelectedCateg] = useState('all')
  return (
< div className='bg-gray-800 text-white' >
<MyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
  <main className='max-w-300 shadow-2xl p-4 mx-auto'>
    <MenuList selectedCateg={selectedCateg}/>
  </main>
</div > 
  )

}


export default App
