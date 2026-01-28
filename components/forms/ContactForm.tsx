'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  companySize: z.string().min(1, 'Please select a company size'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="text-center py-12"
        >
          <div className="w-14 h-14 mx-auto mb-6 bg-green-50 border border-green-200 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-display text-charcoal-900 mb-2">
            Message sent
          </h3>
          <p className="text-charcoal-600 text-sm">
            We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm text-charcoal-700 mb-2">
              Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-charcoal-700 mb-2">
              Email <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="you@company.com"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm text-charcoal-700 mb-2">
              Company <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              {...register('company')}
              className={`form-input ${errors.company ? 'error' : ''}`}
              placeholder="Your company"
            />
            {errors.company && (
              <p className="mt-1.5 text-xs text-red-600">{errors.company.message}</p>
            )}
          </div>

          {/* Company Size */}
          <div>
            <label htmlFor="companySize" className="block text-sm text-charcoal-700 mb-2">
              Team size <span className="text-orange-500">*</span>
            </label>
            <select
              id="companySize"
              {...register('companySize')}
              className={`form-input appearance-none bg-white cursor-pointer ${errors.companySize ? 'error' : ''}`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23737373'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.25rem',
                paddingRight: '3rem',
              }}
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10 people</option>
              <option value="11-25">11-25 people</option>
              <option value="26-50">26-50 people</option>
              <option value="51-100">51-100 people</option>
              <option value="100+">100+ people</option>
            </select>
            {errors.companySize && (
              <p className="mt-1.5 text-xs text-red-600">{errors.companySize.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm text-charcoal-700 mb-2">
              What&apos;s your biggest admin headache?
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={4}
              className="form-input resize-none"
              placeholder="Tell us about tasks that eat up your team's time..."
            />
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-red-600 text-sm">{submitError}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full mt-2"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
