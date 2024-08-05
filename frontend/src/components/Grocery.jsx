import { useState } from "react"
import { useEffect } from "react"

const Grocery = () => {
    const[data,setData]=useState([])
    const[inputValue,setinputValue]=useState("")
    const[bodyInput,setBodyInput]=useState("")


    const fetchData =async ()=>{
        try{
            const response = await fetch(`http://localhost:4000/api/v1/updates`)
            const data = await response.json()
            if(data){
                setData(data.data)
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[data])

    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(!inputValue || !bodyInput){
            return 
        }

        const data={
            name:inputValue,
            body:bodyInput
        }
        try{
             const response = await fetch(`http://localhost:4000/api/v1/updates`,
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                }
             )
             const answer = await response.json()

        }catch(err){
            console.log(err)
        }

        setBodyInput("")
        setinputValue("")
    }

    const handleDelete= async(getId)=>{
        try{
            const response = await fetch(`http://localhost:4000/api/v1/updates/${getId}`,{
                method:"DELETE"
            })
            const data = await response.json()
            if(data){
                console.log("deleetd")
            }
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='border border-red-500 border-solid p-2' >
        <form onSubmit={handleSubmit}>
            <label className='font-serif'>Enter : </label>
            <input required maxLength={20} value={inputValue} onChange={(e)=> setinputValue(e.target.value)} type='text' className='outline-none border border-red-500 px-1' />
            <div className="flex my-2">
            <label>Enter Body: </label>
            <textarea minLength={30} value={bodyInput} onChange={(e)=> setBodyInput(e.target.value)} required className="block border border-red-500 outline-none" />
            </div>
            <button className='border border-red-500 px-2 transition-all bg-red-300 hover:scale-x-110'>submit</button>
        </form>
        <div className="p-2 border border-red-500 my-2">
        {data?.map((item,index)=>{
            return <div key={item._id} className="border-red-500 border m-1">
                <p className="mb-2 hover:bg-red-300 flex justify-between p-1 transition-all duration-500 rounded-md"><span className="font-bold">{item.name}</span>  
                <span> <span onClick={()=>handleDelete(item._id)} className="cursor-pointer border border-red-500 px-1 bg-red-300">del</span>  <span className="cursor-pointer border border-red-500 px-1 bg-red-300">upd</span> </span></p>
                <hr className="bg-indigo-500 border-2" />
                    <p className="m-2 text-sm text-slate-500">{ item.body}</p>
                </div>
        })}
        </div>
    </div>
  )
}

export default Grocery