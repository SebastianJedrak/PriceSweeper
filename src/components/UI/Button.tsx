type Props = {
  text: string;
  onClickFunction?: () => void;
};

export default function Button(props: Props) {
  const functionHandler = () => {
    props.onClickFunction?.();
  };

  return (
    <button type="button" onClick={functionHandler}>
      {props.text}
    </button>
  );
}
