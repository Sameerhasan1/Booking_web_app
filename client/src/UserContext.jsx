import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        // const userData = response.data;
        setUser(data);
        setReady(true);
      });
    }
  }, []); // Include user as a dependency to prevent unnecessary requests

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
