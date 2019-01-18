import React from "react";

export class Home extends React.Component {
    
    
    
    constructor(props) {
        super();
        //cannot use props - properties only go one way
        this.age = props.age;
    }

    //get excecuted whenever the button below is clicked...
    onMakeOlder() {
        this.age += 3; // doesn't update the UI
    }

    render() {
        const age = this.age + 1;
        return (
            <div>
                <h3>Hello {this.props.name}!</h3>
                <p>You're almost {age}</p>
            {
                //add a button to excecute the method - user onClick to trigger
                //binding allows us to refer to the home class object when referring to "this"
                //in onMakeolder() - otherwise this would refer to the funtion when referring to "this"
            }
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-success">Greet me!</button>
            </div>
        );
    }
}
