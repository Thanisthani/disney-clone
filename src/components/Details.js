import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C42A74B2CCC3E1FEC11B09A3EFF12DEB1A29663740CDAEBB5EFC713B9F97235/scale?width=1920&aspectRatio=1.78&format=jpeg" alt="Movies"/>
      </Background>

      <MovieTitle>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C5917FC19BF1C3380BE616572C129C282973BF087165533ED782E301ED7C4B8/scale?width=1344&aspectRatio=1.78&format=png' alt="movieTitle" />
      </MovieTitle>
    </Container >
  )
}

export default Details

const Container = styled.div`
height: calc(100vh - 70px);
padding:0 40px;
margin-top:20px;
`

const Background = styled.div`
position : fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
  width:100%;
  height:100%;
  object-fit:cover;
}
`

const MovieTitle = styled.div`
height:38vh;
min-height:170px;
width:35vw;
min-width:200px;
padding-top:10px;

img{
  width:100%;
  height:100%;
  object-fit:contain;
}

`