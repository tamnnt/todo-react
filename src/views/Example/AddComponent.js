import React from "react";

class AddComponent extends React.Component {

    state = {
        name: "",
        address: "",
    }

    onChangeFirstName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onChangeLastName = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    onclicksubmit = (event) => {
        event.preventDefault()

        this.props.getPersonFromAdd({
            id: "person9",
            name: this.state.name,
            address: this.state.address
        })

        this.setState({
            name: "",
            address: ""
        })

    }

    render() {
        return (
            <form>

                <label htmlFor="fname">name : {this.state.name}</label> <br />
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.onChangeFirstName(event)} /><br />

                <label htmlFor="lname">address : {this.state.address}</label> <br />
                <input
                    type="text"
                    value={this.state.address}
                    onChange={(event) => this.onChangeLastName(event)} /><br />

                <input
                    type="submit"
                    onClick={(event) => this.onclicksubmit(event)} />

            </form>
        )
    }

}

export default AddComponent