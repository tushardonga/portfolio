import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { drawerOpen, setHandleDrawer };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
