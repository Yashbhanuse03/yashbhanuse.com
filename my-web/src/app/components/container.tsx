import React from "react";

const container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`max-w-4xl p-4 py-13 mx-auto shadow-md  rounded-lg ${className}`}>{children}</div>
  );
};

export default container;
