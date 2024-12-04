import React from "react";
import MarkdownRenderer from "./components/MarkdownRenderer";

const App = () => {

  // Assign either streaming or non-streaming markdown content to this variable
 const markdownContent = ;

  return (
    <div className="App">
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export default App;
