import { useContext, useRef } from "react";
import styled from "styled-components";
import { PageContext } from "../../ctx/PageProvider";

type Props = {
  pages: number;
  onChangePage: (page: number) => void;
  activePage: number;
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

  .active {
    background-color: darkgray;
  }
`;

export default function Pagination(props: Props) {
  const pagesArray = [...Array(props.pages)];

  const leftArrowHandler = () => {
    props.onChangePage(1);
  };

  const rightArrowHandler = () => {
    if (props.pages === 0) return;
    props.onChangePage(props.pages);
  };

  const toPageHandler = (toPage: number) => {
    props.onChangePage(toPage);
  };

  // Change items per page
  const { setItemPerPage } = useContext(PageContext);
  const itemsPerPageRefValue = useRef<HTMLSelectElement>(null);

  const itemsPerPageHandler = () => {
    const PageValue = Number(itemsPerPageRefValue.current!.value);
    setItemPerPage(PageValue);
    props.onChangePage(1)
  };

  return (
    <PaginationWrapper>
      <div className="pages">
        <i onClick={leftArrowHandler}>&laquo;</i>

        {pagesArray.map((_, i) => {
          return (
            <span
              key={i + 1}
              onClick={toPageHandler.bind(_, i + 1)}
              className={i + 1 === props.activePage ? "active" : ""}
            >
              {i + 1}
            </span>
          );
        })}

        <i onClick={rightArrowHandler}>&raquo;</i>
      </div>
      <div className="dropdown">
        <label htmlFor="select">Items per page: </label>
        <select
          ref={itemsPerPageRefValue}
          onChange={itemsPerPageHandler}
          id="select"
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </PaginationWrapper>
  );
}
