import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function useGif() {
    const url = `https://api.giphy.com/v1/gifs/random`
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState(null);
    const [tag, setTag] = useState('car')
    const fetchGif = async () => {
        setLoading(true)
        const {data} = await axios.get(`${url}?api_key=${apiKey}&tag=${tag}`)
        setGif(data.data.images.fixed_height.url)
        setLoading(false)
    }
    useEffect(() => {
        fetchGif();
    },[tag]);
    
    return {
        loading,
        gif,
        setGif,
        fetchGif,
        setTag,
        tag,
    }
}
