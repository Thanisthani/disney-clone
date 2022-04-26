import React from 'react'
import styled from 'styled-components';
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="https://drive.google.com/drive/folders/1WvkQNhmD-PsgT5KVEvwpa7MTfx4ByBlx" >
          <img src="/images/home-icon.svg" alt="home"/>
          <span>Home</span>
        </a>
        <a href="https://drive.google.com/drive/folders/1WvkQNhmD-PsgT5KVEvwpa7MTfx4ByBlx" >
          <img src="/images/search-icon.svg" alt="home"/>
          <span>Search</span>
        </a>
        <a href="https://drive.google.com/drive/folders/1WvkQNhmD-PsgT5KVEvwpa7MTfx4ByBlx" >
          <img src="/images/watchlist-icon.svg" alt="home"/>
          <span>Watchlist</span>
        </a>
        <a href="https://drive.google.com/drive/folders/1WvkQNhmD-PsgT5KVEvwpa7MTfx4ByBlx" >
          <img src="/images/original-icon.svg" alt="home"/>
          <span>Originals</span>
        </a>

        <a href="https://drive.google.com/drive/folders/1WvkQNhmD-PsgT5KVEvwpa7MTfx4ByBlx" >
          <img src="/images/movie-icon.svg" alt="home"/>
          <span>Movies</span>
        </a>

        <a href="https://drive.google.com/drive/folders/1WvkQNhmD-PsgT5KVEvwpa7MTfx4ByBlx" >
          <img src="/images/series-icon.svg" alt="home"/>
          <span>Series</span>
        </a>

        
      </NavMenu>
      <UserImg src="https://randomuser.me/api/portraits/men/94.jpg"/>
    
    </Nav>
   
  )
}



const Nav = styled.nav`
height:70px;
background-color:#090613;
padding: 0 30px;
display: flex;
align-items: center;

`

const Logo = styled.img`
height: 50px;

`

const NavMenu = styled.div`
display: flex;
flex:1;
// align-items: center;
padding: 0 50px;
a
{
  display: flex;
  align-items: center;
  padding: 0 12px;

  img
  {
    height:20px;
    // align-items: center;
    padding:0 8px;
  }
  span
  {
    color:#ffffff;
    // align-items: center;
    font-size:13px;
    letter-spacing:1.42px;
    position:relative;


    &:after
    {
     content:"";
     height:2px;
     background:#ffffff;
     position:absolute;
     left:0;
     right:0;
     bottom:-6px;
      //  opacity:0;
     transform: scaleX(0);
     transform-origin: left center;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover
  {
    // background:red;
    span:after{
      transform: scaleX(1);
    }
  
  }

  
} `

const UserImg = styled.img`
height:50px;
width:50px;
justify-content:flex-end;
border-radius:50%;
cursor: pointer;
`


export default Header