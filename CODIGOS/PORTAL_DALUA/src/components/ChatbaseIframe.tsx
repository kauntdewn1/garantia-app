import React from "react";

const chatbaseUrl = import.meta.env.VITE_CHATBASE_IFRAME_URL;

export function ChatbaseIframe() {
  if (!chatbaseUrl) {
    return <div>Chat indisponível. Variável de ambiente não configurada.</div>;
  }
  return (
    <iframe
      src={chatbaseUrl}
      width="100%"
      style={{ height: "100%", minHeight: 700 }}
      frameBorder="0"
      title="Chatbase"
      allow="clipboard-write"
    />
  );
} 