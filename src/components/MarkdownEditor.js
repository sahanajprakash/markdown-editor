import React, { useState } from "react";
import "./components.css";
import axios from "axios";
function MarkdownEditor({ value, onChange, setHTML }) {
  function handleChange(event) {
    onChange(event.target.value);
    convertMarkdown(event.target.value);
  }

  async function convertMarkdown(markdown) {
    try {
      const response = await axios.post("http://localhost:3000/convert", {
        markdown: markdown,
      });
      setHTML(response.data);
    } catch (error) {
      console.error("Error converting markdown:", error);
    }
  }

  return (
    // <div >
    <textarea
      className="markdown-editor"
      //   rows={40}
      //   cols={50}
      value={value}
      onChange={handleChange}
      placeholder="Write your Markdown here..."
    />
    // </div>
  );
}

export default MarkdownEditor;
