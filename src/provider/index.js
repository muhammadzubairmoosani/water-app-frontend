import React, { useState, useEffect } from "react";
import { ThemeContext } from "../service/helpers";
import useAxios from "axios-hooks";
import { Notification, Spinner } from "../components/common";

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [{ data, loading, error }] = useAxios({
    url: "https://pani-vala-server.herokuapp.com/logged-in",
    method: "GET",
  });

  useEffect(() => {
    if (data) return setUser(data);
    if (error) Notification.error({ message: error.message });
  }, [error, data]);

  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      {loading ? <Spinner /> : children}
    </ThemeContext.Provider>
  );
};
