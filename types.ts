
import React from 'react';

export interface ServiceInfo {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  whoItIsFor: string;
  benefit: string;
  icon: React.ReactNode;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  service: string;
  message: string;
}
