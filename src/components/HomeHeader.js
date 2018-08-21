import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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
    width: calc(100% - 50em)
`
const StyledLink = styled(Link)`
color: aliceblue;
`
//TODO remove this and create a hoc for it
export const HomeHeader = ({search}) => (
    <HeaderContiner>
        <HeaderTabs>
            <div>
                {search()}

            </div>
            <SubHeader>
                <div>
                    Home
                </div>
                <div>
                    Notification
                </div>
                <div>
                    Campaing
                </div>
                <div>
                    Profile
                </div>
                <StyledLink to='/'>
                    Log out
                </StyledLink>
            </SubHeader>
        </HeaderTabs>
    </HeaderContiner>
)
