import React from "react";

const Loading = ({
  loading,
}) => {
  return (
    loading &&
    <div id={"loading"}>
      <div className={"spinner"}></div>
    </div>
  )
};

export default Loading;
