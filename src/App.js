import React from "react";
import Header from "./components/Header";
import { Main } from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import ErrorBoundaries from "./components/miscellaneous/ErrorBoundaries";
import Error from "./components/miscellaneous/Error";
const App = () => {
  return (
    <div className="margin-container">
      <Header />
      {/* <ErrorBoundaries fallback={<Error />}> */}
      <Main />
      {/* </ErrorBoundaries> */}
      <Footer />
    </div>
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
