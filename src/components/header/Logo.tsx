import styled from "styled-components";

const StyledLogo = styled.div`
  color: ${({ theme }) => theme.secondaryColor.secondaryLight};

  h1 {
    text-align: center;
    font-family: "Righteous", cursive;
    letter-spacing: 2.5px;
    margin-bottom: 15px;
  }

  .logo-span {
    color: ${({ theme }) => theme.primaryColor.primary500};
  }

  span {
    color: ${({ theme }) => theme.secondaryColor.secondary300};
  }

  p {
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    width: 300px;
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      <h1>
        <span className="logo-span">Price</span>Sweeper
      </h1>
      <p>
        Looking for PC game deals? You're hitting the gold <span>mine!</span>
      </p>
    </StyledLogo>
  );
}
