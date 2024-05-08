import React, { useContext } from "react";
import Button from "../menu-component/Button";

import "../style/Paginator.css";
import { THEME, ThemeContext } from "../style/theme";

const Paginator = (props) => {
  const { theme } = useContext(ThemeContext);
  const { pageNumbers, onClick, pageIndex } = props;
  const pageNumbersArray = [...Array(pageNumbers + 1).keys()].slice(1);

  console.log(`Component: Paginator`);

  return (
    <div
      className={`paginator ${theme === THEME.LIGHT ? "" : "dark-paginator"}`}
    >
      <ul
        className={`button-list ${
          theme === THEME.LIGHT ? "" : "dark-button-list"
        }`}
      >
        {pageNumbersArray.map((n) => {
          return (
            <li key={n}>
              <Button
                onClick={() => onClick(n)}
                name={n}
                style={
                  pageIndex === n
                    ? {
                        outline: "1px solid #ce4646",
                      }
                    : {}
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Paginator;
