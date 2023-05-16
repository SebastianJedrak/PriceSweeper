import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: ${({theme}) => theme.black};
  margin-top: 10px;
  padding: 20px;
  color: ${({theme}) => theme.white};
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae distinctio magnam repudiandae illo dicta fuga ratione? Rem exercitationem minima corrupti quibusdam repellat facilis ea minus perferendis, pariatur, aliquam delectus, ut nostrum accusantium quas dignissimos veniam. Quas dolorum amet atque sunt quibusdam, voluptatum magni quisquam et, quo obcaecati iste sint velit! </p>
    </FooterWrapper>
  );
}
