import React from 'react';
import styled from 'styled-components';

const HeaderContiner = styled.div`
    background-color: #4e62ff;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    justify-content: center;
    z-index: 0;
`
const HeaderTabs = styled.div`
    display: flex;
    font-weight: 500;
    font-style: bold;
    justify-content: space-around;
    width: calc(100% - 60px);
    color: aliceblue;
    &:hover {
        cursor: pointer;
      }
    
`
const SubHeader = HeaderTabs.extend`
    justify-content: space-around;
    width: calc(100% - 35em);
`
export const LoginHeader =()=>(
    <HeaderContiner>
        <HeaderTabs>
            Pictagraph
            <SubHeader>
                About Us
                Log In
            </SubHeader>
        </HeaderTabs>
    </HeaderContiner>
)
