import React from "react";

class ChildComponent extends React.Component {

    state = {
        check: false
    }


    onclickShow = () => {

        this.setState({
            check: !this.state.check
        })
    }
    onclickHide = () => {

        this.setState({
            check: !this.state.check
        })
    }


    onClickDeletePerson = (per) => {
        console.log("person delete", per.name, per.address)
        this.props.removePerson(per)
    }

    render() {

        let { person, lname, fname } = this.props

        return (
            <>
                <h4>fname: {fname}, lname: {lname}</h4>

                <div><button onClick={() => this.onclickShow()}>show</button></div>

                {
                    this.state.check
                    &&
                    <div>
                        {
                            person.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        name: {item.name}, address: {item.address}
                                        <button onClick={() => this.onClickDeletePerson(item)}> Delete</button>
                                    </div>
                                )
                            })
                        }

                        <button onClick={() => this.onclickHide()}>Hide</button>
                    </div>

                }


            </>

        )
    }


}



// const ChildComponent = (props) => {
//     let { person } = props
//     return (
//         <>
//             {
//                 person.map((item, index) => {
//                     return (
//                         <div key={item.id}> name ss: {item.name}, address: {item.address} </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

export default ChildComponent
