import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.primaryColor.primaryDark};
  margin-top: 30px;
  padding: 20px;
  color: ${({ theme }) => theme.secondaryColor.secondaryLight};
  text-align: center;

  a {
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        Website made by Sebastian Jędrak for portfolio purposes. If you have any problem you can contact me at jedrak.sebastian@gmail.com </p> <span> All offers are real, any buy contribute </span>
        <a target="_blank" rel="noreferrer" href="https://www.cheapshark.com">
          cheapshark.com
        </a>{" "}
    </FooterWrapper>
  );
}
