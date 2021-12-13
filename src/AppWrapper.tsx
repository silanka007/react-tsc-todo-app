type appWrapperProps = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: appWrapperProps) => {
  return <div>{children}</div>;
};

export default AppWrapper;
