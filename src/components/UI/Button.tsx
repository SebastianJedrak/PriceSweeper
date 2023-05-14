import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode
};

const ButtonStyled = styled.button`
  padding: 5px;
  min-width: 80px;
  cursor: pointer;
`

export default function Button(props: Props) {

  const functionHandler = () => {
    props.onClick?.();
  };

  return (
    <ButtonStyled  onClick={functionHandler}>
      {props.text}
      {props.children}
    </ButtonStyled>
  );
}
