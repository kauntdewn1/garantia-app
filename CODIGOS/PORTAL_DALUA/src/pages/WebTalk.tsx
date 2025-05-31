import React from "react";
import { ChatbaseIframe } from "../components/ChatbaseIframe";

const WebTalk: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100">
    <div className="w-full max-w-2xl mx-auto p-4">
      <ChatbaseIframe />
    </div>
  </div>
);

export default WebTalk; 