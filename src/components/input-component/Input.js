import React, { useContext, useState } from "react";
import "../style/Input.css";
import { THEME, ThemeConsumer, ThemeContext } from "../style/theme";
const Input = (props) => {
  const [value, setValue] = useState("");
  const { placeholder, inputRef, onSubmit } = props;
  const theme = useContext(ThemeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            ref={inputRef}
            className={theme === THEME.LIGHT ? "" : "dark-input"}
          ></input>
        </form>
      )}
    </ThemeConsumer>
  );
};
export default Input;
// import { ThemeConsumer, ThemeContext } from "../style/theme";
// export default class Input extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     input: "",
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { onSubmitHandler } = this.props;
//     const { input } = this.state;
//     onSubmitHandler(input);
//     this.setState({ input: "" });
//   };
//   handleInputChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       input: e.target.value,
//     });
//   };
//   render() {
//     const { placeholder, inputRef } = this.props;
//     const { input } = this.state;
//     const { theme } = this.context;
//     return (
//       <ThemeConsumer>
//         {({ theme }) => (
//
//         )}
//       </ThemeConsumer>
//     );
//   }
// }
// Input.contextType = ThemeContext;
