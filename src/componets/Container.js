import React from "react";

const Container = ({titulo}) => {
  return (
    <div className="card m-2">
      <div className="card-header">
        <h3 className="card-title">{titulo}</h3>
      </div>
      <div className="card-body">Start creating your amazing application!</div>
      {/* /.card-body */}
    </div>
  );
};

export default Container;
