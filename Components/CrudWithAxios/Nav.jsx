import { Link } from "react-router-dom"

const Nav = ()=>{
    return(
        <div style={{
            height : "50px",
            width : "85vw",
            display : "flex",
            justifyContent : "space-evenly",
            alignItems : "center",
            background : "black"
        }}>
            <Link to={'/'}>Home</Link>
            <Link to={'/create'}>Create</Link>
            {/* <Link to={'/edit'}>Edit</Link> */}
            {/* <Link to={'/view'}>View</Link> */}

        </div>
    )
}

export default Nav