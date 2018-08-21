import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

import {SearchResults} from '../HOCs';
import {dummyData} from '../dummyData/dummyData';
import {HomeHeader, Search} from '../components';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`
 const  HomeScreen =(props) =>  { 
     console.log(props.filteredData)  
        return(
            <React.Fragment>
                <HomeHeader search={()=> <Search updateSearch={props.updateSearch} />} />
               
                {props.filteredData.map((user)=>
                 <CardContainer>

                    <Card style={{width:'150px'}}>
                        <CardHeader>
                        {user.name}
                        </CardHeader>
                        <CardBody>
                            
                            <p>{user.address.street}</p>
                            <p>{user.address.suite}</p>
                            <p>{user.address.city}</p>
                            <p>{user.address.zipcode}</p>
                            
                        </CardBody>
                        <CardFooter>
                        <p>
                            <a href="#123">{user.website}</a>
                        </p>
                        </CardFooter>
                    </Card>
                 </CardContainer>
                   
                    
                    )
                }

                
            </React.Fragment>
        ) 
} 

const Home = SearchResults(HomeScreen)(dummyData);
    export default Home