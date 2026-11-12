import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Landmark, FileText, ChevronRight } from 'lucide-react';
import { LOAN_SERVICES, BUSINESS_INFO } from '../data/servicesData';
import { LoanCalculator } from './LoanCalculator';

interface ServiceLoansProps {
  onApplyLoan: (loanTitle: string, initialAmount?: string) => void;
}

export const ServiceLoans: React.FC<ServiceLoansProps> = ({ onApplyLoan }) => {
  return (
    <section id="loans" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span>Section 01</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Banking & Credit Facilitation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Loan Services in Kundrathur & Chennai
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We assist salaried employees, professionals, business owners, and MSMEs in getting quick approvals and lowest interest rates through leading public and private banks.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Call Loan Expert</span>
            </a>
            <button
              onClick={() => onApplyLoan('Loan Eligibility Enquiry')}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-all shadow-xs"
            >
              Check Loan Eligibility
            </button>
          </div>
        </div>

        {/* Feature Spotlight Banner with Generated Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-4/3 bg-slate-100">
            <img
              src="/src/assets/images/service_loans_finance_1794499114871.jpg"
              alt="Bank loan documentation and advisory desk at PKR Online Services"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md">
              <Landmark className="w-3.5 h-3.5" />
              <span>Multi-Bank Tie-Ups · Fast Track Sanctions</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Apply Through PKR Online Services?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Applying directly to a single bank may result in higher interest rates or rejection that dents your CIBIL score. At PKR Online Services, we evaluate your income profile against multiple lenders (SBI, HDFC, ICICI, Axis, Kotak, Sundaram Finance, Tata Capital, and reputed NBFCs) to secure maximum loan amount at lowest available EMIs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero advance / upfront commission</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Doorstep document collection in Kundrathur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Top-up loan facility on balance transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>High approval rates for MSMEs & traders</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LOAN_SERVICES.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-400 p-5 flex flex-col justify-between transition-all hover:shadow-md group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {loan.title}
                  </h4>
                  {loan.badge && (
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded shrink-0">
                      {loan.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {loan.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                    Key Features:
                  </div>
                  {loan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onApplyLoan(loan.title)}
                  className="w-full py-2 px-3 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-700 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{loan.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated EMI Calculator */}
        <LoanCalculator
          onApplyWithLoan={(amt, _tenure, type) => {
            onApplyLoan(type, amt);
          }}
        />

        {/* Document Checklist Accordion / Box */}
        <div className="bg-slate-100/80 rounded-xl p-5 border border-slate-200 text-xs text-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white text-blue-700 flex items-center justify-center shrink-0 shadow-2xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">Basic Documents Required for Loan Sanction:</span>
              <span className="text-slate-600">Aadhaar Card, PAN Card, Last 6 Months Bank Statement, 3 Months Salary Slips (Salaried) or 2 Years ITR / GST (Self-Employed).</span>
            </div>
          </div>
          <button
            onClick={() => onApplyLoan('Loan Eligibility Enquiry')}
            className="shrink-0 text-blue-700 font-bold hover:underline"
          >
            Ask Document Queries →
          </button>
        </div>
      </div>
    </section>
  );
};
