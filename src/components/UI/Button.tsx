type Props = {
    text: string
}

export default function Button(props: Props) {
  return <button>{props.text}</button>;
}
