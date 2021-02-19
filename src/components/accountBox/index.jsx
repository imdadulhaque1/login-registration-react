import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
          width: 280px;
          min-height: 550px;
          display: flex;
          flex-direction: column;
          border-radius: 19px;
          background-color: #E8E8E8;
          box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
          position: relative;
          overflow: hidden;

`;
const TopContainer = styled.div`
          width: 100%;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 1.8rem;
          padding bottom: 5rem;
`;
const BackDrop = styled.div`
          width: 160%;
          height: 500px;
          position: absolute;
          display: flex;
          flex-direction: column;
          border-radius: 50%;
          transform: rotate(60deg);
          top: -290px;
          left: -70px;
          background: rgb(241,196,15);
          background: linear-gradient(0deg, rgba(241,196,15,1) 0%, rgba(244,187,51,1) 20%, rgba(253,187,45,1) 100%);
`;

const HeaderContainer = styled.div`
          width: 100%;
          display: flex;
          flex-direction: column;
`;

export function AccountBox(props){
          return <BoxContainer>
                    <TopContainer>
                              <BackDrop />
                    </TopContainer>
          </BoxContainer>
}