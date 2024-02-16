import React, { useState } from 'react';
import './components.css'
function MarkdownEditor({value, onChange}) {

  const handleChange = (event) => {
    onChange(event.target.value);
    console.log(event.target.value);
  };

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
