import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Paginator from "./Paginator";
import "../style/List.css";
import Button from "../menu-component/Button";
import { FILTER } from "../Main";
export const VIEWMODE = {
  PAGES: "pages",
  SCROLL: "scroll",
};
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.pageIndex = 1;
    this.itemPerPage = 5;
    this.pageNumbers = 0;
    this.state = {
      viewMode: VIEWMODE.PAGES,
      visible: 1,
    };
    this.viewRef = React.createRef();
  }

  viewStats = (view) => {
    console.log("Calculated page numbers: ", this.pageNumbers);
    console.log("View: ", view);
    console.log("Page Index: ", this.pageIndex);
  };
  calculatePageNumbers(item) {
    this.pageNumbers = Math.ceil(item.length / 5);
  }

  handleViewMode = (viewMode) => {
    this.setState({ viewMode });
    this.pageIndex = 1;
  };
  handleScroll = () => {
    //this function calculates the scrolled distance by scrollHeight
    //minus clientHeight, which are the total height of the <ul> (including
    //overflow content) and the ul's actual rendered height
    //then compares this with scrollTop property, which shows the distance the scroll pointer
    //has traveled along the scroll bar.
    //the values equalling each other indicates that user has scrolled to the bottom of the list
    //thus incrementing the visible state and rerenders the list, showing 5 more of the list
    const { list } = this.props;
    const { visible } = this.state;
    const visibleInstances = Math.ceil(list.length / 5);
    if (
      Math.ceil(this.viewRef.current.scrollTop) ===
      this.viewRef.current.scrollHeight - this.viewRef.current.clientHeight
    ) {
      this.setState({
        visible:
          visible < visibleInstances
            ? visible + 1
            : visible === visibleInstances
            ? visible
            : visible - 1,
      });
      console.log(visible);
    }
  };
  componentDidUpdate(prevProps) {
    const { list } = this.props;
    if (list !== prevProps.list) {
      this.pageNumbers = Math.ceil(list.length / 5);
    }
  }
  handlePageChange = (num, view) => {
    this.pageIndex = num;
    view = view.slice(
      num * this.itemPerPage - this.itemPerPage,
      num * this.itemPerPage
    );
    console.log(this.pageIndex);
    console.log(view);
  };
  render() {
    const pageNumberArray = [...Array(this.pageNumbers + 1).keys()].slice(1);
    const { viewMode, visible } = this.state;
    const {
      filter,
      list,
      statusHandler,
      countHandler,
      editTodoHandler,
      deleteHandler,
    } = this.props;
    let view = [];
    switch (viewMode) {
      case VIEWMODE.PAGES:
        switch (filter) {
          case FILTER.ALL:
            view = list;
            this.calculatePageNumbers(list);
            break;
          case FILTER.ACTIVE:
            view = list.filter((i) => !i.status);
            this.calculatePageNumbers(list.filter((i) => !i.status));
            break;
          case FILTER.COMPLETED:
            view = list.filter((i) => i.status);
            this.calculatePageNumbers(list.filter((i) => i.status));
            break;
          default:
            break;
        }
        view = view.slice(
          this.pageIndex * this.itemPerPage - this.itemPerPage,
          this.pageIndex * this.itemPerPage
        );
        break;
      case VIEWMODE.SCROLL:
        view = list.slice(0, visible * this.itemPerPage);
        break;
      default:
        break;
    }

    return (
      <div>
        <div className="view-menu">
          <Button
            name="Page view"
            onClick={() => this.handleViewMode(VIEWMODE.PAGES)}
          />
          <Button
            name="Scroll view"
            onClick={() => {
              this.handleViewMode(VIEWMODE.SCROLL);
            }}
          />
        </div>
        <ul
          ref={this.viewRef}
          style={
            viewMode === VIEWMODE.SCROLL
              ? { height: 200, overflow: "auto" }
              : {}
          }
          onScroll={this.handleScroll}
        >
          {view.map((item) => {
            return (
              <li key={item.id}>
                <Item
                  item={item}
                  onClickHandler={statusHandler}
                  onChangeStatusHandler={countHandler}
                  handleEditTodo={editTodoHandler}
                  handleDelete={deleteHandler}
                />
              </li>
            );
          })}
          {this.pageNumbers > 1 && viewMode === VIEWMODE.PAGES ? (
            <Paginator
              view={view}
              pageNumbers={pageNumberArray}
              onClick={this.handlePageChange}
              pageIndex={this.pageIndex}
            />
          ) : (
            ""
          )}
        </ul>
      </div>
    );
  }
}
List.propTypes = {
  list: PropTypes.array,
  filter: PropTypes.object,
};
