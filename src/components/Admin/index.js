import React from "react";
import InfoTable from "../Core/InfoTable/InfoTable";
import { withFirebase } from "../Firebase";

const Admin = (props) => {
  return (
    <div className="flex-grow bg-base-200 p-16 bg-blue-100">
      <InfoTable {...props} />
    </div>
  );
};

export default withFirebase(Admin);
