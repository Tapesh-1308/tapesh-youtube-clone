import { createContext, useState } from "react";

export const LiveChatContext = createContext();

const LiveChatContextProvider = ({ children }) => {
  const [liveChat, setLiveChat] = useState({messages: [
    {
      name: "Tapesh Dua",
      text: "Amazing Website"
    }
  ]});

  return <LiveChatContext.Provider value={{
    liveChat, setLiveChat
  }}>{children}</LiveChatContext.Provider>
}

export default LiveChatContextProvider;