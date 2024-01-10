"use client";
import React, { useState } from "react";
import axios from "axios";
const CodeCompiler = ({ editedCode }) => {
  const [compilerOutput, setCompilerOutput] = useState("");
  const excuteCode = async () => {
    try {
      const payload = {
        language: "python3",
        version: "latest",
        code: `${editedCode}`,
        input: null,
      };

      const response = await axios.post("http://localhost:8080/", payload);
      setCompilerOutput(response?.data?.output);
    } catch (err) {
      setCompilerOutput('');
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-1 ">
        <div className="flex justify-center mt-5">
          <h3>CodeCompiler</h3>
        </div>
        <div className="flex justify-end mr-5">
          <button
            onClick={excuteCode}
            className="bg-slate-500 w-20 h-5 flex items-center justify-center rounded"
          >
            compile
          </button>
        </div>
        <div className="m-5">
          <textarea
            className="h-[300px] w-full bg-black rounded text-white p-4 "
            
            value={compilerOutput}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default CodeCompiler;
