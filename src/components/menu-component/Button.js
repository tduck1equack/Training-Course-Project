import React from "react";
// import PropTypes from "prop-types";
import "../style/Button.css";
import { THEME, ThemeConsumer } from "../style/theme";
// import { ThemeConsumer, ThemeContext } from "../style/theme";
const Button = (props) => {
  const { name, onClick, special } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <button
          onClick={onClick}
          className={`${special} ${theme === THEME.LIGHT ? "" : "dark-button"}`}
          //   style={
          // style
          //   ? style
          //   : { backgroundColor: theme.button, transition: "all 0.5s ease" }
          //   }
        >
          {name}
        </button>
      )}
    </ThemeConsumer>
  );
};
export default Button;
// export default class Button extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { onClick, special, style, name } = this.props;
//     const { theme } = this.context;
//     return (
//       <ThemeConsumer>
//         {({ theme }) => (
//           <button
//             onClick={onClick}
//             className={special}
//             style={
//               style
//                 ? style
//                 : { backgroundColor: theme.button, transition: "all 0.5s ease" }
//             }
//           >
//             {name}
//           </button>
//         )}
//       </ThemeConsumer>
//     );
//   }
// }
// Button.propTypes = {
//   onClick: PropTypes.func,
//   name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   special: PropTypes.string,
//   style: PropTypes.object,
// };
// Button.defaultProps = {
//   name: "Button Sample",
// };
// Button.contextType = ThemeContext;
