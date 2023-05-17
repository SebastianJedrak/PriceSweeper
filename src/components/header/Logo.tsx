import styled from "styled-components";

const LogoText = styled.h1`
  color: ${({ theme }) => theme.secondaryColor.secondaryLight};
  text-align: center;
  span {
    color: ${({ theme }) => theme.primaryColor.primary500};
  }
  font-family: 'Righteous', cursive;
  letter-spacing: 2.5px;
`;

export default function Logo() {
  return (
    <LogoText>
      Price<span>Sweeper</span>
    </LogoText>
  );
}
