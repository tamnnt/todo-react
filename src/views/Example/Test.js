import React from "react";

class Test extends React.Component {

    state = {
        student: { id: 'user1', name: 'name1' },
        username: 'username'
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onChangeStudent = (event) => {
        let tmp = { ...this.state.student };
        tmp.name = event.target.value
        this.setState({
            student: tmp
        })
    }

    render() {
        let { student, username } = this.state
        return (
            <div>
                <div> {username} </div>
                <input type="text" value={username} onChange={(event => this.onChangeUsername(event))} />

                <div> {student.id}, {student.name} </div>
                <input type="text" value={student.name} onChange={(event => this.onChangeStudent(event))} />
            </div>
        )
    }

}

export default Test