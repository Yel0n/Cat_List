import React from 'react';

class SearchBar extends React.Component{

    render(){
        return (
            <section>
                <input type="text" placeholder="Szukaj" onChange={this.props.updateSearchQuery}/>
                <label for="likeKids">Only show cats that likes kids</label>
                <input type="checkbox" id="likeKids" onChange={this.props.updateLikeKids}/>

            </section>


        )
    }
}

module.exports = SearchBar;