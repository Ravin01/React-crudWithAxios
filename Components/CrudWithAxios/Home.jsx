import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [data, setData] = useState([]);
    // const [api, setApi] = useState();
    // axios.interceptors.request.use((config) => {
    //     // confirm("do you want to fetch the api data")
    //     console.log(config)
    //     return config
    // }, (err) => {
    //     return Promise.reject(err)
    // })
    // console.log('render')
    useEffect(() => {
        // req()
        axios.get("http://localhost:3000/users").then(res => setData(res.data)).catch(err => console.log(err))
    }, []);
    const deleteUser = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`);
    }
    return (
        <div>
            <h2>List of Data</h2>
            <div>
                <table style={{
                    width: "75vw"
                }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.age}</td>
                                <td>{d.email}</td>
                                <td>
                                    <button style={{ backgroundColor: "blue" }} >
                                        <Link to={`/edit?id=${d.id}`}>Edit</Link>
                                    </button>
                                    <button style={{ backgroundColor: "green" }}>
                                        <Link to={`/view/${d.id}`}>View</Link>
                                    </button>
                                    <button style={{ backgroundColor: "red" }} onClick={() => deleteUser(d.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home