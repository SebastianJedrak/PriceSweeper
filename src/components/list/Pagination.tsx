import { useState } from "react";

type Props = {
  pages: number;
  children?: React.ReactNode
};

export default function Pagination(props: Props) {
const [pagesArray, setPagesArray] = useState()


  return (
    <>
      <span>&laquo;</span>
      <span>{props.pages}</span>
      <span>&raquo;</span>
    </>
  );
}
