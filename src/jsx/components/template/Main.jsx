import React from 'react';
import CatsData from '../../model/CatsData.jsx';
import CatTable from '../list/CatTable.jsx';
import SearchBar from '../search/SearchBar.jsx';

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            cats: null,
            filters: {
                q: false,
                likesKids: false
            },
            reloadData: true //właściwość do zabezpieczenie przed przeładowywaniem danych w nieskończoność (patrz. metoda componentDidUpdate)
        }
    }

    handleFilterQuery = (event) => {
        this.state.filters.q = (event.target.value.length)?event.target.value:false;

        this.setState( {
            filters: this.state.filters,
            reloadData: true
        });
    }

    handleFilterLikesKids = (event) => {
        this.state.filters.likesKids = event.target.checked;

        this.setState( {
            filters: this.state.filters,
            reloadData: true
        });
    }



    prepareFilters(){
        let filters = [];

        for (let key in this.state.filters){
            console.log(key);//nazwa właściwości z obiektu
            console.log(this.state.filters[key]); //pobranie wartości dla ww. właściwości (key)
            if (this.state.filters[key]){
                filters.push( key+'='+this.state.filters[key]); //q=Fi
            }
        }

        return filters;
    }

    componentDidMount(){

        CatsData.loadAll( this.prepareFilters() , (cats) => {
            this.setState({ cats });
        })
    }

    componentDidUpdate(){

        if(this.state.reloadData) { //zabezpieczenie przed wykonaniem w nieskończoność - wewnętrzna rekurencja
            CatsData.loadAll(this.prepareFilters(), (cats) => {
                this.setState({cats: cats, reloadData: false});
            })
        }
    }

    render(){
        if(this.state.cats === null) return null;

        return (
                   <section>
                       <SearchBar parentThis={this} updateSearchQuery={this.handleFilterQuery} updateLikeKids={this.handleFilterLikesKids} />
                       <CatTable cats={this.state.cats} />
                   </section>
                );
    }

}

module.exports = Main;