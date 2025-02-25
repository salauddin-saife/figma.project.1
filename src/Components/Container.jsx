import React, { } from "react";

const Container = ({ children, Banner_class }) => {
  return (
    <div>
      <div className={`w-[1140px] mx-auto ${Banner_class}`}>
        <h1>{children}</h1>
      </div>
    </div>
  );
};

export default Container;
