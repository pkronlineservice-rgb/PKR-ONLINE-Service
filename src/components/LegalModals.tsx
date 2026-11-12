import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  type: 'disclaimer' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            {type === 'disclaimer' && <ShieldAlert className="w-5 h-5 text-amber-600" />}
            {type === 'privacy' && <Lock className="w-5 h-5 text-blue-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-slate-700" />}
            <h3 className="text-base font-bold text-slate-900">
              {type === 'disclaimer' && 'Regulatory Disclaimer & Scope of Services'}
              {type === 'privacy' && 'Privacy Policy & Customer Data Protection'}
              {type === 'terms' && 'Terms and Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'disclaimer' && (
            <>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 font-medium">
                <strong>Statutory Notice:</strong> Loan and insurance services are subject to eligibility, lender/insurer approval, and applicable RBI/IRDAI regulations. PKR Online Services acts only within its authorised scope as a facilitation channel.
              </div>
              <p>
                <strong>No Guaranteed Approvals:</strong> PKR Online Services does not claim, promise, or assure guaranteed loan sanctions, specific interest rates, or insurance policy issuances. All credit sanctions, loan amounts, interest rates, and loan disbursals are strictly at the sole discretion of partner banks and Non-Banking Financial Companies (NBFCs) based on your credit appraisal, CIBIL score, and lender policies.
              </p>
              <p>
                <strong>Insurance Disclosures:</strong> Insurance policies are underwritten by IRDAI-registered insurance companies. Benefits, exclusions, deductibles, and claim settlements are strictly governed by the respective insurer's policy terms and conditions.
              </p>
              <p>
                <strong>Fees & Transactions:</strong> PKR Online Services does not collect unauthorized upfront cash payments or cash processing fees on behalf of banks.
              </p>
              <p>
                <strong>Trademarks:</strong> Amazon, Flipkart, bank names, and insurer trademarks mentioned on this website are the property of their respective owners and used only for identification and reference purposes.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                At <strong>PKR Online Services</strong>, we value the trust you place in us when sharing your personal information. This Privacy Policy details how we protect your contact and requirement details.
              </p>
              <p>
                <strong>Information Collection:</strong> When you submit an enquiry through our website or WhatsApp desk, we collect your Name, Mobile Number, WhatsApp Number, Email Address, City, and requirement details (such as desired loan amount or e-commerce goals).
              </p>
              <p>
                <strong>Usage of Information:</strong> The information you share is used exclusively to evaluate your service eligibility, follow up via phone/WhatsApp, and coordinate with appropriate lenders or service partners with your explicit consent.
              </p>
              <p>
                <strong>No Sale of Data:</strong> We never sell, rent, or trade your personal information to third-party telemarketers or unauthorized databases.
              </p>
              <p>
                <strong>Security:</strong> All customer data is maintained securely on encrypted systems accessible only to authorized personnel at PKR Online Services, Kundrathur.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By accessing or using the services provided by <strong>PKR Online Services</strong> (located in Kundrathur, Chennai, Tamil Nadu), you agree to these Terms and Conditions.
              </p>
              <p>
                <strong>1. Nature of Services:</strong> PKR Online Services operates as an independent service facilitator for loan guidance, insurance quotation, e-commerce marketplace onboarding (Amazon/Flipkart), and food delivery via PKR Cloud Kitchen.
              </p>
              <p>
                <strong>2. User Representation:</strong> You agree that all details, financial documents, and information provided by you in enquiry forms or direct consultations are true, accurate, and up-to-date.
              </p>
              <p>
                <strong>3. Food Orders & Deliveries:</strong> Food items from PKR Cloud Kitchen are freshly prepared upon confirmation. Delivery times may vary according to traffic, weather, or delivery distance within Kundrathur and surrounding Chennai areas.
              </p>
              <p>
                <strong>4. Jurisdiction:</strong> Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
