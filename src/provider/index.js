import React, { useState } from "react";
import { ThemeContext } from "../service/helpers";

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      {children}
    </ThemeContext.Provider>
  );
};
