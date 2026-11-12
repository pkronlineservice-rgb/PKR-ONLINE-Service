import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Path to data file
const DATA_DIR = path.resolve(__dirname, 'data');
const DATA_FILE = path.resolve(DATA_DIR, 'enquiries.json');

// Ensure data folder and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface Enquiry {
  id: string;
  name: string;
  mobile: string;
  whatsapp: string;
  email: string;
  service: string;
  loanAmount?: string;
  city: string;
  message: string;
  createdAt: string;
  status: 'new' | 'in-progress' | 'contacted' | 'closed' | 'rejected';
  notes?: string;
}

const initialEnquiries: Enquiry[] = [
  {
    id: 'PKR-ENQ-901',
    name: 'Suresh Kumar',
    mobile: '9840123456',
    whatsapp: '9840123456',
    email: 'suresh.k@gmail.com',
    service: 'Home Loan',
    loanAmount: '₹35,00,000',
    city: 'Kundrathur, Chennai',
    message: 'Looking for a home loan balance transfer with low interest rate for an independent house.',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    status: 'new',
    notes: 'Called customer, requested last 6 months bank statement.'
  },
  {
    id: 'PKR-ENQ-902',
    name: 'Priya Raman',
    mobile: '9884567890',
    whatsapp: '9884567890',
    email: 'priya.raman@outlook.com',
    service: 'E-Commerce',
    loanAmount: '',
    city: 'Porur, Chennai',
    message: 'Need help to set up Flipkart and Amazon seller accounts for handcrafted textile goods.',
    createdAt: new Date(Date.now() - 3600000 * 22).toISOString(),
    status: 'in-progress',
    notes: 'GST details provided, catalog listing scheduled.'
  },
  {
    id: 'PKR-ENQ-903',
    name: 'Venkatesh Babu',
    mobile: '9790112233',
    whatsapp: '9790112233',
    email: 'venkat.babu@gmail.com',
    service: 'Cloud Kitchen',
    loanAmount: '',
    city: 'Kundrathur, Chennai',
    message: 'Need 25 breakfast meal boxes (idli, pongal, vada) for housewarming pooja this Saturday morning.',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    status: 'contacted',
    notes: 'Confirmed delivery address and menu items.'
  },
  {
    id: 'PKR-ENQ-904',
    name: 'Anand Shankar',
    mobile: '9444129876',
    whatsapp: '9444129876',
    email: 'anand.shankar@gmail.com',
    service: 'Insurance',
    loanAmount: '',
    city: 'Mangadu, Chennai',
    message: 'Looking for family floater health insurance with 10 lakh coverage and cashless hospital network.',
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    status: 'closed',
    notes: 'Policy issued successfully.'
  }
];

function getEnquiries(): Enquiry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading enquiries data:', err);
  }
  // Initialize with samples
  saveEnquiries(initialEnquiries);
  return initialEnquiries;
}

function saveEnquiries(enquiries: Enquiry[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing enquiries data:', err);
  }
}

// API Routes
app.get('/api/enquiries', (_req, res) => {
  const list = getEnquiries();
  res.json({ success: true, count: list.length, data: list });
});

app.post('/api/enquiries', (req, res) => {
  const { name, mobile, whatsapp, email, service, loanAmount, city, message } = req.body;

  if (!name || !mobile || !service) {
    return res.status(400).json({
      success: false,
      message: 'Name, Mobile Number, and Service are required.'
    });
  }

  const cleanMobile = String(mobile).replace(/\D/g, '');
  if (cleanMobile.length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid 10-digit mobile number.'
    });
  }

  const newId = `PKR-ENQ-${Math.floor(10000 + Math.random() * 90000)}`;
  const newEnquiry: Enquiry = {
    id: newId,
    name: String(name).trim(),
    mobile: cleanMobile,
    whatsapp: whatsapp ? String(whatsapp).replace(/\D/g, '') : cleanMobile,
    email: email ? String(email).trim() : '',
    service: String(service).trim(),
    loanAmount: loanAmount ? String(loanAmount).trim() : '',
    city: city ? String(city).trim() : 'Kundrathur, Chennai',
    message: message ? String(message).trim() : '',
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  const list = getEnquiries();
  list.unshift(newEnquiry);
  saveEnquiries(list);

  // Build formatted WhatsApp message for owner & customer
  const whatsappText = encodeURIComponent(
    `*New Enquiry - PKR Online Services*\n` +
    `Ref ID: ${newEnquiry.id}\n` +
    `Name: ${newEnquiry.name}\n` +
    `Phone: ${newEnquiry.mobile}\n` +
    `Service: ${newEnquiry.service}\n` +
    (newEnquiry.loanAmount ? `Loan Amount: ${newEnquiry.loanAmount}\n` : '') +
    `City: ${newEnquiry.city}\n` +
    (newEnquiry.message ? `Requirements: ${newEnquiry.message}\n` : '') +
    `Date: ${new Date().toLocaleDateString('en-IN')}`
  );

  return res.status(201).json({
    success: true,
    message: 'Thank you! Your enquiry has been received by PKR Online Services.',
    data: newEnquiry,
    whatsappUrl: `https://wa.me/919043151680?text=${whatsappText}`
  });
});

app.patch('/api/enquiries/:id', (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const list = getEnquiries();
  const index = list.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Enquiry not found.' });
  }

  if (status) list[index].status = status;
  if (notes !== undefined) list[index].notes = notes;

  saveEnquiries(list);
  return res.json({ success: true, data: list[index] });
});

app.delete('/api/enquiries/:id', (req, res) => {
  const { id } = req.params;
  let list = getEnquiries();
  const initialLen = list.length;
  list = list.filter(e => e.id !== id);

  if (list.length === initialLen) {
    return res.status(404).json({ success: false, message: 'Enquiry not found.' });
  }

  saveEnquiries(list);
  return res.json({ success: true, message: 'Enquiry deleted successfully.' });
});

// Admin Auth check
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (
    (username === 'admin' && password === 'pkr2026') ||
    (username === '9043151680' && password === 'admin')
  ) {
    return res.json({
      success: true,
      token: `pkr-auth-${Date.now()}`,
      user: { name: 'PKR Administrator', role: 'admin' }
    });
  }
  return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PKR Online Services Server running at http://localhost:${PORT}`);
  });
}

startServer();
