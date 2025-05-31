import { useEffect } from "react";

export function ChatbaseBubble() {
  useEffect(() => {
    if (document.getElementById("8y_zpZyNV7qlCXDG1xDw0")) return;
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "8y_zpZyNV7qlCXDG1xDw0";
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);
  }, []);
  return null;
} 