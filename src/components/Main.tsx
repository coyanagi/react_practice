import React from "react";
import { LABEL_MAIN } from '../constants';

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="px-10 py-5">
        <div className="mt-10">
          {LABEL_MAIN}
        </div>
      </div>
    </div>
  );
};
export default Main;
