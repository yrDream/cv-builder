import React, { useRef, useState } from "react"
import styled from "styled-components";
import { useReactToPrint } from 'react-to-print';

import {Header, Footer, Avatar, Title, Descr, Range} from "./components";

import { ReactComponent as MailIcon } from './assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from './assets/icons/phone.svg';

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

  const [skillsCounter, setSkillsCounter] = useState(1);
  const [worksCounter, setWorksCounter] = useState(1);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return( 
        <div className="ui-wrapper">
      <Header onClick={handlePrint}/>
      <div className="ui-content-wrapper">
        <Wrapper>
          <div className="ui-container"  ref={componentRef}>
           <Row itemsCenter>
              <Sidebar> 
                <Avatar/>
              </Sidebar>
              <Content>
               <div>
                 <Title>Ivan Ivanov</Title>
                 <Descr>Junior Frontend Developer</Descr>
               </div>
              </Content>
            </Row>

          <Row>
            <Sidebar>
               <Title size='3'>About me:</Title>
               <Descr>Frontend developer</Descr>
               <Descr isSecondary>Netherlands, DC</Descr>

               <Descr isPrimary style={{marginTop: '2rem'}}>
                 <MailIcon style={{marginRight: '0.6rem'}} />
                 yrDream@gmail.com</Descr>
               <Descr isPrimary>
                <PhoneIcon style={{marginRight: '0.6rem'}} />
                 +31 954 23 21 244</Descr>
            </Sidebar>
            <Content>
               <Title size='3' isUppercase>Education:</Title>
               <Descr>Stanford University - BS Electrical Engineering</Descr>

               <Title size='3'  isUppercase isShowButton onClick={()=>setWorksCounter(worksCounter + 1)} style={{marginTop:'3.6rem'}}>Work Experience:</Title>
               {new Array(worksCounter).fill(1).map((_,i)=><Descr key={i}>{i+1}. Solutions Architect, Stripe.</Descr> )}
              

               <Title size='3'  isUppercase isShowButton onClick={()=>setSkillsCounter(skillsCounter + 1)} style={{marginTop:'3rem'}}>
                 Skills:
                 </Title>

               {new Array(skillsCounter).fill(1).map((_,i)=><Range key={i} /> )}
            </Content>
          </Row>

          </div>
        </Wrapper>
      </div>

      <Footer />
    </div>
    )
    
};

export default App;