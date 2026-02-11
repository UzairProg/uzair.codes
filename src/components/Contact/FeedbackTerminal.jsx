import React, { useState } from 'react';

const FeedbackTerminal = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("sending");

    try {
      // Replace with your actual MongoDB API route
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message,
          timestamp: new Date(),
          location: "Contact Page" 
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setMessage("");
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full font-mono">
      {/* Terminal Window */}
      <div className="bg-[#0d1117]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        
        {/* Top Bar (Mac Style) */}
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/30">Uzair.sh</span>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-3 text-green-400">
            <span className="shrink-0">uzair.codes:</span>
            <div className="flex-1">
              <p className="text-white/60 mb-4 italic">
                // Leave a message for the database...
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your feedback or just say hello..."
                  className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/10 resize-none h-32 leading-relaxed"
                  spellCheck="false"
                />

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="text-[10px] text-white/20">
                    {message.length} chars | UTF-8
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === "sending" || !message.trim()}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${
                      status === "success" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                        : "bg-white/5 hover:bg-white/10 text-white/70 border border-white/10"
                    }`}
                  >
                    {status === "idle" && "RUN: push_message"}
                    {status === "sending" && "TRANSMITTING..."}
                    {status === "success" && "DEPLOYED SUCCESSFULLY ✅"}
                    {status === "error" && "ERROR: SHUTDOWN_FAILURE"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTerminal;