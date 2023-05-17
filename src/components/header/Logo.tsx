import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.secondaryColor.secondaryLight};
  text-align: center;
  span {
    color: ${({ theme }) => theme.primaryColor.primary500};
  }
  font-family: "Righteous", cursive;
  letter-spacing: 2.5px;
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.secondaryColor.secondaryLight};
  width: 60%;
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;
`;

export default function Logo() {
  return (
    <>
      <StyledH1>
        Price<span>Sweeper</span>
      </StyledH1>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam
        vero praesentium ab illo excepturi aliquid, consequatur ex soluta
        corporis ratione temporibus eveniet amet quia unde quibusdam pariatur
        ipsum! Exercitationem!
      </StyledParagraph>
    </>
  );
}
