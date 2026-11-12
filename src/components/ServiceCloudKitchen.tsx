import React, { useState } from 'react';
import { Utensils, MessageCircle, Clock, Sparkles, Coffee, Heart, Check, ChevronRight, X } from 'lucide-react';
import { CLOUD_KITCHEN_MENU, BUSINESS_INFO } from '../data/servicesData';
import { MenuItem } from '../types';

interface ServiceCloudKitchenProps {
  onOrderFoodEnquiry: (serviceName: string) => void;
}

export const ServiceCloudKitchen: React.FC<ServiceCloudKitchenProps> = ({ onOrderFoodEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFullMenuModal, setShowFullMenuModal] = useState<boolean>(false);

  const categories = [
    { key: 'all', label: 'All Items' },
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'lunch', label: 'Lunch Meals' },
    { key: 'dinner', label: 'Dinner' },
    { key: 'breads', label: 'Chapati & Dosa' },
    { key: 'rice', label: 'Rice Varieties' },
    { key: 'juices', label: 'Fresh Juices' },
    { key: 'healthy', label: 'Healthy Mix' },
    { key: 'pickles', label: 'Pickles & Podi' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? CLOUD_KITCHEN_MENU
    : CLOUD_KITCHEN_MENU.filter(item => {
        if (selectedCategory === 'breakfast') return item.category === 'breakfast';
        if (selectedCategory === 'lunch') return item.category === 'lunch';
        if (selectedCategory === 'dinner') return item.category === 'dinner';
        if (selectedCategory === 'breads') return item.category === 'breads';
        if (selectedCategory === 'rice') return item.category === 'rice';
        if (selectedCategory === 'juices') return item.category === 'juices';
        if (selectedCategory === 'healthy') return item.category === 'healthy';
        if (selectedCategory === 'pickles') return item.category === 'pickles';
        return true;
      });

  const getWhatsAppOrderUrl = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hello PKR Cloud Kitchen (Kundrathur),\n` +
      `I would like to order: *${item.name}* (${item.price || 'Special'}).\n` +
      `Please let me know availability and delivery time.`
    );
    return `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="cloud-kitchen" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <span>Section 04</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Authentic Homestyle Cuisine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              PKR Cloud Kitchen – Kundrathur, Chennai
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Delicious, pure, hygienic South Indian meals prepared with traditional homestyle recipes, pure ghee, and unadulterated cold-pressed oils. Available for daily dining, corporate meal boxes, and festive gatherings.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowFullMenuModal(true)}
              className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs"
            >
              View Full Menu Card
            </button>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hello PKR Cloud Kitchen, I want to order food today.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOrderFoodEnquiry('Cloud Kitchen')}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-all shadow-xs"
            >
              Food Ordering Enquiry
            </button>
          </div>
        </div>

        {/* Feature Spotlight with Generated Culinary Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-amber-50/40 rounded-2xl p-6 sm:p-8 border border-amber-200/60 shadow-xs">
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-4/3 bg-slate-100">
            <img
              src="/src/assets/images/service_cloud_kitchen_1794499115216.jpg"
              alt="Authentic South Indian breakfast and lunch meals from PKR Cloud Kitchen"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Homestyle · No Artificial Colors · Pure Ingredients</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Fresh Daily Breakfast, Lunch & Dinner in Kundrathur
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              PKR Cloud Kitchen provides fresh homestyle food that feels like it came from your family's stove. We cater to daily office professionals, families, seniors, and special ceremonies across Kundrathur, Porur, Mangadu, and Poonamallee.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Steaming Idli, Ghee Pongal, Crispy Dosa & Vada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full South Indian Lunch Meals & Rice Varieties</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Soft Whole Wheat Chapatis & Homestyle Kurma</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pure Fresh Fruit Juices, Health Mix & Grandma Pickles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h4>
                    {item.tamilName && (
                      <span className="text-xs text-amber-800 font-medium block">
                        {item.tamilName}
                      </span>
                    )}
                  </div>
                  {item.price && (
                    <span className="text-sm font-extrabold text-slate-900 font-mono bg-slate-100 px-2 py-0.5 rounded shrink-0">
                      {item.price}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.timing && (
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Serving Time: {item.timing}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={getWhatsAppOrderUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Catering & Healthy Products Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Bulk Orders & Healthy Products
            </span>
            <h4 className="text-xl font-bold">
              Planning a Birthday, Family Pooja, or Corporate Meeting in Kundrathur?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Order customized tiffin boxes, lunch meal packets, fresh juices, and homemade Sathu Maavu (Health Mix) packs in bulk. Pre-booking available with doorstep delivery.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onOrderFoodEnquiry('Cloud Kitchen')}
              className="px-5 py-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap"
            >
              Enquire for Bulk Order
            </button>
          </div>
        </div>
      </div>

      {/* Full Menu Modal */}
      {showFullMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-amber-50">
              <div>
                <h3 className="text-lg font-bold text-slate-900">PKR Cloud Kitchen Menu Card</h3>
                <p className="text-xs text-slate-600">Kundrathur, Chennai · Call / WhatsApp: {BUSINESS_INFO.phone}</p>
              </div>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CLOUD_KITCHEN_MENU.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                      <span className="font-mono text-xs font-bold text-amber-700">{item.price}</span>
                    </div>
                    {item.tamilName && <span className="text-[11px] text-amber-800 block">{item.tamilName}</span>}
                    <p className="text-xs text-slate-600">{item.description}</p>
                    <div className="pt-2">
                      <a
                        href={getWhatsAppOrderUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Order this item on WhatsApp →</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500">All prices inclusive of packing · Timely delivery</span>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
