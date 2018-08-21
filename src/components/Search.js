import styled from "styled-components";
import React, { Component } from "react";


const SingleSearch = styled.input.attrs({
  placeholder: "search"
})`
  width: 160px;
  height: 38px;
  
  margin-left: 20px;
  padding: 0px 30px 0px 20px;
  border: none;
  border-radius: 19px;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 250px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 250px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  handleFocus() {
    this.setState({
      focus: true
    });
  }

  handleBlur() {
    this.setState({
      focus: false
    });
  }

  render() {
    return (
        <SingleSearch
          className={this.state.focus ? "focus" : ""}
          onFocus={() => this.handleFocus()}
          onBlur={() => this.handleBlur()}
          onChange={e=>this.props.updateSearch(e.target.value)}
        />
    );
  }
}

export {Search};