import React from "react";
import "./components.css";
import axios from "axios";
function MarkdownEditor({ value, onChange, setHTML }) {
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
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
    <div>
      <p>
        Enter markdown here
        </p>
      <textarea
        className="markdown-editor"
        value={value}
        onChange={handleChange}
        placeholder="Write your Markdown here..."
      />
    </div>
  );
}

export default MarkdownEditor;
