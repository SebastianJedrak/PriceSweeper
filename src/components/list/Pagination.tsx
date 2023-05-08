import styled from "styled-components";

type Props = {
  pages: number;
};

const PaginationWrapper = styled.div`
  display:grid;
  grid-template-columns: 1/1/1;
  

  .pages{
    grid-column: 2/3;
    text-align:center;
  }

  .dropdown{
    grid-column: 3/4;
text-align: end;
  }
`;

export default function Pagination(props: Props) {
  return (
    <PaginationWrapper>
      <div className="pages">
        {" "}
        <span>&laquo;</span>
        {[...Array(props.pages)].map((_, i) => {
          return <span key={i + 1}>{i + 1}</span>;
        })}
        <span>&raquo;</span>
      </div>
      <div className="dropdown">
        <label htmlFor="select">Items per page</label>
        <select id="select">
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
    </PaginationWrapper>
  );
}
