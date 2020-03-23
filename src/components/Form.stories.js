import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";
import TextInput from "./TextInput";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Button from "./Button";
import InputButton from "./InputButton";

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

storiesOf("Button", module)
  .add("Primary", () => <Button label="Do Something" type="btn-primary" />)
  .add("Primary Wireframe", () => (
    <Button label="Do Something" type="btn-primary-wireframe" />
  ))
  .add("Primary Faded", () => (
    <Button label="Do Something" type="btn-primary-faded" />
  ))
  .add("Primary Large", () => (
    <Button label="Do Something" type="btn-primary btn-large" />
  ))
  .add("Primary Wireframe Large", () => (
    <Button label="Do Something" type="btn-primary-wireframe btn-large" />
  ))
  .add("Primary Faded Large", () => (
    <Button label="Do Something" type="btn-primary-faded btn-large" />
  ))
  .add("Danger", () => <Button label="Do Something" type="btn-danger" />)
  .add("Danger Wireframe", () => (
    <Button label="Do Something" type="btn-danger-wireframe" />
  ))
  .add("Danger Faded", () => (
    <Button label="Do Something" type="btn-danger-faded" />
  ))
  .add("Danger Large", () => (
    <Button label="Do Something" type="btn-danger btn-large" />
  ))
  .add("Danger Wireframe Large", () => (
    <Button label="Do Something" type="btn-danger-wireframe btn-large" />
  ))
  .add("Danger Faded Large", () => (
    <Button label="Do Something" type="btn-danger-faded btn-large" />
  ))
  .add("Success", () => <Button label="Do Something" type="btn-success" />)
  .add("Success Wireframe", () => (
    <Button label="Do Something" type="btn-success-wireframe" />
  ))
  .add("Success Faded", () => (
    <Button label="Do Something" type="btn-success-faded" />
  ))
  .add("Success Large", () => (
    <Button label="Do Something" type="btn-success btn-large" />
  ))
  .add("Success Wireframe Large", () => (
    <Button label="Do Something" type="btn-success-wireframe btn-large" />
  ))
  .add("Success Faded Large", () => (
    <Button label="Do Something" type="btn-success-faded btn-large" />
  ))
  .add("Warning", () => <Button label="Do Something" type="btn-warning" />)
  .add("Warning Wireframe", () => (
    <Button label="Do Something" type="btn-warning-wireframe" />
  ))
  .add("Warning Faded", () => (
    <Button label="Do Something" type="btn-warning-faded" />
  ))
  .add("Warning Large", () => (
    <Button label="Do Something" type="btn-warning btn-large" />
  ))
  .add("Warning Wireframe Large", () => (
    <Button label="Do Something" type="btn-warning-wireframe btn-large" />
  ))
  .add("Warning Faded Large", () => (
    <Button label="Do Something" type="btn-warning-faded btn-large" />
  ))
  .add("Default", () => <Button label="Do Something" type="" />)
  .add("Default Wireframe", () => (
    <Button label="Do Something" type="btn-wireframe" />
  ))
  .add("Default Faded", () => <Button label="Do Something" type="btn-faded" />)
  .add("Default Large", () => <Button label="Do Something" type="btn-large" />)
  .add("Default Wireframe Large", () => (
    <Button label="Do Something" type="btn-wireframe btn-large" />
  ))
  .add("Default Faded Large", () => (
    <Button label="Do Something" type="btn-faded btn-large" />
  ));

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

storiesOf("Input Buttons", module)
  .add("Input Button Medium", () => (
    <InputButton
      labelButton="Redeem"
      typeButton="inpt-button-medium"
      placeholder={"Voucher code"}
      textType={"text-input-medium"}
    />
  ))
  .add("Input Button Large", () => (
    <InputButton
      labelButton="Redeem"
      typeButton="inpt-button-large"
      placeholder={"Voucher code"}
      textType={"text-input-large"}
    />
  ));

storiesOf("Counter", module).add("Counter", () => (
  <Counter step={1} startValue={0} min={0} max={20} />
));

storiesOf("Checkbox", module)
  .add("Checkbox 1", () => (
    <Checkbox checkStyle="checkmark" boxColor="ck-container" />
  ))
  .add("Checkbox 2", () => (
    <Checkbox checkStyle="checkmark-blue" boxColor="ck-container-blue" />
  ))
  .add("Checkbox 3", () => (
    <Checkbox
      checkStyle="checkmark"
      boxColor="ck-container"
      label="Don't show this popup again"
    />
  ));
