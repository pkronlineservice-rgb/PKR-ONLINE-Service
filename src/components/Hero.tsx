import React from 'react';
import { ArrowRight, Phone, MessageCircle, CheckCircle2, ShieldCheck, MapPin, Building, ShoppingBag, Utensils, BadgePercent } from 'lucide-react';
import { BUSINESS_INFO, TRUST_METRICS } from '../data/servicesData';

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regional Trust Kicker (no pill, clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-blue-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                Kundrathur, Chennai, Tamil Nadu
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">Official Service Hub</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-wider uppercase text-orange-600">
                Welcome to PKR Online Services
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Your One-Stop Solution for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">All Services</span> in Kundrathur
              </h1>
            </div>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Trusted online service and business support in Kundrathur. Your dependable local partner for competitive <strong>Personal & Business Loans</strong>, comprehensive <strong>Insurance</strong>, turnkey <strong>Amazon & Flipkart Seller Setup</strong>, and authentic homestyle <strong>PKR Cloud Kitchen</strong> food.
            </p>

            {/* Key Assurance Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Doorstep Consultation in Kundrathur & Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>20+ Reputed Public & Private Banks / NBFCs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent Process · No Hidden Advance Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Seller Onboarding & Daily Fresh Food</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onOpenConsultation()}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.98] rounded-xl shadow-md shadow-blue-700/20 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-sm whitespace-nowrap"
              >
                Contact Us
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Fast WhatsApp prompt */}
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                Need instant response?
              </span>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hello PKR Online Services, I would like to get a free consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-emerald-700 font-semibold underline underline-offset-2 flex items-center gap-1"
              >
                Chat with our Kundrathur advisor on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Visual Anchor + Quick Service Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              <img
                src="/src/assets/images/hero_pkr_services_1794499114119.jpg"
                alt="PKR Online Services customer consultation desk in Kundrathur Chennai"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none"></div>

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 space-y-1">
                  <div className="flex items-center justify-between text-xs text-orange-300 font-semibold uppercase tracking-wider">
                    <span>Authorized Support Desk</span>
                    <span>Kundrathur, Chennai</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    Direct assistance for all Bank Loans, Motor & Health Insurance, Amazon/Flipkart & Cloud Kitchen orders.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Fast-Action Service Jump Shortcuts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
              <a
                href="#loans"
                className="p-3 bg-white hover:bg-blue-50/60 rounded-xl border border-slate-200 transition-all hover:border-blue-300 group shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-1.5 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <Building className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Loans</div>
                <div className="text-[11px] text-slate-500">Personal & Home</div>
              </a>

              <a
                href="#insurance"
                className="p-3 bg-white hover:bg-orange-50/60 rounded-xl border border-slate-200 transition-all hover:border-orange-300 group shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center mb-1.5 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Insurance</div>
                <div className="text-[11px] text-slate-500">Health & Motor</div>
              </a>

              <a
                href="#ecommerce"
                className="p-3 bg-white hover:bg-emerald-50/60 rounded-xl border border-slate-200 transition-all hover:border-emerald-300 group shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">E-Commerce</div>
                <div className="text-[11px] text-slate-500">Amazon & Flipkart</div>
              </a>

              <a
                href="#cloud-kitchen"
                className="p-3 bg-white hover:bg-amber-50/60 rounded-xl border border-slate-200 transition-all hover:border-amber-300 group shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-1.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Utensils className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">PKR Kitchen</div>
                <div className="text-[11px] text-slate-500">Homestyle Meals</div>
              </a>
            </div>
          </div>
        </div>

        {/* Quantified Proof Metrics Row (adjacent to Hero claim) */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_METRICS.map((metric, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
