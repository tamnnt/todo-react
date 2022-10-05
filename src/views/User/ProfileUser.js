import React from "react";
import axios from "axios";

import { useParams } from 'react-router-dom';
import { withRouter } from './withRouter.js'


class ProfileUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {

        let { id } = this.props

        let res = await axios.get(`https://reqres.in/api/users/${id}`)

        this.setState({
            user: res.data.data
        })



    }

    render() {

        let { user } = this.state

        return (

            <>


                <h5>{user.id}</h5>
                <h5>{user.first_name} {user.last_name}</h5>
                <h5>{user.email}</h5>
                <img src={user.avatar} />

            </>

        )
    }

}

// export default ProfileUser
export default withRouter(ProfileUser)



