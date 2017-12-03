import React from 'react';
import CategoryRow from '../list/CategoryRow.jsx';
import CatRow from '../list/CatRow.jsx';

class CatTable extends React.Component{

    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <CategoryRow category="male"/>
                    {
                        this.props.cats
                        .filter( cat =>cat.category == 'male')
                        .map( maleCat => <CatRow cat={maleCat} />)
                    }
                    <CategoryRow category="female"/>
                    {
                        this.props.cats
                            .filter( cat =>cat.category == 'female')
                            .map( femaleCat => <CatRow cat={femaleCat} />)
                    }
                </tbody>
            </table>

        );
    }
}

module.exports = CatTable;