import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode
};

const ButtonStyled = styled.button`
  padding: 5px;
  min-width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: ${({theme}) => theme.secondaryColor.secondary600};
  color: ${({theme}) => theme.primaryColor.primaryDark};
  font-weight: 550;
  border: 1px solid ${({theme}) => theme.primaryColor.primaryDark};
  &:hover {
    background-color: ${({theme}) => theme.secondaryColor.secondary400};
  }
  border-radius: 2.5px;

  &:focus-visible {
    outline: 2px dotted ${({ theme }) => theme.secondaryColor.secondary600};
  }
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
