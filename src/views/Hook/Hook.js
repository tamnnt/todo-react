import { createContext, useState } from "react";
import './Hook.scss'
import HookShowContent from "./HookShowContent";



const Hook = () => {


    const [name, setName] = useState('')
    const [users, setUser] = useState([{ id: 'user1', name: 'user1' }, { id: 'user2', name: 'user2' }, { id: 'user3', name: 'user3' }])


    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const btnOnclickAdd = () => {
        let userAdd = {
            id: Math.floor(Math.random() * 1000),
            name: name
        }
        setUser([...users, userAdd])
        setName('')
    }

    const funDeleteUser = (idUser) => {
        let usersCoppy = users
        usersCoppy = usersCoppy.filter(item => item.id !== idUser)
        setUser(usersCoppy)
    }

    return (

        <>

            <div className="hook-container">

                <div>List User Hook</div>

                <hr />

                <div>
                    <input type="text" value={name}
                        onChange={(event) => onChangeName(event)} />
                    &nbsp;
                    <button onClick={() => btnOnclickAdd()}>Add</button>
                </div>

                <hr />

                <HookShowContent
                    listUser={users}
                    funDeleteUser={funDeleteUser} />


            </div>

        </>


    )
}

export default Hook