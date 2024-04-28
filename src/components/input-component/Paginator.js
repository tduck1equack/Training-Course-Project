import React from "react";
import Button from "../menu-component/Button";
// import PropTypes from "prop-types";

import "../style/Paginator.css";
import { THEME, ThemeConsumer } from "../style/theme";
const Paginator = (props) => {
  const { pageNumbers, onClick, pageIndex } = props;
  const pageNumbersArray = [...Array(pageNumbers + 1).keys()].slice(1);
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div
          className={`paginator ${
            theme === THEME.LIGHT ? "" : "dark-paginator"
          }`}
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
      )}
    </ThemeConsumer>
  );
};
export default Paginator;
// export default class Paginator extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { pageNumbers, onClick, pageIndex, view } = this.props;
//     return (
//       <div className="paginator">
//         <ul className="button-list">
//           {pageNumbers.map((n) => {
//             return (
//               <li key={n}>
//                 <Button
//                   onClick={() => onClick(n, view)}
//                   name={n}
//                   style={
//                     pageIndex === n
//                       ? {
//                           outline: "1px solid #ce4646",
//                         }
//                       : {}
//                   }
//                 />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// Paginator.propTypes = {
//   pageNumbers: PropTypes.array,
//   pageIndex: PropTypes.number,
//   onClick: PropTypes.func,
// };
