import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
      <Container>
          <Contents>
              <img src="/images/cta-logo-one.svg" alt="CTA" /> 

              <SignUp>GET ALL THERE</SignUp>

              <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </Description>

              <BottomImg src="/images/cta-logo-two.png" />
    

          </Contents>
      </Container>
      
  )
}

export default Login

const Container = styled.div`
height: calc(100vh - 70px);
position:relative;
display:flex;
justify-content:center;
align-items:top;
 
&:before{
    background-image:url("/images/login-background.jpg");
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    content:"";
    z-index:-1;

}
`

const Contents = styled.div`
display:flex;
flex-direction:column;
width:50%;
align-items:center;
margin-top:90px;
`

const SignUp = styled.div`
background-color:#0063e5;
color:#f9f9f9;
padding: 10px 0;
letter-spacing:1.5px;
text-align:center;
cursor:pointer;
margin-top:17px;
width:100%;


&:hover{
    background-color:#0483ee;
}
`

const Description = styled.p`
font-size:11px;
color:#ffffff;
letter-spacing:1.42px;
text-align:center;
margin-top:20px;

`

const BottomImg = styled.img`
width:90%;
`