import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
    const [params] = useSearchParams();
    const id = params.get('id')
    // console.log(id)
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setData({
            ...data, [name] : value
        })
    }
    const handleClick = (ele) => {
        ele.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, data)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        setData({
            "name": " ",
            "age": " ",
            "email": " "
        });
        navigate('/')
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h2>Update a user : </h2>
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
                <button type="submit" onClick={handleClick}>Update</button>
            </form>
        </div>
    )
}

export default Edit