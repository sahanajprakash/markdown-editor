import React, { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import HTMLPreview from './components/HTMLPreview';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="App">
      <MarkdownEditor value={markdown} onChange={setMarkdown} />
      <HTMLPreview markdown={markdown} />
    </div>
  );
}

export default App;
