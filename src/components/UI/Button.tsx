type Props = {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode
};

export default function Button(props: Props) {

  const functionHandler = () => {
    props.onClick?.();
  };

  return (
    <button  onClick={functionHandler}>
      {props.text}
      {props.children}
    </button>
  );
}
