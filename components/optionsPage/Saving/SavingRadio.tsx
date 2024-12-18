import React from "react";
import { Radio } from "../Radio";
const settings = [
  {
    title: "Download Screenshot As",
    options: [
      { value: "JPG", label: "JPG" },
      { value: "PNG", label: "PNG" },
    ],
    defaultValue: "JPG",
  },
];
const SavingRadio = () => {
  return (
    <>
      {settings.map((setting) => (
        <Radio
          key={setting.title}
          title={setting.title}
          options={setting.options}
          defaultValue={setting.defaultValue}
        />
      ))}
    </>
  );
};

export default SavingRadio;
