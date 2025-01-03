import React, { createContext, useContext, useEffect, useState } from "react";

type AppStateType = {
  currentLanguageCode: string;
  setLanguage: (language:string) => void;
};
const AppContext = createContext({} as AppStateType);

function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
type AppProviderProps = {
  children: React.ReactNode;
};
function AppProvider({ children }: AppProviderProps) {
  const [currentLanguageCode, setCurrentLanguageCode] = useState("en");
  useEffect(() => {
  }, []);
function setLanguage(language:string){
  setCurrentLanguageCode(language);
}
  return (
    <AppContext.Provider
      value={{
        currentLanguageCode,
        setLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, useAppContext };
