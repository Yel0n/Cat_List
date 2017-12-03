import React from 'react';

class CatRow extends React.Component{

    render(){
        return <tr>
                    <td>{this.props.cat.name}</td>
                    <td>{this.props.cat.age}</td>
                </tr>
    }
}

module.exports = CatRow;