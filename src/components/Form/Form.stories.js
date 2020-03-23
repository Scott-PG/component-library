import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";
import TextInput from "./TextInput";
import Select from "./Select";

const testChoiceArray = [
  {
    selector: "select-1",
    name: "Choice 1"
  },
  {
    selector: "select-2",
    name: "Choice 2"
  },
  {
    selector: "select-3",
    name: "Choice 3"
  },
  {
    selector: "select-4",
    name: "Choice 4"
  }
];

storiesOf("Text Input", module)
  .add("Text Input Small", () => (
    <TextInput
      type={"text-input-small"}
      label={"Email"}
      placeholder={"Email"}
    />
  ))
  .add("Text Input Medium", () => (
    <TextInput
      type={"text-input-medium"}
      label={"Email"}
      placeholder={"Email"}
    />
  ))
  .add("Text Input Large", () => (
    <TextInput
      type={"text-input-large"}
      label={"Email"}
      placeholder={"Email"}
    />
  ))
  .add("Text Input Small No Label", () => (
    <TextInput type={"text-input-small"} label={""} placeholder={"Email"} />
  ))
  .add("Text Input Medium No Label", () => (
    <TextInput type={"text-input-medium"} label={""} placeholder={"Email"} />
  ))
  .add("Text Input Large No Label", () => (
    <TextInput type={"text-input-large"} label={""} placeholder={"Email"} />
  ));

storiesOf("Select", module)
  .add("Select Small Outlined", () => (
    <Select
      type="s-small s-outline"
      choiceArray={testChoiceArray}
      initial={"Select"}
    />
  ))
  .add("Select Medium Outlined", () => (
    <Select
      type="s-medium s-outline"
      choiceArray={testChoiceArray}
      initial={"Select"}
    />
  ))
  .add("Select Large Outlined", () => (
    <Select
      type="s-large s-outline"
      choiceArray={testChoiceArray}
      initial={"Select"}
    />
  ))
  .add("Select Small Filled", () => (
    <Select
      type="s-small s-filled"
      choiceArray={testChoiceArray}
      initial={"Select"}
    />
  ))
  .add("Select Medium Filled", () => (
    <Select
      type="s-medium s-filled"
      choiceArray={testChoiceArray}
      initial={"Select"}
    />
  ))
  .add("Select Large Filled", () => (
    <Select
      type="s-large s-filled"
      choiceArray={testChoiceArray}
      initial={"Select"}
    />
  ));

storiesOf("Counter", module).add("Counter", () => (
  <Counter step={1} startValue={0} min={0} max={20} />
));
