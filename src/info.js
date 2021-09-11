import React from "react";

class Info extends React.Component{
    render(){
        return (
            <div className="box">
                <h2>Character Information:</h2>
                <h3>Name: {this.props.item.name}</h3>
                <h3>Height: {this.props.item.height}</h3>
                <h3>Birth Year: {this.props.item.birth_year}</h3>
                <h3>Gender: {this.props.item.gender}</h3>
            </div>
        )
    }
}

export default Info