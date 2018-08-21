import React,{Component} from 'react';

import {SearchResults} from '../HOCs';
import {dummyData} from '../dummyData/dummyData';
import {HomeHeader, Search} from '../components';

 const  HomeScreen =(props) =>  { 
     console.log(props.filteredData)  
        return(
            <React.Fragment>
                <HomeHeader search={()=> <Search updateSearch={props.updateSearch} />} />
                {props.filteredData.map((user)=><div>{user.name}</div>)}
            </React.Fragment>
        ) 
} 

const Home = SearchResults(HomeScreen)(dummyData);
    export default Home