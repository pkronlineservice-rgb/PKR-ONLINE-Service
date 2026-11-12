import React from 'react';
import { ShieldCheck, HeartPulse, Bike, Car, Building2, UserCheck, ChevronRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { INSURANCE_SERVICES, BUSINESS_INFO } from '../data/servicesData';

interface ServiceInsuranceProps {
  onGetQuote: (insuranceTitle: string) => void;
}

export const ServiceInsurance: React.FC<ServiceInsuranceProps> = ({ onGetQuote }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'life-insurance':
        return <UserCheck className="w-5 h-5 text-blue-700" />;
      case 'health-insurance':
        return <HeartPulse className="w-5 h-5 text-red-600" />;
      case 'two-wheeler-insurance':
        return <Bike className="w-5 h-5 text-orange-600" />;
      case 'car-insurance':
        return <Car className="w-5 h-5 text-indigo-600" />;
      case 'business-insurance':
        return <Building2 className="w-5 h-5 text-slate-700" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="insurance" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <span>Section 02</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Protection & Risk Management</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Insurance Services for You, Your Family & Business
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Protect what matters most. Instant digital insurance quotes, cashless hospital networks, zero inspection vehicle renewals, and end-to-end claim settlement assistance in Kundrathur.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hi PKR Online Services, I need an urgent insurance quote renewal.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Instant WhatsApp Quote</span>
            </a>
          </div>
        </div>

        {/* 6 Insurance Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSURANCE_SERVICES.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-orange-300 p-6 flex flex-col justify-between transition-all hover:shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getIcon(item.id)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-semibold text-orange-700 bg-orange-100/70 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Coverage Highlights:
                  </span>
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/80">
                <button
                  onClick={() => onGetQuote(item.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white hover:bg-orange-600 hover:text-white border border-slate-300 hover:border-orange-600 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>{item.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Claim Assurance Strip */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-orange-400">
              Claim Settlement Guidance
            </span>
            <h4 className="text-xl font-bold">
              Need assistance with an existing insurance claim in Chennai?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We stand by our clients during hospital emergencies and vehicle accident claims. Our team assists with TPA coordination, bill verification, and cashless liaison.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-blue-700" />
              <span>Call Claim Helpdesk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
