import React from 'react';
import {marked} from 'marked';

function LivePreview({ markdown }) {
  const html = marked.parse(markdown);
console.log(html);
  return (
    <div className="live-preview"  >
        {html}
        <div dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  );
}

export default LivePreview;
