import './App.css';
import styled from "styled-components";
import { AccountBox } from './components/accountBox';

const AppContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  // padding-top: 80px;
  // padding-buttom: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return <AppContainer>
    <AccountBox>

    </AccountBox>
  </AppContainer>;
}

export default App;
