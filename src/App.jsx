import { useState } from 'react'
import './App.css'
import OptionSelection from './components/OptionSelection'
import { arrayItems } from './AIOptions';

function App() {
  // console.log(import.meta.env.VITE_Open_AI_Key);
  console.log(arrayItems);

  const selectOption = (option) => {
    console.log(option);
  }

  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
    </div>
  )
}

export default App
