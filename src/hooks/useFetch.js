import { useEffect, useState } from "react"


export const useFetch = (url) => {
  
    const [data, setDatos] = useState([])


    const fetchData = async (url) =>{
        try{
            const response = await fetch(url, {
                method: 'GET'
            })
            const data = await response.json()
            setDatos(data)
            

        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
      if(!url) return
        fetchData(url)
    }, [])
    

    return {
        data
    }

}
