import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import db from '../firbase'

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const ref = doc(db, 'movies', id)
     getDoc(ref)
      .then((doc) => {
        console.log(doc.data());
        setMovie(doc.data());
      });

  },[id])
  return (
    <Container>
    { movie && (
      <>
   
      <Background>
        <img src={movie.bgImg} alt="Movies"/>
      </Background>

      <MovieTitle>
        <img src={movie.titleImg} alt="movieTitle" />
      </MovieTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="playbtn" />
          <span>PLAY</span>
        </PlayButton>
        
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="playbtn" />
          <span>TRAILER</span>
        </TrailerButton>
        
        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupButton>
          <img src="/images/group-icon.png" alt="grp" />
        </GroupButton>

      </Controls>

      <Subtitle>
        lshhigfdliufd iufsdoiudafbr8ewiuijzn  kugfduhscxhgbfl
      </Subtitle>

      <Description>
        fudgsii orfgyfbfdcdx oiuoywe98ydsh axugdcsaibcicugu gfcagcbigboiuhfsadihcbi ous dcasy dfsauygbcvdcsaauygbiuausguygwdafisgvkugfvb f ug frbsdiuguhnoiai hsjbloueiutrliuau xf uiydfgxkuugbfiu cfcw  erefiwug rgbduwc 9ruwhdb viugfboiqwidas,czbzuyfvchbf wryhfwduischjj vfuysdgqefdh gef o8greo8dfgabufd bibSDIYUGidufogb  sdo8gbczbhb9uufdfyds arfdys9u yasdiu fg iugifohgrauoiuasgddup  
      </Description>
 
    </> 
      )}
         </Container >
  )
}

export default Details

const Container = styled.div`
height: calc(100vh -75px);
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

const Controls = styled.div`
display:flex;
align-items:center;

`

const PlayButton = styled.button`
border:none;
border-radius:4px;
background:#ffffff;
margin-right:20px;
padding: 3px 14px;
display:flex;
align-items:center;
font-size:15px;
letter-spacing:1.5px;
cursor:pointer;

&:hover{
  background:rgb(198,198,198);
}
`

const TrailerButton = styled(PlayButton)`

background:rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: #ffffff;
`

const AddButton = styled.button`
background:rgba(0,0,0,0.6);
display:flex;
align-items:center;
justify-content:center;
width:40px;
height:40px;
border-radius:50%;
border:2px solid rgb(249,249,249);
color:#ffffff;
font-size:25px;
margin-right: 16px;
cursor:pointer;

`

const GroupButton = styled(AddButton)`
background:rgba(0,0,0);
`
const Subtitle = styled.p`
font-size:15px;
color:#ffffff;
margin-top: 24px;
`

const Description = styled.p`
font-size:17px;
color:#ffffff;
line-height:1.3;
letter-spacing:1.4px;
`