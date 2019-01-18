import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          homeLink: "Home"
        };
    }
    //I want to call this method from
    //a child component

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Max"}
                            initialAge={27}
                            greet={this.onGreet}//do not use "this, no need to bind
                            changeLink={this.onChangeLinkName.bind(this)} //allow this to be called by home component, bind 
                                                                          // to allow "this" to refer to object
                            initialLinkName={this.state.homeLink}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
