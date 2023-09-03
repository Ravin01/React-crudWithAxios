import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate()
    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setData({
            ...data, [name] : value
        })
    }
    const handleClick = (ele) => {
        ele.preventDefault();
        axios.post("http://localhost:3000/users", data)
        .then((res) => {
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        setData({
            "name": " ",
            "age": " ",
            "email": " "
        });
        navigate('/')
    }
    return (
        <div>
            <h2>Add user</h2>
            <form action="">
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" value={data.name} onChange={handleChange} required />
                <br />
                <br />
                <label htmlFor="age">Age : </label>
                <input type="text" name="age" value={data.age} onChange={handleChange} required />
                <br />
                <br />
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" value={data.email} onChange={handleChange} required />
                <br />
                <br />
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Create