import React, { FC, ReactElement, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import data from "./data";
import { Comment } from "./Comment";

const App: FC = (): ReactElement => {
  const [comments, setComments] = useState(data);

  return (
    <>
      <div className="container-fluid mt-auto">
        <h2 className="h2 text-center my-4 text-light"> COMMENTIFY </h2>
        <Comment comments={comments} />
      </div>
    </>
  );
};

export default App;
