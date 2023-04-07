import './App.css'
import { Configuration, OpenAIApi } from 'openai';
import OptionSelection from './components/OptionSelection'
import Translation from './components/Translation';
import { useState } from 'react'
import { arrayItems } from './AIOptions';

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  // console.log(import.meta.env.VITE_Open_AI_Key);
  // console.log(arrayItems);

  const selectOption = (option) => {
    setOption(option);
  }
  const doStuff = async () => {
    // setOption({ ...option, prompt: input });
    let object = {...option, prompt: input}
    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
    console.log(response);
  }
  // console.log(option);
  // console.log(input);
  // console.log(Object.values(option).length);

  return (
    <div className="App">
      
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result}/>
      )}
    </div>
  )
}

export default App
