import React, { useContext } from "react";
import Header from "./components/Header";
import { Main } from "./components/Main";
import Footer from "./components/Footer";
import { ThemeConsumer, ThemeContext } from "./components/style/theme";
import "./App.css";
const App = () => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="margin-container">
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </ThemeConsumer>
  );
};
export default App;
// class App extends React.Component {
//   render() {
//     return (
//       <ThemeConsumer>
//         {({ theme }) => (
//           <div
//             className="background"
//             style={{
//               backgroundColor: theme.background,
//               transition: "all 0.5s ease",
//             }}
//           >
//             <div className="margin-container">
//               <Header />
//               <Main />
//               <Footer />
//             </div>
//           </div>
//         )}
//       </ThemeConsumer>
//     );
//   }
// }
// App.contextType = ThemeContext;
// export default App;
