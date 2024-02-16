import React, { useState } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import HTMLPreview from "./components/HTMLPreview";
import "./App.css";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState("");
  const html = marked.parse(markdown);

  return (
    <div className="App">
      <div className="editor-container">
        <MarkdownEditor value={markdown} onChange={setMarkdown} />
        <HTMLPreview html={html} />
      </div>
      <div className="preview-container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export default App;
