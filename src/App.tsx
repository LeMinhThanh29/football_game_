import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout, routers } from "./router/Router";

function App() {
  return (
    <div className="App">
      <Routes>
        {routers.map((router_value, router_index) => (
          <Route
            key={router_index}
            element={<Layout type={router_value.layout} />}
          >
            <Route path={router_value.path} element={router_value.element} />
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
