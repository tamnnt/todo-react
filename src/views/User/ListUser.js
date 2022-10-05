import React from "react";
import axios from 'axios'
import './ListUser.scss'
import { NavLink, Link } from "react-router-dom";

class ListUser extends React.Component {

    state = {
        page: 1,
        listUser: []
    }

    onClickBack = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
        }
    }

    onClickNext = () => {
        this.setState({
            page: this.state.page + 1
        })
    }


    async componentDidMount() {
        let resData = await axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
        this.setState({
            listUser: resData && resData.data && resData.data.data ? resData.data.data : [] //kiem tra du lieu co ton tai hoac tra ve []
        })
    }

    async componentDidUpdate() {
        let resData = await axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
        this.setState({
            listUser: resData && resData.data && resData.data.data ? resData.data.data : [] //kiem tra du lieu co ton tai hoac tra ve []
        })
    }

    render() {

        let { listUser, page } = this.state

        return (
            <div className="listUser-Container">

                <h3 className="listUser-title">List User</h3>

                <div>

                    <button onClick={() => this.onClickBack()}>Back</button>&nbsp;&nbsp;&nbsp;
                    <span>{page}</span>&nbsp;&nbsp;&nbsp;
                    <button onClick={() => this.onClickNext()}>Next</button>
                    <br /> <br />

                </div>

                <div className="listUser-Content">

                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="user-child" key={item.id}>
                                    <span> {item.id} : {item.first_name} {item.last_name} </span>

                                    <Link to={`/user/${item.id}`}> <button>View</button> </Link>

                                </div>
                            )
                        })
                    }




                </div>



            </div>
        )
    }

}

export default ListUser