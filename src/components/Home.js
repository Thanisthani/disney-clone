import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { db } from '../firbase'
import { onSnapshot,collection } from '@firebase/firestore';

function Home() {

  useEffect(() => {
    console.log("Hiii");
    onSnapshot(collection(db, "movies"), (snapshot) => {
      let temp_movies = snapshot.docs.map((doc) => {
        console.log(doc.data)
        return{id:doc.id,...doc.data()}
      })

      console.log(temp_movies)
    })

   
  })
  return (
    <Container>
      
      <ImageSlider />
      <Viewers />
      <Movies />
      
    </Container>
  )
}

export default Home

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 30px;
position:relative;
color:white;
overflow-x:hidden;

&:before
{
    background:url("/images/home-background.png") center center / cover
    no-repeat fixed;
    content:"";
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;

}
`