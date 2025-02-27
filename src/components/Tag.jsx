import { useGif } from '../hooks/useGif'
import Spinner from './Spinner'

export default function Tag() {
    const {tag , setTag, loading, fetchGif, gif} = useGif()
  return (
    <div className='h-full w-full flex flex-col items-center'>
          <div className='bg-zinc-600 min-h-1/2 w-1/2 flex flex-col gap-4 justify-between items-center p-3 text-orange-400'>
            <h1 className='text-3xl font-bold'><span className='capitalize'>{tag}</span> Meme</h1>
            {
                loading?(<Spinner />): (
                    <img src={gif} alt="serched gif" className='w-64 h-64 object-cover rounded-md'/>
                )
            }
            <div className='w-full flex flex-col gap-4 items-center'>
                <input 
                    type="text" 
                    className='text-center border-2 w-1/2 outline-none border-amber-500 text-white rounded-lg px-3 py-1' value={tag} 
                    onChange={(e) => setTag(e.target.value)} />
                <button
                    onClick={fetchGif}
                    className='bg-amber-500 text-white w-1/2 py-1 text-lg font-semibold rounded-lg cursor-pointer hover:bg-orange-400'>
                        Generate Meme
                </button>
            </div>
          </div>
        </div>
  )
}
