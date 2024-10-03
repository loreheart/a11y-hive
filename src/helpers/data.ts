import type { ISite, ISiteRaw } from '../types'

export const convertCSVKeys = (rawSiteList: ISiteRaw[]): ISite[] => {
  const newSites: ISite[] = rawSiteList.map((rawSite:ISiteRaw) => ({
    // ID or Pseudo-random number
    id: `${Math.floor(Math.random()*100000)}`,
  
    // Website Details
    website_url: rawSite["Website URL"],
    built_with: rawSite["Built With"],

    // Company Details
    company_name: rawSite["Company Name"],
    company_description: rawSite["Company Description"],
    
    // Contact Details
    email: rawSite["Email"],
    phone_number: rawSite["Phone Number"],
    contact_name: rawSite["Contact Name"],
    contact_role: "",
    contact_method: rawSite["Contact Method"],
    
    meeting_notes: rawSite["Meeting Notes Document URL"],
    next_step: rawSite["Next Step"],
    notes: "",
  
    // Dates
    discovered_date: rawSite["Discovered Date"],
    outreach_date: rawSite["Outreach Date"],
    followup_date: rawSite["Followup Date"],
  }))
  return newSites
}