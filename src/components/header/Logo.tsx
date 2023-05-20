import styled from "styled-components";

const StyledLogo = styled.div`
  color: ${({ theme }) => theme.secondaryColor.secondaryLight};

  h1 {
    text-align: center;
    font-family: "Righteous", cursive;
    letter-spacing: 2.5px;
    margin-bottom: 15px;
    font-size: 2.5rem;
    @media all and (max-width: 1000px) {
      font-size: 2.3rem;
    }

    @media all and (max-width: 600px) {
      font-size: 2.0rem;
    }
  }

  .logo-span {
    color: ${({ theme }) => theme.primaryColor.primary500};
  }

  span {
    color: ${({ theme }) => theme.secondaryColor.secondary300};
  }

  p {
    text-align: center;
    margin-bottom: 2.5px;
  }

  p:last-child {
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
      <p>Looking for PC game deals?</p>
      <p>
        You're hitting the gold <span>mine!</span>
      </p>
    </StyledLogo>
  );
}
