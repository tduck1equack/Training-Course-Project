import React, { useRef, useState, useContext, lazy, Suspense } from "react";
// import Item from "./Item";
import Paginator from "./Paginator";
import Button from "../menu-component/Button";
import { FILTER, delaySimulation } from "../Main";
import { THEME, ThemeContext } from "../style/theme";
import ErrorBoundaries from "../miscellaneous/ErrorBoundaries";

import "../style/List.css";
import { Loading } from "../miscellaneous/Loading";

const Item = lazy(() => delaySimulation(import("./Item")));

const VIEWMODE = {
  PAGES: "pages",
  SCROLL: "scroll",
};
const List = (props) => {
  const [viewMode, setViewMode] = useState(VIEWMODE.PAGES);
  const [visible, setVisible] = useState(1);
  const viewRef = useRef();
  const { theme, changeTheme } = useContext(ThemeContext);
  const {
    list,
    filter,
    countHandler,
    statusHandler,
    editTodoHandler,
    deleteHandler,
  } = props;
  let [view, itemPerPage, pageNumbers] = [list, 5, null];

  console.log(`Component: List`);

  const handleViewMode = (viewMode) => {
    setViewMode(viewMode);
    setVisible(1);
    console.log(viewMode);
    viewRef.current.scrollTop = 0;
  };
  const handleScroll = () => {
    const visibleInstances = Math.ceil(list.length / 5);
    if (
      Math.ceil(viewRef.current.scrollTop) ===
      viewRef.current.scrollHeight - viewRef.current.clientHeight
    ) {
      setVisible(visible < visibleInstances ? visible + 1 : visible);
      console.log(visible);
    }
  };

  const handlePageChange = (num) => {
    setVisible(num);
  };
  switch (filter) {
    case FILTER.ALL:
      view = list;
      break;
    case FILTER.ACTIVE:
      view = view.filter((i) => !i.status);
      break;
    case FILTER.COMPLETED:
      view = view.filter((i) => i.status);
      break;
    default:
      break;
  }
  pageNumbers = Math.ceil(view.length / 5);
  switch (viewMode) {
    case VIEWMODE.PAGES:
      view = view.slice(
        visible * itemPerPage - itemPerPage,
        visible * itemPerPage
      );
      break;
    case VIEWMODE.SCROLL:
      view = view.slice(0, visible * itemPerPage);
      break;
    default:
      break;
  }
  return (
    <div className={`list ${theme === THEME.LIGHT ? "" : "dark-list"}`}>
      <div className="action-menu">
        <div className="view-menu">
          <Button
            name="Page view"
            onClick={() => handleViewMode(VIEWMODE.PAGES)}
          />
          <Button
            name="Scroll view"
            onClick={() => {
              handleViewMode(VIEWMODE.SCROLL);
            }}
          />
        </div>
        <Button
          name={theme === THEME.LIGHT ? "Dark" : "Light"}
          onClick={changeTheme}
        />
      </div>
      <ul
        ref={viewRef}
        style={
          viewMode === VIEWMODE.SCROLL ? { height: 200, overflow: "auto" } : {}
        }
        onScroll={handleScroll}
      >
        {view.map((item) => {
          return (
            <li key={item.id}>
              <ErrorBoundaries fallback={<p>Something went wrong...</p>}>
                <Suspense fallback={<p>Loadding...</p>}>
                  <Item
                    item={item}
                    onClickHandler={statusHandler}
                    onChangeStatusHandler={countHandler}
                    handleEditTodo={editTodoHandler}
                    handleDelete={deleteHandler}
                  />
                </Suspense>
              </ErrorBoundaries>
            </li>
          );
        })}
        {pageNumbers > 1 && viewMode === VIEWMODE.PAGES ? (
          <Paginator
            pageNumbers={pageNumbers}
            onClick={handlePageChange}
            pageIndex={visible}
          />
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
export default List;
