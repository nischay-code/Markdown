import React, { useState } from "react";
import "./style.css";
import Markdown from "react-markdown";

const Markdownreact = () => {
  const [markdown, setMarkdown] = useState("Welcome to Markdown Editor");
  return (
    <>
      <div className="center-div">
        <textarea
          className="left-side"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <div className="right-side">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </>
  );
};

export default Markdownreact;
