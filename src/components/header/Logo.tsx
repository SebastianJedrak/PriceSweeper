import styled from "styled-components"

const LogoText = styled.h1`
    color: white;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
`

export default function Logo () {
    return <LogoText>PriceSweeper</LogoText>
}