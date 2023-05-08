import styled from "styled-components";

export default function Card(props: { children: React.ReactNode }) {
  const Card = styled.div`
    background-color: darkgray;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
  `;

  return <Card>{props.children}</Card>;
}
