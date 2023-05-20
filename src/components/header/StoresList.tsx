import { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Store, StoreContext } from "../../ctx/StoreProvider";
import { GamesListContext } from "../../ctx/GamesListProvider";
import ArrowDown from "../UI/ArrowDown";
import ArrowUp from "../UI/ArrowUp";
import { CSSTransition } from "react-transition-group";

const Stores = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  padding-bottom: 100px;
  justify-content: center;
  @media all and (max-width: 1000px) {
    margin: 48px 20px;
  }

  @keyframes dropIn {
    0% {
      max-height: 0;
      overflow: hidden;
    }
    100% {
      max-height: 600px;
      overflow: hidden;
    }
  }

  .stores-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 30px;
    justify-content: center;
    overflow: auto;
    max-height: 600px;
    animation: dropIn 0.5s cubic-bezier(0.65, 0, 0.35, 1);
    @media all and (max-width: 1000px) {
      margin: 0px;
    }
  }

  .stores-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    max-width: 200px;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;

    &:hover {
      color: ${({ theme }) => theme.primaryColor.primary400};
    }

    &:focus-visible {
      outline: 1px dotted ${({ theme }) => theme.secondaryColor.secondary600};
    }
    @media all and (max-width: 1000px) {
      max-width: 180px;
    }

    @media all and (max-width: 600px) {
      max-width: 170px;
    }
  }

  .store-item {
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 140px;
    padding: 20px 5px;
    border: 1px solid transparent;
    @media all and (max-width: 1000px) {
      flex-direction: row;
      padding: 10px 10px;
      width: 180px;
    }
    @media all and (max-width: 500px) {
      width: fit-content;
    }
    &:focus-visible {
      outline: 2px dotted ${({ theme }) => theme.secondaryColor.secondary600};
    }
  }

  .store-item:hover {
    background-color: ${({ theme }) => theme.primaryColor.primary200 + "15"};
    border: 1px solid ${({ theme }) => theme.primaryColor.primary100};
    border-radius: 5px;
  }

  img {
    height: 48px;
    width: 48px;
    @media all and (max-width: 1000px) {
      height: 16px;
      width: 16px;
      margin-right: 5px;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.primaryColor.primary400 + "30"};
    border: 1px solid ${({ theme }) => theme.primaryColor.primary200};
    border-radius: 5px;
  }

  .active:hover {
    background-color: ${({ theme }) => theme.primaryColor.primary600 + "30"};
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
`;

export default function StoresList() {
  const { stores, isError } = useContext(StoreContext);
  const { setActiveStores, activeStoresId } = useContext(GamesListContext);

  const nodeRef = useRef(null);


  const onStoresHandler = (e: React.MouseEvent) => {
    const storeTarget = (e.target as HTMLElement).closest("li.store-item");
    if (!storeTarget) return;
    const storeTargetId = storeTarget.getAttribute("data-id");

    if (activeStoresId.includes(storeTargetId!)) {
      setActiveStores((prev) => {
        return prev.filter((store) => store.storeID !== storeTargetId);
      });
    }

    if (!activeStoresId.includes(storeTargetId!)) {
      const storeToAdd = stores.find(
        (store) => store.storeID === storeTargetId
      );
      setActiveStores((prev) => {
        return [...prev, storeToAdd!];
      });
    }
  };

  // Hide stores

  const [hideStores, setHideStores] = useState(
    window.screen.width > 1000 ? false : true
  );

  const hideStoresHandler = () => {
    setHideStores(!hideStores);
  };

  // allStoresHandler button

  const allStoresHandler = () => {
    if (activeStoresId.length !== stores.length) setActiveStores(stores);
    if (activeStoresId.length === stores.length) setActiveStores([]);
  };

  // Error

  if (isError !== "")
    return (
      <section>
        <h2>{isError}</h2>
      </section>
    );

  // Hide stores return

  // if (hideStores === true)
  //   return (
  //     <section>
  //       {" "}
  //       <Stores>
  //         <h2 className="stores-header" onClick={hideStoresHandler}>
  //           Pick Stores <ArrowDown />
  //         </h2>
  //       </Stores>
  //     </section>
  //   );

  return (
    <section>
      <Stores onClick={onStoresHandler}>
        <h2 tabIndex={0} className="stores-header" onClick={hideStoresHandler} >
          Hide Stores <ArrowUp />
        </h2>
        <div className="button-wrapper">
          <Button onClick={allStoresHandler} text="Pick All" />
        </div>
        <CSSTransition
          in={!hideStores}
          timeout={500}
          classNames={"drop"}
          mountOnEnter
          unmountOnExit
          nodeRef={nodeRef}
        >
        
            <ul className="stores-wrapper"  > 
              {stores.map((store: Store) => {
                return (
                  <li
                    tabIndex={0}
                    className={`store-item ${
                      activeStoresId.includes(store.storeID) && "active"
                    }`}
                    key={store.storeID}
                    data-id={store.storeID}
                  >
                    <img src={store.images.logo} alt={store.storeName} />
                    <p className="store-name">{store.storeName}</p>
                  </li>
                );
              })}
            </ul>
      
        </CSSTransition>
      </Stores>
    </section>
  );
}
