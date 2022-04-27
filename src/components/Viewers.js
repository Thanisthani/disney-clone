import React from 'react'
import styled from "styled-components"

function Viewers() {
  return (
      <Container>
          <Warp>
              <img src="/images/viewers-disney.png" alt="disney" />
          </Warp>
          
          <Warp>
              <img src="/images/viewers-marvel.png" alt="disney" />
          </Warp>

          <Warp>
              <img src="/images/viewers-pixar.png" alt="disney" />
          </Warp>

          <Warp>
              <img src="/images/viewers-starwars.png" alt="disney" />
          </Warp>

          <Warp>
              <img src="/images/viewers-national.png" alt="disney" />
          </Warp>

    </Container>
  )
}

export default Viewers

const Container = styled.div
    `
    margin-top:40px;
    display:grid;
    grid-template-columns: repeat(5, minmax(0,1fr));
    grid-column-gap:25px;

    
    `

const Warp = styled.div 
    `
    border: 3px solid rgba(249,249,249,0.1);
    border-radius:20px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img
{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover{
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform:scale(1.05);


}
    `