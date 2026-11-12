import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceLoans } from './components/ServiceLoans';
import { ServiceInsurance } from './components/ServiceInsurance';
import { ServiceEcommerce } from './components/ServiceEcommerce';
import { ServiceCloudKitchen } from './components/ServiceCloudKitchen';
import { EnquiryForm } from './components/EnquiryForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminDashboard } from './components/AdminDashboard';
import { LegalModals } from './components/LegalModals';
import { TESTIMONIALS, BUSINESS_INFO } from './data/servicesData';
import { Quote, Star, Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Personal Loan');
  const [selectedLoanAmount, setSelectedLoanAmount] = useState<string>('');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  // Jump to enquiry form with pre-selected service
  const scrollToEnquiry = (service: string = 'Personal Loan', loanAmount: string = '') => {
    setSelectedService(service);
    if (loanAmount) {
      setSelectedLoanAmount(loanAmount);
    }
    const elem = document.getElementById('enquiry-form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenConsultation={(svc) => scrollToEnquiry(svc || 'Personal Loan')}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={(svc) => scrollToEnquiry(svc || 'Personal Loan')}
        />

        {/* 2. Loan Services */}
        <ServiceLoans
          onApplyLoan={(loanTitle, amt) => scrollToEnquiry(loanTitle, amt)}
        />

        {/* 3. Insurance Services */}
        <ServiceInsurance
          onGetQuote={(insuranceTitle) => scrollToEnquiry(`Insurance: ${insuranceTitle}`)}
        />

        {/* 4. E-Commerce Services */}
        <ServiceEcommerce
          onStartEcommerce={(serviceTitle) => scrollToEnquiry(`E-Commerce: ${serviceTitle}`)}
        />

        {/* 5. PKR Cloud Kitchen */}
        <ServiceCloudKitchen
          onOrderFoodEnquiry={(svc) => scrollToEnquiry(svc)}
        />

        {/* 6. Client Stories & Kundrathur Testimonials */}
        <section className="py-16 sm:py-20 bg-slate-100/60 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 block">
                Local Client Reviews
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Trusted by Families & Businesses in Kundrathur
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Real feedback from clients who simplified their finances, launched digital stores, or enjoy our homestyle food.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testi, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                      "{testi.text}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="font-bold text-slate-900 text-sm block">{testi.name}</span>
                    <span className="text-xs text-slate-500 block">{testi.role}</span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1.5 inline-block">
                      {testi.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Partner Strip */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Nationalised & Private Banks</span>
              <span>·</span>
              <span>Leading NBFCs</span>
              <span>·</span>
              <span>IRDAI Registered Insurers</span>
              <span>·</span>
              <span>Amazon India SPN</span>
              <span>·</span>
              <span>Flipkart Verified Partner</span>
            </div>
          </div>
        </section>

        {/* 7. Free Lead Generation Enquiry Form */}
        <EnquiryForm
          initialService={selectedService}
          initialLoanAmount={selectedLoanAmount}
          onEnquirySubmitted={(lead) => {
            console.log('Lead submitted:', lead);
          }}
        />

        {/* 8. Contact Us Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Legal & Regulatory Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
