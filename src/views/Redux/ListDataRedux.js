import React from 'react'
import './redux.scss'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

class ListDataRedux extends React.Component {


    state = {
        contactName: '',
        contactEdit: {}
    }

    onClickDeleteContact = (contact) => {
        this.props.actionDeleteContact(contact)
    }

    onChangAddContact = (event) => {
        this.setState({
            contactName: event.target.value
        })
    }

    onClickAddContact = () => {

        if (this.state.contactName.length === 0) return

        let add = {
            id: Math.floor(Math.random() * 1000),
            name: this.state.contactName
        }

        this.props.actionAddContact(add)

        this.setState({
            contactName: ""
        })

        toast.success("Add contact success")
    }

    onClickEditContact = (contact) => {

        let { contactEdit } = this.state
        let isEmptyEdit = Object.keys(contactEdit).length === 0

        this.setState({
            contactEdit: contact
        })

        if (isEmptyEdit === true) return



        this.props.actionEditContact(contactEdit)

        this.setState({
            contactEdit: ''
        })

    }

    onChangeEditContact = (event) => {

        let contactEditCoppy = { ...this.state.contactEdit }
        contactEditCoppy.name = event.target.value

        this.setState({
            contactEdit: contactEditCoppy
        })

    }

    onClickCancel = () => {
        this.setState({
            contactEdit: ''
        })
    }

    render() {

        console.log('>>>>>>render')

        let listContact = this.props.dataRedux
        let { contactEdit } = this.state
        let isEmptyEdit = Object.keys(contactEdit).length === 0

        return (

            <div className="listContact-Container">

                <h3 className="listContact-title">List Cotact From Redux</h3>

                <input type='text' value={this.state.contactName} onChange={(event) => this.onChangAddContact(event)} /> &nbsp;
                <button onClick={() => this.onClickAddContact()}>Add Contact</button>

                <div className="listContact-Content">

                    {
                        listContact && listContact.length > 0 &&
                        listContact.map((item, index) => {
                            return (
                                <div className="Contact-child" key={item.id}>


                                    {isEmptyEdit === false && item.id === contactEdit.id ?

                                        <input type='text' value={contactEdit.name} onChange={(event) => this.onChangeEditContact(event)} />
                                        :
                                        <span> {item.id} :  {item.name} </span>

                                    }
                                    &nbsp;
                                    <button onClick={() => { this.onClickEditContact(item) }}>
                                        {isEmptyEdit === false && item.id === contactEdit.id ? 'Save' : 'Edit'}
                                    </button>&nbsp;

                                    {
                                        isEmptyEdit === false && item.id === contactEdit.id ?
                                            <button onClick={() => { this.onClickCancel() }}>Cancel</button>
                                            :
                                            <button onClick={() => { this.onClickDeleteContact(item) }}>Delete</button>
                                    }
                                </div>
                            )
                        })
                    }

                </div>



            </div>
        )
    }

}

const mapStateToProps = (stateRedux) => {
    return {
        dataRedux: stateRedux.contacts
    }
}

/*
    để kết nối giữa ListDataRedux và redux, import connect
    tạo mapStateToProps để lấy data từ redux truyền vào props của ListDataRedux
    dùng connect để map 2 cái lại

    sau có thực hiện các action khác thì ','  rồi truyền tiến vào mapStateToProps
*/

const mapDispatchToProps = (dispatch) => {
    return {

        actionDeleteContact: (contactDelete) => dispatch({ type: 'DELETE_CONTACT', payload: contactDelete }),
        actionAddContact: (contactAdd) => dispatch({ type: 'ADD_CONTACT', payload: contactAdd }),
        actionEditContact: (contactEdit) => dispatch({ type: 'EDIT_CONTACT', payload: contactEdit })

    }
}

/*
mapDispatchToProps để tạo các action xử lí redux và truyền action đó vào props,
khi xử lí các sự kiện vd delete thì gọi this.props.actionDeleteContact(.......) và truyền contact cần thực hiện vào
payload không bắt buộc phải có
truyền vào trong connect
*/


export default connect(mapStateToProps, mapDispatchToProps)(ListDataRedux)