import React from "react";
import Heading from "../../components/Header/Heading";
import { Outlet } from "react-router-dom";
import Main from "../../components/Main/Main";

const Defaultlayout = () => {
  return (
    <>
      <Heading />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Defaultlayout;
