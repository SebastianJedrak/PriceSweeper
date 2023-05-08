import styled from "styled-components";

type Props = {
  pages: number;
  onChangePage: (page: number) => void;
};

const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  margin: 0 10px;
  .pages {
    grid-column: 2/3;
    grid-row: 1;
    text-align: center;
    width: 100%;
  }

  .dropdown {
    grid-column: 1/2;
    grid-row: 1;
    text-align: start;
    width: auto;
  }

  span,
  i {
    margin: 0 4px;
    padding: 1px 6px;
    cursor: pointer;
  }
`;

export default function Pagination(props: Props) {
  const leftArrowHandler = () => {
    props.onChangePage(1);
  };

  const rightArrowHandler = () => {
    props.onChangePage(props.pages);
  };

  const toPageHandler = (toPage: number) => {
    props.onChangePage(toPage);
  };

  return (
    <PaginationWrapper>
      <div className="pages">
        <i onClick={leftArrowHandler}>&laquo;</i>

        {[...Array(props.pages)].map((_, i) => {
          return (
            <span key={i + 1} onClick={toPageHandler.bind(_, i + 1)}>
              {i + 1}
            </span>
          );
        })}

        <i onClick={rightArrowHandler}>&raquo;</i>
      </div>
      <div className="dropdown">
        <label htmlFor="select">Items per page: </label>
        <select id="select">
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
    </PaginationWrapper>
  );
}
