import React, { useState } from 'react';
import { supabase } from '../../db/supabaseClient.js';
const FeedbackCard = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  const { error } = await supabase
    .from('feedback')
    .insert([
      { 
        name: formData.name, 
        email: formData.email, 
        message: formData.message 
      }
    ]);

  if (error) {
    console.error('Error inserting:', error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 3000);
  } else {
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  }
};

  return (
    <div className="w-full bg-[#080808] border border-white/5 rounded-2xl p-6 shadow-2xl">
      <p className="text-sm text-white/80 font-medium mb-4">Send a message</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Row 1: Name & Email side by side */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 group">
            <label className="text-[10px] text-neutral-500 uppercase tracking-widest ml-1">Name</label>
            <input
              type="text"
              required
              placeholder="Uzair"
              value={formData.name}
              className="w-full bg-transparent border-b border-white/10 py-2 px-1 text-sm text-white outline-none focus:border-white/40 transition-colors placeholder:text-neutral-800"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="flex-1 group">
            <label className="text-[10px] text-neutral-500 uppercase tracking-widest ml-1">Email</label>
            <input
              type="email"
              required
              placeholder="hello@uzair.codes"
              value={formData.email}
              className="w-full bg-transparent border-b border-white/10 py-2 px-1 text-sm text-white outline-none focus:border-white/40 transition-colors placeholder:text-neutral-800"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        {/* Row 2: Message */}
        <div className="group">
          <label className="text-[10px] text-neutral-500 uppercase tracking-widest ml-1">Message</label>
          <textarea
            required
            value={formData.message}
            placeholder="Role, team, or project you have in mind…"
            className="w-full bg-transparent border-b border-white/10 py-2 px-1 text-sm text-white outline-none focus:border-white/40 transition-colors resize-none h-20 placeholder:text-white/20"
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        {/* Action Row */}
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between pt-2">
          <div className="text-sm text-neutral-600 font-mono">
            {status === "success" ? "Sent. I'll get back to you soon." : "STATUS: READY"}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="px-8 py-3 bg-white/60 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-neutral-200/90 transition-all active:scale-95 disabled:bg-neutral-700"
            style={{backgroundColor: status==="sending" ? "green" : ""}}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackCard;