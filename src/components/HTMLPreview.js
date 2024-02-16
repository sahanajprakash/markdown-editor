import React from "react";
import { CopyBlock, a11yDark } from "react-code-blocks";

function HTMLPreview({ html }) {
  return (
    <div className="html-preview">
      <CopyBlock
        text={html}
        language={"html"}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines
        theme={a11yDark}
      />
    </div>
  );
}

export default HTMLPreview;
