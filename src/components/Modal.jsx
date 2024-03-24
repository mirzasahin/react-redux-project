import React from "react";

import { GrClose } from "react-icons/gr";
import Input from "./Input";

const Modal = ({ title }) => {
  const onChangeFunc = (e) => {};

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-blue-100 shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <GrClose size={24} />
        </div>
        <Input
          placeholder={"Ürün ekle"}
          name={"name"}
          id={"name"}
          onChange={onChangeFunc}
        />

        <Input
          placeholder={"Fiyat ekle"}
          name={"price"}
          id={"price"}
          onChange={onChangeFunc}
        />

        <Input
          placeholder={"Ürün ekle"}
          name={"name"}
          id={"name"}
          onChange={onChangeFunc}
        />
      </div>
    </div>
  );
};

export default Modal;
