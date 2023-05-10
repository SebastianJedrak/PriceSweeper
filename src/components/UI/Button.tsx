type Props = {
  text: string;
  onClick?: () => void;
};

export default function Button(props: Props) {

  const functionHandler = () => {
    props.onClick?.();
  };

  return (
    <button  onClick={functionHandler}>
      {props.text}
    </button>
  );
}
