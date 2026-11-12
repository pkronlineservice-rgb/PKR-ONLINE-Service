import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Search,
  Filter,
  Phone,
  MessageCircle,
  Download,
  Trash2,
  RefreshCw,
  Edit3,
  CheckCircle2,
  Clock,
  AlertCircle,
  ShieldAlert,
  Calendar,
  Layers,
  ChevronDown,
  UserCheck
} from 'lucide-react';
import { Enquiry } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('pkr_admin_auth') === 'true';
  });
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [editingNotes, setEditingNotes] = useState('');

  // Fetch leads
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        if (data.data) {
          setEnquiries(data.data);
          return;
        }
      }
    } catch {
      // fallback to localStorage
    }
    // Local storage fallback
    const local = JSON.parse(localStorage.getItem('pkr_enquiries') || '[]');
    setEnquiries(local);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      fetchLeads();
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (username === 'admin' && (password === 'pkr2026' || password === 'admin')) ||
      (username === '9043151680' && password === 'admin')
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem('pkr_admin_auth', 'true');
      setLoginError(null);
      fetchLeads();
    } else {
      setLoginError('Invalid username or password. Default is admin / pkr2026.');
    }
  };

  const handleQuickDemoLogin = () => {
    setUsername('admin');
    setPassword('pkr2026');
    setIsAuthenticated(true);
    sessionStorage.setItem('pkr_admin_auth', 'true');
    setLoginError(null);
    fetchLeads();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('pkr_admin_auth');
    setPassword('');
  };

  const handleStatusChange = async (id: string, newStatus: Enquiry['status']) => {
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch {
      // offline fallback
    }

    setEnquiries(prev =>
      prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
    );

    // update localStorage as well
    const local = JSON.parse(localStorage.getItem('pkr_enquiries') || '[]');
    const updated = local.map((item: Enquiry) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    localStorage.setItem('pkr_enquiries', JSON.stringify(updated));
  };

  const handleSaveNotes = async () => {
    if (!selectedEnquiry) return;
    try {
      await fetch(`/api/enquiries/${selectedEnquiry.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: editingNotes })
      });
    } catch {
      // offline
    }

    setEnquiries(prev =>
      prev.map(item =>
        item.id === selectedEnquiry.id ? { ...item, notes: editingNotes } : item
      )
    );
    setSelectedEnquiry(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enquiry record?')) return;
    try {
      await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
    } catch {
      // offline
    }
    setEnquiries(prev => prev.filter(item => item.id !== id));
    const local = JSON.parse(localStorage.getItem('pkr_enquiries') || '[]');
    const updated = local.filter((item: Enquiry) => item.id !== id);
    localStorage.setItem('pkr_enquiries', JSON.stringify(updated));
  };

  const exportCSV = () => {
    const headers = ['Enquiry ID', 'Date', 'Customer Name', 'Mobile', 'WhatsApp', 'Email', 'Service', 'Loan Amount', 'City', 'Status', 'Notes', 'Message'];
    const rows = enquiries.map(e => [
      e.id,
      new Date(e.createdAt).toLocaleString('en-IN'),
      `"${e.name.replace(/"/g, '""')}"`,
      e.mobile,
      e.whatsapp,
      e.email,
      `"${e.service.replace(/"/g, '""')}"`,
      `"${(e.loanAmount || '').replace(/"/g, '""')}"`,
      `"${(e.city || '').replace(/"/g, '""')}"`,
      e.status,
      `"${(e.notes || '').replace(/"/g, '""')}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `PKR_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered list
  const filtered = enquiries.filter(item => {
    const matchQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mobile.includes(searchQuery) ||
      (item.city && item.city.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchService =
      filterService === 'all' ||
      item.service.toLowerCase().includes(filterService.toLowerCase());

    const matchStatus =
      filterStatus === 'all' || item.status === filterStatus;

    return matchQuery && matchService && matchStatus;
  });

  const totalCount = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'new').length;
  const inProgressCount = enquiries.filter(e => e.status === 'in-progress' || e.status === 'contacted').length;
  const closedCount = enquiries.filter(e => e.status === 'closed').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              PKR
            </div>
            <div>
              <h3 className="text-base font-bold">Admin Portal & Lead Generation Tracker</h3>
              <p className="text-xs text-slate-400">Kundrathur Customer Enquiries Management</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="p-8 sm:p-12 max-w-md mx-auto my-auto w-full text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900">Admin Authentication</h4>
              <p className="text-xs text-slate-600 mt-1">
                Authorized staff access to PKR Online Services enquiries.
              </p>
            </div>

            {loginError && (
              <div className="p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg text-left flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Username / Phone</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 outline-none"
                  placeholder="admin"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 outline-none"
                  placeholder="pkr2026"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Sign In to Dashboard
              </button>
            </form>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="text-xs text-blue-700 font-semibold hover:underline bg-blue-50 py-2 rounded-lg"
              >
                ⚡ One-Click Demo Admin Login (admin / pkr2026)
              </button>
              <span className="text-[11px] text-slate-600">
                Secured local session · Kundrathur branch
              </span>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50">
            {/* KPI Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-medium text-slate-500 block">Total Enquiries</span>
                <span className="text-2xl font-bold font-mono text-slate-900 mt-1 block tabular-nums">
                  {totalCount}
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-medium text-amber-700 block">New Follow-ups</span>
                <span className="text-2xl font-bold font-mono text-amber-600 mt-1 block tabular-nums">
                  {newCount}
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-medium text-blue-700 block">In Progress</span>
                <span className="text-2xl font-bold font-mono text-blue-700 mt-1 block tabular-nums">
                  {inProgressCount}
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-medium text-emerald-700 block">Closed / Converted</span>
                <span className="text-2xl font-bold font-mono text-emerald-600 mt-1 block tabular-nums">
                  {closedCount}
                </span>
              </div>
            </div>

            {/* Controls Bar: Search, Filters, CSV Export */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              <div className="flex-1 flex flex-col sm:flex-row items-center gap-2">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search name, phone, city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-blue-600 outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={filterService}
                    onChange={(e) => setFilterService(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 outline-none"
                  >
                    <option value="all">All Services</option>
                    <option value="loan">Loans</option>
                    <option value="insurance">Insurance</option>
                    <option value="e-commerce">E-Commerce</option>
                    <option value="kitchen">Cloud Kitchen</option>
                  </select>

                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 outline-none"
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="in-progress">In Progress</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={fetchLeads}
                  disabled={loading}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>

                <button
                  onClick={exportCSV}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Customer</th>
                      <th className="px-4 py-3">Contact</th>
                      <th className="px-4 py-3">Service & Requirement</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-10 text-center text-slate-500">
                          No enquiries found matching your search or filters.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                          {/* Customer */}
                          <td className="px-4 py-3">
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <div className="text-[11px] text-slate-500">{item.city || 'Kundrathur'}</div>
                            <span className="text-[10px] font-mono text-blue-700 font-semibold">{item.id}</span>
                          </td>

                          {/* Contact */}
                          <td className="px-4 py-3">
                            <div className="font-mono text-slate-800">+91 {item.mobile}</div>
                            {item.email && <div className="text-[11px] text-slate-500">{item.email}</div>}
                          </td>

                          {/* Service */}
                          <td className="px-4 py-3 max-w-xs">
                            <div className="font-semibold text-slate-900">{item.service}</div>
                            {item.loanAmount && (
                              <div className="text-[11px] text-blue-700 font-mono font-medium">
                                Amount: {item.loanAmount}
                              </div>
                            )}
                            {item.message && (
                              <div className="text-[11px] text-slate-500 truncate" title={item.message}>
                                {item.message}
                              </div>
                            )}
                            {item.notes && (
                              <div className="text-[10px] text-amber-700 bg-amber-50 rounded px-1.5 py-0.5 mt-1 inline-block">
                                Note: {item.notes}
                              </div>
                            )}
                          </td>

                          {/* Date */}
                          <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                            {new Date(item.createdAt).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </td>

                          {/* Status */}
                          <td className="px-4 py-3">
                            <select
                              value={item.status}
                              onChange={(e) => handleStatusChange(item.id, e.target.value as Enquiry['status'])}
                              className={`px-2 py-1 text-[11px] font-bold rounded-lg border outline-none cursor-pointer ${
                                item.status === 'new'
                                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                                  : item.status === 'in-progress'
                                  ? 'bg-blue-50 text-blue-800 border-blue-300'
                                  : item.status === 'contacted'
                                  ? 'bg-purple-50 text-purple-800 border-purple-300'
                                  : item.status === 'closed'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                  : 'bg-slate-100 text-slate-700 border-slate-300'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="in-progress">In Progress</option>
                              <option value="contacted">Contacted</option>
                              <option value="closed">Closed</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>

                          {/* Actions */}
                          <td className="px-4 py-3 text-right whitespace-nowrap space-x-1.5">
                            {/* WhatsApp Customer */}
                            <a
                              href={`https://wa.me/91${item.whatsapp || item.mobile}?text=${encodeURIComponent(`Hi ${item.name}, thank you for contacting PKR Online Services regarding ${item.service}. How can we assist you today?`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex p-1.5 text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </a>

                            {/* Call Customer */}
                            <a
                              href={`tel:${item.mobile}`}
                              className="inline-flex p-1.5 text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                              title="Call Customer"
                            >
                              <Phone className="w-4 h-4" />
                            </a>

                            {/* Edit Notes */}
                            <button
                              onClick={() => {
                                setSelectedEnquiry(item);
                                setEditingNotes(item.notes || '');
                              }}
                              className="inline-flex p-1.5 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                              title="Add Internal Notes"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="inline-flex p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Notes Editor Modal */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-5 space-y-4 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-sm text-slate-900">
                  Update Internal Notes for {selectedEnquiry.name}
                </span>
                <button onClick={() => setSelectedEnquiry(null)} className="p-1 text-slate-400 hover:text-slate-700">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <textarea
                rows={4}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Write follow-up notes (e.g., CIBIL score 780, Bank sanction letter sent, preferred branch)..."
                className="w-full p-3 text-xs rounded-lg border border-slate-300 focus:border-blue-600 outline-none resize-none"
              ></textarea>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
