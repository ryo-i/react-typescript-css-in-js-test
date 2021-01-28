import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Block = styled.div`
  margin: 20px;
  padding: 0 20px;
  background: #333;
  border-radius: 10px;
`;

const CssInJsTest = styled.p`
  color: red;
`;

const keyColor = 'yellow';

const CssInJsTest2 = styled.p`
  color: ${keyColor};
  &:hover {
    background: rgba(255,255,255,0.3);
  }
  & span {
    font-weight: bold;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React, TypeScript & CSS in JS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Block>
          <CssInJsTest>
            CSS in JSテストですと。
          </CssInJsTest>
          <CssInJsTest2>
            CSS in JS<span>テスト2</span>ですと。
          </CssInJsTest2>
        </Block>
      </header>
    </div>
  );
}

export default App;
