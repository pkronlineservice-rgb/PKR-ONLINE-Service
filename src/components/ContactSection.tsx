import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Mail, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Local Kundrathur Presence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact PKR Online Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Visit our office, give us a call, or send an enquiry. We are ready to assist you in Kundrathur and greater Chennai.
          </p>
        </div>

        {/* Contact Info Card & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
                  Registered Business Hub
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  PKR Online Services
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your Trusted Partner for Online Services, Loans, Insurance, E-Commerce & Food.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Office Address</span>
                    <span className="font-semibold text-slate-900 block mt-0.5">
                      Main Road, Kundrathur,
                    </span>
                    <span className="text-slate-600 block">
                      Chennai, Tamil Nadu – 600069, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Mobile Contact</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="font-bold text-slate-900 hover:text-blue-700 font-mono text-base block mt-0.5"
                    >
                      +91 {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">WhatsApp Desk</span>
                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline font-mono text-sm block mt-0.5"
                    >
                      +91 {BUSINESS_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email Address</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-medium text-slate-900 hover:text-blue-700 text-xs block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Working Hours</span>
                    <span className="font-medium text-slate-800 text-xs block mt-0.5">
                      {BUSINESS_INFO.timing}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Explicit Required Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hi PKR Online Services, I would like to get more information about your services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Now</span>
                </a>
              </div>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-slate-800 hover:text-blue-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-700" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Local Landmarks */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold">Kundrathur, Chennai Location Map</span>
              </div>
              <span className="text-[11px] text-slate-400">Tamil Nadu, India</span>
            </div>

            {/* Embedded Google Maps View */}
            <div className="relative flex-1 min-h-[340px] bg-slate-100">
              <iframe
                title="PKR Online Services Kundrathur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31097.351726057367!2d80.08183181829676!3d12.997787494639904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52601736e4f351%3A0xc154c1beaece2ba9!2sKundrathur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Serving Kundrathur, Porur, Mangadu, Poonamallee & Chennai West
              </span>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline flex items-center gap-1"
              >
                Open in Full Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
