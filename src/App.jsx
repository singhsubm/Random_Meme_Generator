import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {

  return (
    <div className='bg-zinc-900 w-screen h-screen p-10 overflow-x-hidden'>
    <div className='text-white'>
      <h1 className='text-5xl font-extrabold text-center'>Meme-Generator</h1>
    </div>
      <div className='flex justify-center mt-10 flex-col gap-10'>
      <Random />
      <Tag />
      </div>
    </div>
  )
}

export default App
