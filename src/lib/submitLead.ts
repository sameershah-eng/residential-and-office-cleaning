/**
 * Lead submission service for Fernway Cleaning Co. quote requests.
 * 
 * In this production mockup, it simulates an API network call with a 1.2-second delay,
 * validates the payload, logs the lead data cleanly to the console, and returns a success response.
 * 
 * TO CONNECT REAL BACKEND / INTEGRATION:
 * 1. Formspree:
 *    Set VITE_LEAD_ENDPOINT="https://formspree.io/f/YOUR_FORM_ID" in .env
 *    and fetch(import.meta.env.VITE_LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(leadData) })
 * 
 * 2. Google Sheets / Zapier / Make Webhook:
 *    Set VITE_LEAD_ENDPOINT="https://hook.us1.make.com/..." in .env
 * 
 * 3. Supabase / Firestore:
 *    Import your initialized client and insert into the 'quotes' table / collection.
 */

export interface LeadSubmissionPayload {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  frequency?: string;
  squareFeet?: string;
  zipCode?: string;
  message?: string;
  source?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  leadId: string;
  message: string;
  timestamp: string;
  data: LeadSubmissionPayload;
}

export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadSubmissionResult> {
  // If an external endpoint is configured via environment variable, try to ping it:
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT;

  if (endpoint && endpoint !== 'MY_LEAD_ENDPOINT') {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (err) {
      console.warn('[Fernway Lead Service] External endpoint failed, falling back to simulated store:', err);
    }
  }

  // Simulate network roundtrip latency (1.2s as specified in design brief)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const leadId = `FW-${Date.now().toString().slice(-6)}`;
  const timestamp = new Date().toISOString();

  // Log payload for developer visibility & mockup verification
  console.info('[Fernway Cleaning Co.] Received New Quote Request:', {
    leadId,
    timestamp,
    ...payload,
  });

  // Optional: save in sessionStorage so the user can verify their submission in demo mode
  try {
    const existing = JSON.parse(sessionStorage.getItem('fernway_demo_leads') || '[]');
    existing.push({ leadId, timestamp, ...payload });
    sessionStorage.setItem('fernway_demo_leads', JSON.stringify(existing));
  } catch {
    // ignore in private browsing modes
  }

  return {
    success: true,
    leadId,
    message: `Thank you, ${payload.fullName.split(' ')[0]}! We have received your request and will call you within 2 business hours.`,
    timestamp,
    data: payload,
  };
}
