import './App.css'
import Box from './Components/Box'
import Index from './Components/Index'

function App() {

  return (
    <>
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[650px] min-h-[450px] shadow-2xl bg-white">
        <Index/>
        <Box/>
      </div>
    </div>
    </>
  )
}

export default App
