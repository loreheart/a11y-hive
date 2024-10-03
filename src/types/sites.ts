export interface ISite {
  id: string

  // Website Details
  website_url: string // From CSV
  built_with: string // From CSV

  // Company Details
  company_name: string // From CSV
  company_description: string // From CSV
  
  // Contact Details
  email: string
  phone_number: string // From CSV
  contact_name: string // From CSV
  contact_role: string
  contact_method: string // From CSV
  
  meeting_notes: string // From CSV
  next_step: string // From CSV
  notes: string

  // Dates
  discovered_date: string // From CSV
  outreach_date: string // From CSV
  followup_date: string // From CSV
}

export interface ISiteRaw {
  "Website URL": string
  "Built With": string
  "Company Name": string
  "Company Description": string
  "Email": string
  "Phone Number": string
  "Contact Name": string
  "Contact Method": string
  "Meeting Notes Document URL": string
  "Next Step": string
  "Discovered Date": string
  "Outreach Date": string
  "Followup Date": string
}