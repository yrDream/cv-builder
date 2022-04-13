import React from "react"
import styled from "styled-components";

import {Header, Footer, Avatar, Title, Descr} from "./components";

const Wrapper = styled.div`
max-width: 1200px;
margin: 2rem auto;
padding: 3rem 2rem;
background-color: white;
border: 1px solid #ececec;
box-shadow: 5px 7px 10px 4px #ececec;
border-radius: 14px;
`

const Row = styled.section`
display: flex;
flex-wrap: wrap;
align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
margin: 2rem 0;
`
const Sidebar = styled.div`
flex: 1;
margin-right: 1rem;
`

const Content = styled.div`
flex: 3;
margin-left: 1rem;
`


const App = () => {


  const handleAvatarClick = () => {
    console.log('avatar click')
  }

  const handlePrintClick = () => {
    console.log('print click') 
  }

    return( 
        <div className="ui-wrapper">
      <Header onClick={handlePrintClick} />
      <div className="ui-content-wrapper">
        <Wrapper>
          <div className="ui-container">
           <Row itemsCenter>
             <Avatar onClick={handleAvatarClick} />
             <div>
               <Title>Hello Title</Title>
               <Descr>Hello Description</Descr>
             </div>
            </Row>

          <Row>
            <Sidebar>Sidebar</Sidebar>
            <Content>Content</Content>
          </Row>

          </div>
        </Wrapper>
      </div>

      <Footer />
    </div>
    )
    
};

export default App;