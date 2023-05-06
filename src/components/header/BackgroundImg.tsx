import styled from "styled-components"
import backgroundImg from "../../img/main-header-img.png"

const Img = styled.img`
width:100%;
height: 90vh;
position: absolute;
z-index: -100;
`

export default function BackgroundImg () {
    return <Img src={backgroundImg} alt="header"/>
}