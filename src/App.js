import React, { useState } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import HTMLPreview from "./components/HTMLPreview";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  // const html = marked.parse(markdown);
  const [html, setHTML] = useState("");
  return (
    <div className="App">
      <div className="editor-container">
        <MarkdownEditor
          value={markdown}
          onChange={setMarkdown}
          setHTML={setHTML}
        />
        <HTMLPreview html={html} />
      </div>
      {html.length > 0 ? (
        <>
          <p className="header">Live component preview</p>
          <div className="preview-container">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
