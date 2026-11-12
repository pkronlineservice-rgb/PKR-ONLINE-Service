import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface LoanCalculatorProps {
  onApplyWithLoan: (amount: string, tenure: string, type: string) => void;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onApplyWithLoan }) => {
  const [loanType, setLoanType] = useState<'Personal Loan' | 'Home Loan' | 'Business Loan' | 'Vehicle Loan'>('Home Loan');
  const [amount, setAmount] = useState<number>(2500000);
  const [rate, setRate] = useState<number>(8.75);
  const [tenureYears, setTenureYears] = useState<number>(20);

  // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = rate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate === 0
      ? amount / totalMonths
      : Math.round(
          (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - amount;

  const formatCurrency = (val: number) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  const handlePreset = (type: 'Personal Loan' | 'Home Loan' | 'Business Loan' | 'Vehicle Loan') => {
    setLoanType(type);
    if (type === 'Home Loan') {
      setAmount(3500000);
      setRate(8.5);
      setTenureYears(20);
    } else if (type === 'Personal Loan') {
      setAmount(500000);
      setRate(11.5);
      setTenureYears(4);
    } else if (type === 'Business Loan') {
      setAmount(1500000);
      setRate(13.0);
      setTenureYears(5);
    } else if (type === 'Vehicle Loan') {
      setAmount(800000);
      setRate(9.25);
      setTenureYears(5);
    }
  };

  return (
    <div id="calculator" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Smart Financial Tool</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Loan EMI & Eligibility Calculator
          </h3>
          <p className="text-sm text-slate-600">
            Estimate your monthly repayment and total interest before consulting our Kundrathur team.
          </p>
        </div>

        {/* Loan Type Selector */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
          {(['Home Loan', 'Personal Loan', 'Business Loan', 'Vehicle Loan'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handlePreset(type)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                loanType === type
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Sliders Area */}
        <div className="lg:col-span-7 space-y-6">
          {/* Amount Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label htmlFor="amount-slider" className="text-slate-700">Required Loan Amount</label>
              <span className="font-mono text-blue-700 text-base">{formatCurrency(amount)}</span>
            </div>
            <input
              id="amount-slider"
              type="range"
              min={50000}
              max={10000000}
              step={25000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>₹50,000</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label htmlFor="rate-slider" className="text-slate-700">Expected Interest Rate (% p.a.)</label>
              <span className="font-mono text-blue-700 text-base">{rate.toFixed(2)}%</span>
            </div>
            <input
              id="rate-slider"
              type="range"
              min={7.5}
              max={22}
              step={0.25}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>7.5% (Best Prime)</span>
              <span>12% (Standard)</span>
              <span>22% (Unsecured)</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label htmlFor="tenure-slider" className="text-slate-700">Loan Tenure (Years)</label>
              <span className="font-mono text-blue-700 text-base">{tenureYears} Years ({totalMonths} Months)</span>
            </div>
            <input
              id="tenure-slider"
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Calculation Summary Card */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Monthly EMI Repayment
              </div>
              <div className="text-3xl font-extrabold text-blue-800 font-mono mt-1 tabular-nums">
                {formatCurrency(emi)} <span className="text-xs font-sans font-normal text-slate-500">/ month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-slate-200/80">
                <span className="text-slate-500 block">Principal Amount</span>
                <span className="font-semibold text-slate-900 font-mono text-sm block mt-0.5">
                  {formatCurrency(amount)}
                </span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200/80">
                <span className="text-slate-500 block">Total Interest</span>
                <span className="font-semibold text-orange-700 font-mono text-sm block mt-0.5">
                  {formatCurrency(totalInterest)}
                </span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Total Amount Payable</span>
              <span className="font-bold text-slate-900 font-mono text-sm">
                {formatCurrency(totalPayment)}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => onApplyWithLoan(formatCurrency(amount), `${tenureYears} Years`, loanType)}
              className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.99] rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Apply for {formatCurrency(amount)} Loan Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-center text-slate-600">
              Final loan sanction & interest rate depends on bank credit policies and CIBIL score.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
