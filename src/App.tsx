import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [quote, setQuote] = useState<string>()
  const [author, setAuthor] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  
  // useEffect(() => {
  //   generateQuote()
  // }, [])

  const generateQuote = () => {
    if (firstLoad || !isLoading) {
      if (firstLoad) {
        setFirstLoad(false)
      }

      setIsLoading(true)
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          setQuote(data.content)
          setAuthor(data.author)
          setIsLoading(false)
        }
      )
    }
  }


  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="text-white flex flex-col justify-center items-center w-4/5 md:w-boxWidth min-h-[30rem] bg-blue-900 p-5 rounded-lg">
        <h1 className="md:text-5xl text-3xl pb-gapinbox text-center">Random Quote Generator</h1>
        <p className="md:text-3xl text-xl pb-gapinbox">Luckbase System</p>
        <div className="min-h-[15rem] text-center flex flex-col justify-center">
          {
            firstLoad ? (
              <p className="md:text-2xl text-lg pb-gapinbox">Press button to Generate</p>
            ) :
            isLoading ? (
              <p className="md:text-2xl text-lg pb-gapinbox">Generating...</p>
          ) : (
            <>
              <p className="md:text-2xl text-lg whitespace-pre-line pb-gapinbox">"{quote}"</p>
              <p className="text-lg pb-gapinbox">{author}</p>
            </>
          )}
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={generateQuote}>Generate</button>
      </div>
    </div>
  )
}

export default App
