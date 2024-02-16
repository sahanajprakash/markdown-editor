import React, { useState } from 'react';

function MarkdownEditor({value, onChange}) {

  const handleChange = (event) => {
    onChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="markdown-editor">
      <textarea
      rows={50}
      cols={50}
        value={value}
        onChange={handleChange}
        placeholder="Write your Markdown here..."
      />
    </div>
  );
}

export default MarkdownEditor;
