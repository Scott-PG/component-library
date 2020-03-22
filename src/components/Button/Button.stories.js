import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

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
