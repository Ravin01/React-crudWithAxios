import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const View = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>
            <label htmlFor="">Name : </label>
            <h4>{data.name}</h4>
            <label htmlFor="">Age : </label>
            <h4>{data.age}</h4>
            <label htmlFor="">Email : </label>
            <h4>{data.email}</h4>
        </div>
    )
}

export default View