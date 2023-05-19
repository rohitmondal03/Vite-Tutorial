import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(() => {

    // THIS STATEMENT -> `import.meta.env` will work for all env variables and modes. An env file for a specific mode (e.g. .env.production) will take higher priority than a generic one (e.g. .env).

    console.log(import.meta.env);
    console.log(import.meta.env.MODE);

    // (import.meta.env.DEV)
    //   ? console.log("server is DEV")
    //   : console.log("Server is not DEV");

  });

  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black text-white'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='bg-black text-white'>Vite + React</h1>
      <div className="card">
        <button className='p-5' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
