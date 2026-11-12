import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Lock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-orange-400">Kundrathur, Chennai</span>
            <span className="text-slate-500">|</span>
            <span className="truncate text-slate-300">Fast Loans, Insurance, E-Commerce Setup & PKR Cloud Kitchen</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-300">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-medium">{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs transition-colors"
              title="Admin Lead Management"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark, display face) */}
        <a href="#" className="flex items-center gap-2 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white font-bold flex items-center justify-center text-base shadow-sm ring-1 ring-blue-500/20 group-hover:scale-105 transition-transform">
            PKR
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            PKR <span className="text-blue-700">Online Services</span>
          </span>
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#loans" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Loan Services
          </a>
          <a href="#insurance" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Insurance
          </a>
          <a href="#ecommerce" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            E-Commerce
          </a>
          <a href="#cloud-kitchen" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            PKR Kitchen
          </a>
          <a href="#calculator" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            EMI Calculator
          </a>
          <a href="#contact" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action + Direct Channels */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hi PKR Online Services, I would like to inquire about your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 rounded-lg hover:bg-emerald-100 transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenConsultation()}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:scale-[0.99] transition-all shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            Get Free Consultation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700 pb-3 border-b border-slate-100">
            <a
              href="#loans"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-700"
            >
              Loan Services (Personal, Business, Home, LAP)
            </a>
            <a
              href="#insurance"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-700"
            >
              Insurance Services (Life, Health, Motor)
            </a>
            <a
              href="#ecommerce"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-700"
            >
              E-Commerce (Amazon & Flipkart Seller Setup)
            </a>
            <a
              href="#cloud-kitchen"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-700"
            >
              PKR Cloud Kitchen (Homestyle Meals & Food)
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-700"
            >
              Loan EMI Calculator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-700"
            >
              Contact Kundrathur Office
            </a>
          </nav>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hi PKR Online Services, I would like to inquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              Authorized Service Assistance
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="text-blue-700 font-medium hover:underline"
            >
              Admin Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
