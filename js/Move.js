import React, { Component } from "react";

class Move extends Component {
    state = {
        xoffset: 0,
        yoffset: 0,
        delta: 10,
    };

    walk = () => {
        this.setState(
            {
                xoffset: this.state.xoffset
                    + this.state.delta
            });
    };

    render() {
        return (
            <img className="Oie" src="/img/OIE_1.png" alt="oie"></img>
        );
    }
}

export default Move;