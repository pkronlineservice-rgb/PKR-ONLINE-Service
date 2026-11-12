import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const quickMessages = [
    { label: 'Personal / Home Loan Enquiry', text: 'Hi PKR Online Services, I would like to enquire about a Personal / Home Loan.' },
    { label: 'Insurance Renewal / Quote', text: 'Hi PKR Online Services, I need an Insurance Quote for my vehicle / health.' },
    { label: 'Amazon / Flipkart Seller Setup', text: 'Hi PKR Online Services, I want to start selling on Flipkart and Amazon.' },
    { label: 'Order from PKR Cloud Kitchen', text: 'Hi PKR Cloud Kitchen, I want to order food in Kundrathur today.' }
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const message = customText.trim() || 'Hi PKR Online Services, I have an enquiry.';
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
    setCustomText('');
  };

  const handleSendQuick = (text: string) => {
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Quick Message Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 bg-emerald-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Chat with PKR Services</h4>
                <p className="text-[11px] text-emerald-100">Kundrathur, Chennai · +91 {BUSINESS_INFO.phone}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-emerald-100 hover:text-white rounded-lg hover:bg-emerald-700"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-50">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-xs text-slate-700 space-y-1">
              <span className="font-semibold text-slate-900 block">Vanakkam! How can we help you?</span>
              <p className="text-slate-500">
                Tap an option below or send your query directly to our WhatsApp helpdesk.
              </p>
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-1.5">
              {quickMessages.map((qm, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendQuick(qm.text)}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 rounded-xl border border-slate-200/70 hover:border-emerald-300 text-xs font-medium text-slate-800 transition-colors flex items-center justify-between group shadow-2xs"
                >
                  <span className="truncate group-hover:text-emerald-800">{qm.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-1 flex items-center gap-1.5">
              <input
                type="text"
                placeholder="Type your message..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:border-emerald-600 outline-none bg-white"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shrink-0 shadow-2xs"
                title="Send to WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus-visible:outline-2 focus-visible:outline-emerald-500 cursor-pointer"
        aria-label="Open WhatsApp Consultation"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};
