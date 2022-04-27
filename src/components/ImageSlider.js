import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function ImageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    };
    
  return (
      <Carousal {...settings}>
          <Wrap>
              <img src="/images/slider-badag.jpg" alt="slider"/>
          </Wrap>
          <Wrap>
              <img src="/images/slider-badging.jpg" alt="slider"/>
          </Wrap>
          <Wrap>
              <img src="/images/slider-scale.jpg" alt="slider"/>
          </Wrap>
          <Wrap>
              <img src="/images/slider-scales.jpg" alt="slider"/>
          </Wrap>
    </Carousal>
  )
}

export default ImageSlider


const Carousal = styled(Slider)`
margin-top:20px;
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}
li.slick-active button:before{
    color:white;
}

.slick-list{
     overflow:visible; 
}
button{
    z-index: 1;
}
`
const Wrap = styled.div`
cursor:pointer;
img{
    border:4px solid transparent;
    height:100%;
    width:100%;
    border-radius:4px;
    box-shadow:  rgba(0 0 0 / 69%) 0px  26px 30px -10px,
    rgba(0 0 0 /73%) 0px  16px 10px -10px;
    transition-duration:300ms;
    // hover transition
    &:hover{
        border:4px solid rgba(249,249,249,0.8);
    }
}
`