import React, { useContext } from "react";
import "./style/Footer.css";
import { THEME, ThemeConsumer, ThemeContext } from "./style/theme";
// import { ThemeConsumer, ThemeContext } from "./style/theme";
const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="footer">
          <p className={theme === THEME.LIGHT ? "text" : "dark"}>
            Double-click to edit a todo
          </p>
          <p className={theme === THEME.LIGHT ? "text" : "dark"}>
            Created by the TodoMVC Team
          </p>
          <p className={theme === THEME.LIGHT ? "text" : "dark"}>
            Part of <a href="https://todomvc.com/">TodoMVC</a>
          </p>
        </div>
      )}
    </ThemeConsumer>
  );
};
export default Footer; // export default class Footer extends React.Component {
//   render() {
//     return (
//       <ThemeConsumer>
//         {({ theme }) => (
//           <div className="footer">
//             <p style={{ color: theme.textColor, transition: "all 0.5s ease" }}>
//               Double-click to edit a todo
//             </p>
//             <p style={{ color: theme.textColor, transition: "all 0.5s ease" }}>
//               Created by the TodoMVC Team
//             </p>
//             <p style={{ color: theme.textColor, transition: "all 0.5s ease" }}>
//               Part of{" "}
//               <a
//                 style={{ color: theme.textColor, transition: "all 0.5s ease" }}
//                 href="https://todomvc.com/"
//               >
//                 TodoMVC
//               </a>
//             </p>
//           </div>
//         )}
//       </ThemeConsumer>
//     );
//   }
// }
// Footer.contextType = ThemeContext;
