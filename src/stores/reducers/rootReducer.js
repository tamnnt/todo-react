
let initState = {
    contacts: [
        { id: 1, name: "contact 1" },
        { id: 2, name: "contact 2" },
        { id: 3, name: "contact 3" }
    ],
    abc: [1, 2, 3, 4]
}


const DeleteContact = (stateRedux, contact) => {
    let contacts = stateRedux.contacts
    contacts = contacts.filter(item => item.id !== contact.id)
    return { ...stateRedux, contacts }
}

const AddContact = (stateRedux, contact) => {
    let contacts = [...stateRedux.contacts, contact]
    return { ...stateRedux, contacts }
}

const EditContact = (stateRedux, contact) => {
    let contacts = [...stateRedux.contacts]
    let index = contacts.findIndex(item => item.id === contact.id)
    contacts[index].name = contact.name

    return { ...stateRedux, contacts }
}


/////////////////

const rootReducer = (stateRedux = initState, action) => {

    //xử lí các action

    switch (action.type) {

        case 'DELETE_CONTACT':
            console.log('rootRedux >>> DELETE_CONTACT', action.payload)
            stateRedux = DeleteContact(stateRedux, action.payload)
            break

        case 'ADD_CONTACT':
            console.log('rootRedux >>> ADD_CONTACT', action.payload)
            stateRedux = AddContact(stateRedux, action.payload)
            break
        case 'EDIT_CONTACT':

            console.log('rootRedux >>> EDIT_CONTACT', action.payload)
            stateRedux = EditContact(stateRedux, action.payload)

            break

    }

    //


    return stateRedux

}

export default rootReducer

