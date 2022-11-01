import AuthProvider from "./AuthProvider";
import DataProvider from "./DataProvider";

export default ({ children }: { children: any }) => {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  );
};
