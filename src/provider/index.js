import React, { useState, useEffect } from "react";
import { ThemeContext, _getCookie } from "../service/helpers";
import useAxios from "axios-hooks";
import { Notification, Spinner } from "../components/common";

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [{ data, loading, error }] = useAxios({
    url: "/logged-in",
    method: "GET",
  });

  useEffect(() => {
    const session = _getCookie('session')

    if (!loading && (data || session)) {
      setUser(data || session)
    }
  }, [data, loading]);

  useEffect(() => {
    if (error) Notification.error({ message: error.message });
  }, [error]);

  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      {loading ? <Spinner /> : children}
    </ThemeContext.Provider>
  );
};
