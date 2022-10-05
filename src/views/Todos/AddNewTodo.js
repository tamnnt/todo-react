import React from "react";



// React-Toastify
// npm install --save-exact react-toastify@8.0.2

class AddNewTodo extends React.Component {

    state = {
        title: ''
    }

    btnOnclickAdd = () => {

        if (!this.state.title) {
            alert("empty")
            return
        }

        let tmp = {
            id: Math.floor(Math.random() * 11),
            title: this.state.title
        }

        this.props.funAddNewTodo(tmp)

        this.setState({
            title: ''
        })


    }





    onChangeTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        return (
            <div className="list-toto-addtodo">
                <input type="text" value={this.state.title}
                    onChange={(event) => this.onChangeTodo(event)} />
                &nbsp;
                <button
                    className="btn-add"
                    onClick={() => this.btnOnclickAdd()}>Add</button>
            </div>
        )
    }

}

export default AddNewTodo

// react-router-dom => nav
//react-toastify => toast