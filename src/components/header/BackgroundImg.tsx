import styled from "styled-components";
import backgroundImg from "../../img/main-header-img.png";

type Props = {
    children?: React.ReactNode
}

const Img = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
`;

const Container = styled.div`
    height: 100vh;
`;

export default function BackgroundImg(props: Props) {
  return (
    <Container>
      <Img src={backgroundImg} alt="header" />
      {props.children}
    </Container>
  );
}
