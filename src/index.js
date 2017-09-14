import React from "react";
import { render } from "react-dom";
import Radium, { Style } from "radium";

import KnockoutText from "react-svg-knockout-text";

const styles = {
  container: {
    backgroundSize: "cover",
    backgroundImage: "url(http://brokensquare.com/Code/assets/landscape.jpg)",
    padding: "20% 20%"
  }
};

const App = Radium(() =>
  <div>
    <div style={styles.container}>
      <Knockout style={{}} text={"VERY INSPIRATION"} />
    </div>
  </div>
);

render(
  <div>
    <App />
    <Style
      rules={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box"
        }
      }}
    />
  </div>,
  document.getElementById("root")
);
