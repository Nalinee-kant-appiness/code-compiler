'use client'
import CodeCompiler from "@/components/codeCompiler";
import CodeEditor from "@/components/codeEditor";
import { useState } from "react";

export default function Home() {
  const [editedCode,setEditedCode]=useState("")
  
  return (
    <div className="w-full h-screen flex justify-between">
     <CodeEditor editedCode={editedCode} setEditedCode={setEditedCode}/>
     <CodeCompiler editedCode={editedCode}/>
    </div>
  );
}
