import React from 'react'
import styled from 'styled-components'
import { selectMovies } from "../features/movie/MovieSlicer"
import {useSelector} from'react-redux'

function Movies() {
    const movies = useSelector(selectMovies);
    console.log(movies);
  return (
      <Container>
          <h4>Recommend For You</h4>
          <Content>
              {movies && movies.map((movie) =>
              (
                  <Warp key={movie.id}>
                      
                      <img src={movie.cardImg } alt="movie"/>    
              </Warp>
                  
              ))}
              
              
              <Warp>
                  <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/THOR-LOVE-AND-THUNDER-UPDATE.jpg?q=50&fit=contain&w=960&h=480&dpr=1.5" alt="movie"/>    
              </Warp>

              <Warp>
                  <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/THOR-LOVE-AND-THUNDER-UPDATE.jpg?q=50&fit=contain&w=960&h=480&dpr=1.5" alt="movie"/>    
              </Warp>

              <Warp>
                  <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/THOR-LOVE-AND-THUNDER-UPDATE.jpg?q=50&fit=contain&w=960&h=480&dpr=1.5" alt="movie"/>    
              </Warp>

              <Warp>
                  <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/THOR-LOVE-AND-THUNDER-UPDATE.jpg?q=50&fit=contain&w=960&h=480&dpr=1.5" alt="movie"/>    
              </Warp>

              <Warp>
                  <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/THOR-LOVE-AND-THUNDER-UPDATE.jpg?q=50&fit=contain&w=960&h=480&dpr=1.5" alt="movie"/>    
              </Warp>

          </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(5, minmax(0,1fr));
margin-bottom:30px;

`

const Warp = styled.div`
border-radius:10px;
overflow:hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover
{
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform:scale(1.05);
}
`
