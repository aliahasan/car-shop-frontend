import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2  sm:px-2">{children}</div>
  );
};

export default Container;
