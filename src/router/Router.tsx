import { ReactNode } from "react";
import Home from "../page/Home/Home";
import Game from "../layout/Game/Game";
import { Outlet } from "react-router-dom";
import Defaultlayout from "../layout/Default/Defaultlayout";
type TypeLayout = { type: "DEFAULT" } | { type: "GAME" } | undefined;
export interface Router {
  name: string;
  element: ReactNode;
  path: string;
  layout: TypeLayout;
}

export const routers: Router[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    layout: { type: "DEFAULT" },
  },
  {
    name: "Game",
    path: "/game",
    element: <Game />,
    layout: { type: "GAME" },
  },
];

export const Layout = ({ type }: { type?: TypeLayout }) => {
  switch (type?.type) {
    case "DEFAULT":
      return <Defaultlayout />;
    case "GAME":
      return <Game />;

    default:
      return (
        <>
          <Outlet />
        </>
      );
  }
};
