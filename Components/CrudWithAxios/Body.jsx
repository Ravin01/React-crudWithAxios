import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Create from "./Create"
import Edit from "./Edit"
import View from "./View"

const Body = () => {
    return (
        <div style={{
            backgroundColor: "black",
            height: "80vh",
            width: "85vw",
            display : "flex",
            justifyContent : "center",
            alignItems : "center"
        }}>
            <Routes>
                <Route path="/" element={<Home /> }/>
                <Route path="/create" element={<Create /> }/>
                <Route path="/edit" element={<Edit /> }/>
                {/* <Route path="/view" element={<View /> }/> */}
                <Route path="/view/:id" element={<View /> }/>
            </Routes>
        </div>
    )
}

export default Body