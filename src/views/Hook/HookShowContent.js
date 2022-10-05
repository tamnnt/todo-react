import { createContext, memo, useContext, useState } from "react";
import { CountProvider } from "../App";



const HookShowContent = (props) => {

    const { count, setCount } = useContext(CountProvider)

    let { listUser } = props

    const onClickDelete = (id) => {
        props.funDeleteUser(id)
    }

    return (
        <div>

            {console.log("hockShowcontent")}

            {listUser && listUser.length > 0 &&

                listUser.map((item, index) => {
                    return (
                        <div key={item.id}>

                            <span>Id: {item.id} - Title: {item.name}</span> &nbsp;

                            <button onClick={() => onClickDelete(item.id)}>Delete</button>

                        </div>
                    )
                })

            }

            <button onClick={() => { setCount(count + 1) }}>click</button>

        </div>
    )
}


export default memo(HookShowContent)