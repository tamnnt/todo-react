import React from "react";
import "./Nav.scss"
import { Link, NavLink } from "react-router-dom";

//NavLink, Link khi chạy sẽ tạo ra thẻ <a> nhưng không làm load lại trang, NavLink sẽ nhận được trạng thái

class Nav extends React.Component {

    render() {
        return ( <
            div className = "topnav" >

            <
            NavLink activeclassname = "active"
            to = '/'
            exact = { "true" } > Home < /NavLink> <
            NavLink activeclassname = "active"
            to = '/todo' > Todo < /NavLink>

            <
            /div>
        )
    }

}

export default Nav