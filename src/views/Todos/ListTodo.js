import React from "react";
import "./MyTodo.scss"
import AddNewTodo from "./AddNewTodo";
import { toast } from 'react-toastify';
import BackHome from "./BackHome";

class ListTodo extends React.Component {


    state = {
        listTodos: [
            { id: 'todo1', title: 'title1' },
            { id: 'todo2', title: 'title2' },
            { id: 'todo3', title: 'title3' }
        ],
        editTodo: {}

    }




    funAddNewTodo = (todo) => {

        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add success")

    }


    funDeleteTodo = (idTodo) => {
        this.setState({
            listTodos: this.state.listTodos.filter(item => item.id != idTodo)
        })
        toast.warning("Delete success")
    }

    onClickEdit = (todo) => {


        let { editTodo, listTodos } = this.state
        let isEmptyEdit = Object.keys(editTodo).length === 0

        if (isEmptyEdit === false && editTodo.id === todo.id) {

            let listTodosCoppy = [...listTodos]

            let indexEdit = listTodosCoppy.findIndex(item => item.id === todo.id)

            listTodosCoppy[indexEdit].title = editTodo.title

            this.setState({
                listTodos: listTodosCoppy,
                editTodo: {}
            })

            return
        }


        this.setState({
            editTodo: todo
        })

    }

    onChangeEdit = (event) => {
        let todoCopy = { ...this.state.editTodo }
        todoCopy.title = event.target.value
        this.setState({
            editTodo: todoCopy
        })
    }



    render() {


        let { editTodo, listTodos } = this.state
        let isEmptyEdit = Object.keys(editTodo).length === 0

        return (

            <div className="list-todo-container">

                <AddNewTodo
                    funAddNewTodo={this.funAddNewTodo}
                />

                <div className="list-todo-showtodo">

                    {listTodos && listTodos.length > 0 &&

                        listTodos.map((item, index) => {
                            return (
                                <div className="list-todo-item" key={item.id}>

                                    {isEmptyEdit === true ?

                                        <span>Title: {item.title}</span>
                                        :
                                        <>
                                            {
                                                editTodo.id === item.id ?
                                                    <input type='text' value={editTodo.title}
                                                        onChange={(event) => this.onChangeEdit(event)} />
                                                    :
                                                    <span>Title: {item.title}</span>
                                            }


                                        </>


                                    }

                                    &nbsp;
                                    <button className="btn-edit"
                                        onClick={() => this.onClickEdit(item)}>
                                        {!isEmptyEdit && item.id === editTodo.id ? "Save" : "Edit"}
                                    </button>
                                    &nbsp;
                                    <button className="btn-delete"
                                        onClick={() => this.funDeleteTodo(item.id)}>Delete</button>
                                </div>
                            )
                        })

                    }

                </div>

                <BackHome />


            </div>


        )
    }

}

export default ListTodo