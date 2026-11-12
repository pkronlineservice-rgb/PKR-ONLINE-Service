export interface Enquiry {
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

export type ServiceCategoryKey = 'loans' | 'insurance' | 'ecommerce' | 'kitchen';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: ServiceCategoryKey;
  ctaText: string;
  badge?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  tamilName?: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'rice' | 'breads' | 'juices' | 'healthy' | 'pickles';
  description: string;
  price?: string;
  timing?: string;
  isSpecial?: boolean;
}
