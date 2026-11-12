import React from 'react';
import { ShoppingCart, Image as ImageIcon, TrendingUp, Store, Award, ChevronRight, CheckCircle, Rocket, Layers } from 'lucide-react';
import { ECOMMERCE_SERVICES, BUSINESS_INFO } from '../data/servicesData';

interface ServiceEcommerceProps {
  onStartEcommerce: (serviceTitle: string) => void;
}

export const ServiceEcommerce: React.FC<ServiceEcommerceProps> = ({ onStartEcommerce }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'flipkart-seller-registration':
        return <Store className="w-5 h-5 text-blue-600" />;
      case 'amazon-seller-registration':
        return <ShoppingCart className="w-5 h-5 text-amber-600" />;
      case 'product-image-editing':
        return <ImageIcon className="w-5 h-5 text-indigo-600" />;
      case 'digital-marketing-support':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="ecommerce" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              <span>Section 03</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Digital Marketplace Growth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              E-Commerce Seller Registration & Growth Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Launch and scale your brand on India's biggest shopping platforms. We help manufacturers, retailers, wholesalers, and home-preneurs in Kundrathur and Chennai sell across India on Amazon and Flipkart.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onStartEcommerce('Online Business Setup')}
              className="px-5 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Launch Your Store Today</span>
            </button>
          </div>
        </div>

        {/* Feature Spotlight with Generated Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-4/3 bg-slate-100">
            <img
              src="/src/assets/images/service_ecommerce_growth_1794499116377.jpg"
              alt="E-commerce seller catalog and product photography studio in Chennai"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              <Award className="w-3.5 h-3.5" />
              <span>150+ Successful Seller Stores Launched</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              From Local Kundrathur Shop to All-India Seller
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You don't need technical skills or expensive agencies. PKR Online Services manages the entire onboarding process: GST/MSME guidance, bank account integration, Amazon Brand Registry, marketplace cataloging, white-background product photography, SEO keyword indexing, and shipping setup.
            </p>

            {/* 4-Step Seller Road Map */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-[11px] font-bold text-blue-700 block">Step 01</span>
                <span className="text-xs font-semibold text-slate-900">GST & Registration</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-[11px] font-bold text-blue-700 block">Step 02</span>
                <span className="text-xs font-semibold text-slate-900">Catalog & Photos</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-[11px] font-bold text-blue-700 block">Step 03</span>
                <span className="text-xs font-semibold text-slate-900">Live Inventory</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-[11px] font-bold text-blue-700 block">Step 04</span>
                <span className="text-xs font-semibold text-slate-900">Ads & First Orders</span>
              </div>
            </div>
          </div>
        </div>

        {/* 7 E-Commerce Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOMMERCE_SERVICES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-400 p-6 flex flex-col justify-between transition-all hover:shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    What We Deliver:
                  </span>
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onStartEcommerce(item.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{item.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
