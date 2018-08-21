import React from 'react';

export const SearchResults = Component => data => {
    return class extends React.Component{
        state={
            searchText:'',
            filterData: data
        }
        filteredData = () =>{
           this.setState({
               filterData: data.filter((user)=> user.name.toString().toLowerCase().includes(this.state.searchText)) 
           }) 
        }
        updateSearch = (value)=>{
            this.setState({searchText: value.toString().toLowerCase()}, this.filteredData)
        }
    render(){
        return(
            <Component updateSearch = {this.updateSearch} data={this} filteredData = {this.state.filterData} />
        )
    }
}}