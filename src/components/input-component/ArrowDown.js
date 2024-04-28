import React from "react";
import "../style/ArrowDown.css";
const ArrowDown = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute-container">
      <div className="down-button">
        <input type="checkbox" onClick={onClick} />
      </div>
    </div>
  );
};
export default ArrowDown;
// export default class ArrowDown extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="absolute-container">
//         <div className="down-button">
//           <input type="checkbox" onClick={this.props.onClick} />
//         </div>
//       </div>
//     );
//   }
// }
