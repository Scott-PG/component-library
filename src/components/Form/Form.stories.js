import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";

storiesOf("Counter", module).add("Counter", () => (
  <Counter step={2} startValue={0} min={-5} max={20} />
));
