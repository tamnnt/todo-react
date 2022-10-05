import React from "react";
import { useNavigate } from 'react-router-dom'

//useNavigate sẽ thay chuyển đến đường dẫn truyền vào và chạy đến navigation 

function BackHome() {
    let navigate = useNavigate()
    return (

        <button onClick={() => { navigate('/') }}>Back Home</button>

    )

}

export default BackHome