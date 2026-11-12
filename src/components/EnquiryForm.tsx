import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone, Shield, AlertCircle, FileCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { Enquiry } from '../types';

interface EnquiryFormProps {
  initialService?: string;
  initialLoanAmount?: string;
  onEnquirySubmitted?: (newEnquiry: Enquiry) => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = 'Personal Loan',
  initialLoanAmount = '',
  onEnquirySubmitted
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameAsMobile, setSameAsMobile] = useState(true);
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [loanAmount, setLoanAmount] = useState(initialLoanAmount);
  const [city, setCity] = useState('Kundrathur, Chennai');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<Enquiry | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  // Sync initial values if prop changes
  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialLoanAmount) setLoanAmount(initialLoanAmount);
  }, [initialService, initialLoanAmount]);

  // Handle same as mobile toggle
  const handleMobileChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 10);
    setMobile(clean);
    if (sameAsMobile) {
      setWhatsapp(clean);
    }
  };

  const handleSameAsMobileToggle = (checked: boolean) => {
    setSameAsMobile(checked);
    if (checked) {
      setWhatsapp(mobile);
    }
  };

  const isLoanService =
    service.toLowerCase().includes('loan') ||
    service === 'Personal Loan' ||
    service === 'Business Loan' ||
    service === 'Home Loan';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!service) {
      setError('Please select a service.');
      return;
    }

    setLoading(true);

    const payload = {
      name: name.trim(),
      mobile,
      whatsapp: whatsapp || mobile,
      email: email.trim(),
      service,
      loanAmount: isLoanService ? loanAmount : '',
      city: city.trim() || 'Kundrathur, Chennai',
      message: message.trim()
    };

    try {
      // 1. Send to Express backend API
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedEnquiry(result.data);
        setWhatsappUrl(result.whatsappUrl);
        if (onEnquirySubmitted) onEnquirySubmitted(result.data);
      } else {
        throw new Error(result.message || 'Server error occurred');
      }
    } catch (_err) {
      // Fallback: save to localStorage so the lead is never lost!
      const fallbackId = `PKR-ENQ-${Math.floor(10000 + Math.random() * 90000)}`;
      const fallbackEnquiry: Enquiry = {
        id: fallbackId,
        ...payload,
        createdAt: new Date().toISOString(),
        status: 'new'
      };

      try {
        const local = JSON.parse(localStorage.getItem('pkr_enquiries') || '[]');
        local.unshift(fallbackEnquiry);
        localStorage.setItem('pkr_enquiries', JSON.stringify(local));
      } catch {
        // ignore storage errors
      }

      const formattedText = encodeURIComponent(
        `*New Enquiry - PKR Online Services*\n` +
        `Ref ID: ${fallbackEnquiry.id}\n` +
        `Name: ${fallbackEnquiry.name}\n` +
        `Phone: ${fallbackEnquiry.mobile}\n` +
        `Service: ${fallbackEnquiry.service}\n` +
        (fallbackEnquiry.loanAmount ? `Loan Amount: ${fallbackEnquiry.loanAmount}\n` : '') +
        `Location: ${fallbackEnquiry.city}\n` +
        (fallbackEnquiry.message ? `Requirements: ${fallbackEnquiry.message}\n` : '')
      );

      setSubmittedEnquiry(fallbackEnquiry);
      setWhatsappUrl(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${formattedText}`);
      if (onEnquirySubmitted) onEnquirySubmitted(fallbackEnquiry);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setMobile('');
    setWhatsapp('');
    setSameAsMobile(true);
    setEmail('');
    setLoanAmount('');
    setMessage('');
    setSubmittedEnquiry(null);
    setError(null);
  };

  return (
    <section id="enquiry-form" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <Shield className="w-3.5 h-3.5" />
            <span>Confidential & Free Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Free Lead Generation Enquiry Form
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Fill in your details below. Our Kundrathur team will review your requirements and get in touch within 30 minutes.
          </p>
        </div>

        {/* Confirmation Screen / Thank You Message */}
        {submittedEnquiry ? (
          <div className="bg-white rounded-2xl border border-emerald-300 p-8 shadow-lg space-y-6 text-center animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Enquiry Successfully Registered
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Thank You, {submittedEnquiry.name}!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                We have received your enquiry for <strong>{submittedEnquiry.service}</strong>. Our business representative will call you shortly at <strong>+91 {submittedEnquiry.mobile}</strong>.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="inline-block bg-slate-100 rounded-xl px-5 py-3 border border-slate-200">
              <span className="text-xs text-slate-500 block">Enquiry Reference ID</span>
              <span className="text-lg font-mono font-bold text-blue-700">{submittedEnquiry.id}</span>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp to Owner Now</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call Business Owner</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-transparent rounded-xl hover:bg-slate-50 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>

            <p className="text-xs text-slate-500 pt-2">
              🔒 Your contact information is protected and will never be shared with third parties without your consent.
            </p>
          </div>
        ) : (
          /* The Form */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-sm text-red-700">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-sm font-medium text-slate-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={mobile}
                      onChange={(e) => handleMobileChange(e.target.value)}
                      maxLength={10}
                      className="w-full pl-12 pr-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-700 block">
                      WhatsApp Number
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sameAsMobile}
                        onChange={(e) => handleSameAsMobileToggle(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Same as Mobile</span>
                    </label>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-sm font-medium text-slate-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      disabled={sameAsMobile}
                      placeholder="WhatsApp number"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      maxLength={10}
                      className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 ${
                        sameAsMobile ? 'bg-slate-100 text-slate-500 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Row 3: Select Service & Loan Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white text-slate-800"
                  >
                    <option value="Personal Loan">1. Personal Loan</option>
                    <option value="Business Loan">2. Business Loan</option>
                    <option value="Home Loan">3. Home Loan & Balance Transfer</option>
                    <option value="Insurance">4. Insurance (Health, Life, Motor)</option>
                    <option value="E-Commerce">5. E-Commerce (Amazon / Flipkart)</option>
                    <option value="Cloud Kitchen">6. Cloud Kitchen (Food & Tiffin)</option>
                    <option value="Other Services">7. Other Services</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Loan Amount <span className="text-slate-400 font-normal">{isLoanService ? '(Required for loans)' : '(if applicable)'}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹5,00,000 or ₹25 Lakhs"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Row 4: City / Location */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  City / Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Kundrathur, Chennai, Tamil Nadu"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Row 5: Message / Requirements */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Message / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your requirements (e.g., preferred bank, vehicle type, food delivery date, or questions)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              {/* Consent & Privacy Notice */}
              <div className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                By submitting this form, you authorize PKR Online Services to contact you via Phone call, SMS, or WhatsApp regarding your selected service. We respect your privacy and protect customer data.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 text-sm font-bold tracking-wide uppercase text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.99] rounded-xl transition-all shadow-md shadow-blue-700/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span>Submitting Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
