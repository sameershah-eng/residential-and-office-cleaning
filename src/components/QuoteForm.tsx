import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Loader2, Calendar, Phone, Mail, User, Sparkles, AlertCircle } from 'lucide-react';
import { submitLead, LeadSubmissionPayload } from '../lib/submitLead';

// Today's date in YYYY-MM-DD for blocking past dates
const todayString = new Date().toISOString().split('T')[0];

const SERVICE_OPTIONS = [
  'Standard Home Clean',
  'Signature Deep Clean',
  'Move-In / Move-Out Clean',
  'Office & Commercial Care',
  'Recurring Wellness Plan',
  'Post-Construction Detail',
] as const;

const quoteSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid phone number with area code' })
    .regex(/^[\d\s()+-]+$/, { message: 'Phone number should only contain numbers, spaces, and ()-' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  serviceType: z.string().min(1, { message: 'Please select a service type' }),
  preferredDate: z.string().min(1, { message: 'Please choose your preferred date' }).refine(
    (val) => val >= todayString,
    { message: 'Preferred date cannot be in the past' }
  ),
  zipCode: z.string().optional(),
  message: z.string().max(500, { message: 'Message is limited to 500 characters' }).optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  initialService?: string;
  initialZip?: string;
  initialDate?: string;
  onSuccess?: () => void;
  className?: string;
  isModal?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialService,
  initialZip,
  initialDate,
  onSuccess,
  className = '',
  isModal = false,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{ name: string; leadId: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Normalize initialService if passed
  const getMappedService = (s?: string): QuoteFormValues['serviceType'] => {
    if (!s) return 'Standard Home Clean';
    if (s.includes('deep') || s.includes('Deep')) return 'Signature Deep Clean';
    if (s.includes('move') || s.includes('Move')) return 'Move-In / Move-Out Clean';
    if (s.includes('office') || s.includes('commercial') || s.includes('Office')) return 'Office & Commercial Care';
    if (s.includes('recurring') || s.includes('Recurring')) return 'Recurring Wellness Plan';
    if (s.includes('construction') || s.includes('Post')) return 'Post-Construction Detail';
    return 'Standard Home Clean';
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      serviceType: getMappedService(initialService),
      preferredDate: initialDate || '',
      zipCode: initialZip || '',
      message: '',
    },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload: LeadSubmissionPayload = {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        serviceType: values.serviceType,
        preferredDate: values.preferredDate,
        zipCode: values.zipCode,
        message: values.message,
        source: isModal ? 'Quote Modal' : 'On-Page Form',
      };

      const result = await submitLead(payload);
      if (result.success) {
        setSubmittedLead({
          name: values.fullName.split(' ')[0],
          leadId: result.leadId,
        });
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 3200);
        }
      }
    } catch (err) {
      console.error('Failed to submit quote request:', err);
      setErrorMessage('Something went wrong submitting your quote. Please call us directly at (512) 489-3320.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedLead(null);
    reset();
  };

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        {submittedLead ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-10 bg-[#FAF8F4] border border-[#A8C3B1]/40 rounded-2xl text-center shadow-sm"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#2F7D6D]/10 flex items-center justify-center text-[#2F7D6D]">
              <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
            </div>

            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D] bg-[#2F7D6D]/10 px-3 py-1 rounded-full">
              Quote Request Confirmed #{submittedLead.leadId}
            </span>

            <h3 className="mt-4 text-2xl md:text-3xl font-serif text-[#1F3D36]">
              Thanks, {submittedLead.name}!
            </h3>

            <p className="mt-3 text-base text-[#5C6460] max-w-md mx-auto leading-relaxed">
              We received your home details. Our Austin coordinator will review your square footage and call you within{' '}
              <strong className="text-[#1F3D36] font-semibold">2 business hours</strong> with your customized flat rate.
            </p>

            <div className="mt-6 pt-6 border-t border-[#E9DCC7]/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#5C6460]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2F7D6D]" />
                <span>Zero spam guarantee</span>
              </div>
              <span className="hidden sm:inline text-[#A8C3B1]">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2F7D6D]" />
                <span>No credit card required upfront</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#2F7D6D] hover:text-[#1F3D36] transition-colors"
            >
              Submit another request or modify details
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5C6460]/60">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Sarah Miller"
                    autoComplete="name"
                    {...register('fullName')}
                    className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm text-[#1A1A1A] placeholder-[#5C6460]/50 focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E9DCC7]/80 hover:border-[#A8C3B1]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5C6460]/60">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(512) 555-0192"
                    autoComplete="tel"
                    {...register('phone')}
                    className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm text-[#1A1A1A] placeholder-[#5C6460]/50 focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E9DCC7]/80 hover:border-[#A8C3B1]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Email and Zip Code */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5C6460]/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="sarah@example.com"
                    autoComplete="email"
                    {...register('email')}
                    className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm text-[#1A1A1A] placeholder-[#5C6460]/50 focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E9DCC7]/80 hover:border-[#A8C3B1]'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-1.5">
                  Austin Zip Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="e.g. 78704"
                  maxLength={5}
                  {...register('zipCode')}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E9DCC7]/80 hover:border-[#A8C3B1] rounded-xl text-sm text-[#1A1A1A] placeholder-[#5C6460]/50 focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Row 3: Service Type and Preferred Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="serviceType" className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-1.5">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  {...register('serviceType')}
                  className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all ${
                    errors.serviceType ? 'border-red-400' : 'border-[#E9DCC7]/80 hover:border-[#A8C3B1]'
                  }`}
                >
                  <option value="Standard Home Clean">Standard Home Clean</option>
                  <option value="Signature Deep Clean">Signature Deep Clean</option>
                  <option value="Move-In / Move-Out Clean">Move-In / Move-Out Clean</option>
                  <option value="Office & Commercial Care">Office & Commercial Care</option>
                  <option value="Recurring Wellness Plan">Recurring Wellness Plan (Save 15-20%)</option>
                  <option value="Post-Construction Detail">Post-Construction Detail</option>
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-xs text-red-600">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-1.5">
                  Preferred Date *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5C6460]/60">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    id="preferredDate"
                    type="date"
                    min={todayString}
                    {...register('preferredDate')}
                    className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all ${
                      errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-[#E9DCC7]/80 hover:border-[#A8C3B1]'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-red-600">{errors.preferredDate.message}</p>
                )}
              </div>
            </div>

            {/* Optional message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-1.5">
                Special Details / Notes (Optional)
              </label>
              <textarea
                id="message"
                rows={isModal ? 2 : 3}
                placeholder="e.g. 3 bedrooms, 2.5 baths, we have a friendly golden retriever, preferred morning time..."
                {...register('message')}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E9DCC7]/80 hover:border-[#A8C3B1] rounded-xl text-sm text-[#1A1A1A] placeholder-[#5C6460]/50 focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all resize-none"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Submit CTA button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Calculating Flat Rate & Reserving Slot...</span>
                  </>
                ) : (
                  <>
                    <span>Request Free Custom Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-[11px] text-[#5C6460] mt-2">
              No payment needed now. We confirm your flat price and arrival window before any commitment.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
