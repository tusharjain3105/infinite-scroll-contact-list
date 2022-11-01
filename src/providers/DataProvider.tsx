import { createContext } from "preact";

export const DataContext = createContext(null);

export default ({ children }: any) => {

  const value = {
    fetchData : async (controller: AbortController) : Promise<JSON> => {
      const promise = await fetch('https://randomuser.me/api/?results=5', {signal: controller.signal})
      const data = await promise.json()
      return data.results
    }
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
