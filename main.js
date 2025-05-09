import { React } from "./React.js";
import { render } from "./React-Dom.js";

const fruits = ["apple", "mango"];
const div = (
  <div className="div-class">
    {"Hello"} {"world"}
    <p title="paragraph">new paragraph</p>
    <p title="number">{49}</p>
    <p>{["a", "b", "c"]}</p>
    <ul>
      {fruits.map(function (fruit) {
        return <li className="fruit">{fruit}</li>;
      })}
    </ul>
  </div>
);
function Component(props) {
  const { name } = props;
  return (
    <div className="component-container">
      <p className="paragraph">i am a component</p>
      <ul>
        {fruits.map(function (fruit) {
          return <li className="fruit">{fruit}</li>;
        })}
      </ul>
    </div>
  );
}
render(<Component name="demoComponent" />, document.getElementById("root"));
