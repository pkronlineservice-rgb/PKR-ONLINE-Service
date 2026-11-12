import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ShieldAlert, Heart, ChevronRight, Lock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface FooterProps {
  onOpenLegal: (type: 'disclaimer' | 'privacy' | 'terms') => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: About PKR Online Services (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                PKR
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                PKR <span className="text-blue-500">Online Services</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your Trusted Partner for Online Services, Loans, Insurance, E-Commerce & Food in Kundrathur, Chennai. Dedicated to empowering local families, traders, and entrepreneurs with transparent financial support, digital growth, and authentic homestyle cuisine.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="text-emerald-400">●</span>
              <span>Kundrathur Office Open 6 Days a Week</span>
            </div>
          </div>

          {/* Col 2: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Our Services
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#loans" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Personal, Business & Home Loans</span>
                </a>
              </li>
              <li>
                <a href="#loans" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Home Loan Balance Transfer</span>
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Health, Two-Wheeler & Car Insurance</span>
                </a>
              </li>
              <li>
                <a href="#ecommerce" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Amazon & Flipkart Seller Onboarding</span>
                </a>
              </li>
              <li>
                <a href="#cloud-kitchen" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>PKR Cloud Kitchen (Food & Tiffin)</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Loan Eligibility & EMI Calculator</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Contact Details
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Kundrathur, Chennai, Tamil Nadu – 600069, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-mono">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono"
                >
                  +91 {BUSINESS_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white truncate">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Admin Portal (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Transparency
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-white transition-colors text-left"
                >
                  Regulatory Disclaimer
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <Lock className="w-3 h-3 text-orange-400" />
                  <span>Admin Lead Tracker</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Card (Mandatory Section 9) */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Important Statutory & Regulatory Notice</span>
          </div>
          <p>
            Loan and insurance services are subject to eligibility, lender/insurer approval and applicable regulations. PKR Online Services acts only within its authorised scope as a business facilitator and referral partner. We do not claim, promise or guarantee loan sanctions or insurance policy approvals. All financial terms, interest rates, processing fees, and credit appraisals are determined solely by the respective financial institutions and insurers.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Location Note */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PKR Online Services, Kundrathur, Chennai. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-slate-300">Privacy</button>
            <span>·</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-slate-300">Terms</button>
            <span>·</span>
            <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-slate-300">Disclaimer</button>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Quick Action Bar (Under 15% Viewport Height) */}
      <div className="fixed sm:hidden bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-blue-700" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hi PKR Online Services, I want to enquire about your services.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#enquiry-form"
          className="flex-1 py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs flex items-center justify-center whitespace-nowrap"
        >
          <span>Enquire</span>
        </a>
      </div>
    </footer>
  );
};
