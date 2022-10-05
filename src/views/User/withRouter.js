import React from "react";


import { useParams } from 'react-router-dom';


// export function withRouter(Children) {
//     return (props) => {
//         const { UserId } = useParams()
//         return <Children {...props} id={UserId} />
//     }
// }

export const withRouter = (Children) => {
    return (props) => {
        /////////////
        let { UserId } = useParams()
        return (
            <Children {...Children} id={UserId} />
        )
        /////////////
    }
}
// export { withRouter }