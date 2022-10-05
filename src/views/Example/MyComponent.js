import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {


    state = {
        person: [
            { id: 'person1', name: 'name1', address: 'address1' },
            { id: 'person2', name: 'name2', address: 'address2' }
        ]
    }



    getPersonFromAdd = (getperson) => {

        console.log("abc student", getperson)
        this.setState({
            person: [...this.state.person, getperson]
        })
    }

    removePerson = (per) => {
        let tmp = this.state.person
        tmp = tmp.filter(item => item.id !== per.id)
        this.setState({
            person: tmp
        })
    }
    componentDidUpdate(pProps, pState) {
        console.log('>> componentDidUpdate', "pre ", pState, "current ", this.state)
    }

    componentDidMount() {
        console.log('>> componentDidMount')
    }

    render() {
        return (

            <>
                {console.log('>> render')}
                <AddComponent
                    getPersonFromAdd={this.getPersonFromAdd} />

                <ChildComponent
                    fname={this.state.firstName}
                    lname={this.state.lastName}
                    person={this.state.person}
                    removePerson={this.removePerson} />



            </>

        )
    }

}

export default MyComponent


