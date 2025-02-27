import Spinner from './Spinner';
import {useGif} from '../hooks/useGif'

export default function Random() {
    const {loading, gif, fetchGif} = useGif();
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <div className='bg-zinc-600 min-h-1/2 w-1/2 flex flex-col gap-4 justify-between items-center p-3 text-orange-400'>
        <h1 className='text-3xl font-bold'>Random Meme</h1>
        {
            loading?(<Spinner />): (
                <img src={gif} alt="gif" className='w-64 h-64 object-cover rounded-md'/>
            )
        }
        <button
        onClick={fetchGif}
         className='bg-amber-500 text-white w-1/2 py-1 text-lg font-semibold rounded-lg cursor-pointer hover:bg-orange-400'>
            Generate Meme
        </button>
      </div>
    </div>
  )
}
