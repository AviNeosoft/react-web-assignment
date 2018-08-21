import React,{Component} from 'react';

import {dummyData} from '../dummyData/dummyData';
import {HomeHeader, Search} from '../components';

 class  HomeScreen extends Component {
    state={
        searchText: ''
    }
    updateSearch = (e)=>{
        this.setState( _=> ({searchText: e.target.value}))
    }
    render(){
        return(
            <React.Fragment>
            <HomeHeader search={()=> <Search updateSearch={this.updateSearch}/>} />
            {dummyData.map((user)=><div>{user.name}</div>)}
            </React.Fragment>
        )
    }
} 

const Home = SearchResults(HomeScreen);
    export default Home