import React from "react";

const CodeEditor = ({ setEditedCode }) => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center mt-5">
          <h3>Code editor</h3>
        </div>
        <div className="m-5">
          <textarea
            className="h-[600px] w-full bg-gray-500 p-4 rounded text-white mt-7"
            onChange={(e) => setEditedCode(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
