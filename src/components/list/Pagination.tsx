import styled from "styled-components";

type Props = {
  pages: number;
};

const PaginationWrapper = styled.div`
text-align:center;
`;

export default function Pagination(props: Props) {
  return (
    <PaginationWrapper>
      <span>&laquo;</span>
      {[...Array(props.pages)].map((_, i) => {
        return <span key={i+1}>{i + 1}</span>;
      })}
      <span>&raquo;</span>
    </PaginationWrapper>
  );
}
