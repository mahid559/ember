'use client';

import { useEffect, useId, useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, AlertTriangle, CalendarCheck, Mail } from 'lucide-react';
import { guestOptions, site } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { Button } from './Button';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const TIME_SLOTS = [
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
  '10:00 PM',
];

const EMPTY: FormValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  requests: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues, minDate: string): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email address looks incomplete.';
  const digits = values.phone.replace(/[^\d]/g, '');
  if (!values.phone.trim()) errors.phone = 'Please add a contact number.';
  else if (digits.length < 7) errors.phone = 'Please enter a valid phone number.';
  if (!values.date) errors.date = 'Choose a reservation date.';
  else if (minDate && values.date < minDate) errors.date = 'Please choose today or a future date.';
  if (!values.time) errors.time = 'Select a preferred time.';
  const guests = Number(values.guests);
  if (!guests || guests < 1 || guests > 8) errors.guests = 'Choose between 1 and 8 guests.';
  return errors;
}

/**
 * ── Integration point ─────────────────────────────────────────────────────────
 * There is no booking backend wired up. `submitReservation` is where you would
 * call your reservations API / provider (OpenTable, Resy, SevenRooms, a custom
 * endpoint, etc). It currently resolves without sending anything, so the UI
 * NEVER claims a table has been confirmed or stored.
 * ──────────────────────────────────────────────────────────────────────────────
 */
async function submitReservation(values: FormValues): Promise<void> {
  void values;
  await new Promise((resolve) => setTimeout(resolve, 900));
}

export function ReservationForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [minDate, setMinDate] = useState('');
  const uid = useId();

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  const fieldId = (name: keyof FormValues) => `${uid}-${name}`;

  const update = (name: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Reservation request — ${values.name || 'New guest'}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Date: ${values.date}`,
        `Time: ${values.time}`,
        `Guests: ${values.guests}`,
        values.requests ? `Requests: ${values.requests}` : 'Requests: —',
      ].join('\n'),
    );
    return `${site.emailHref}?subject=${subject}&body=${body}`;
  }, [values]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, minDate);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(fieldId(firstKey as keyof FormValues))?.focus();
      return;
    }
    setStatus('submitting');
    try {
      await submitReservation(values);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        role="status"
        className="flex h-full flex-col justify-center text-ink-900"
      >
        <CalendarCheck className="h-10 w-10 text-gold-600" aria-hidden />
        <h3 className="mt-6 font-display text-3xl">Your details are ready, {values.name.split(' ')[0] || 'friend'}.</h3>
        <p className="mt-4 text-sm leading-relaxed text-ash-500">
          This is a sample interface and is <strong className="font-semibold text-ink-900">not
          connected to a booking system</strong> — your request has not been stored or confirmed.
          Send the details below to our team by email or phone and we&rsquo;ll confirm your table directly.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-ink-900/10 py-5 text-sm">
          <div>
            <dt className="label text-ash-400">Date</dt>
            <dd className="mt-1 text-ink-900">{values.date || '—'}</dd>
          </div>
          <div>
            <dt className="label text-ash-400">Time</dt>
            <dd className="mt-1 text-ink-900">{values.time || '—'}</dd>
          </div>
          <div>
            <dt className="label text-ash-400">Guests</dt>
            <dd className="mt-1 text-ink-900">{values.guests}</dd>
          </div>
          <div>
            <dt className="label text-ash-400">Phone</dt>
            <dd className="mt-1 text-ink-900">{values.phone}</dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            href={mailtoHref}
            icon={<Mail className="h-4 w-4" aria-hidden />}
          >
            Email our team
          </Button>
          <Button variant="outline" onClick={reset} className="text-ink-900 hover:text-gold-700">
            Book another table
          </Button>
        </div>
        <p className="mt-4 text-xs text-ash-400">
          Or call us on{' '}
          <a href={site.phoneHref} className="underline underline-offset-4 hover:text-gold-700">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="text-ink-900">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={fieldId('name')}
          label="Full name"
          error={errors.name}
          className="sm:col-span-2"
        >
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${fieldId('name')}-error` : undefined}
            placeholder="Jordan Rivera"
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field id={fieldId('email')} label="Email address" error={errors.email}>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${fieldId('email')}-error` : undefined}
            placeholder="you@example.com"
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field id={fieldId('phone')} label="Phone number" error={errors.phone}>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${fieldId('phone')}-error` : undefined}
            placeholder="+880 1700 000 000"
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field id={fieldId('date')} label="Reservation date" error={errors.date}>
          <input
            id={fieldId('date')}
            name="date"
            type="date"
            required
            min={minDate || undefined}
            value={values.date}
            onChange={(e) => update('date', e.target.value)}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? `${fieldId('date')}-error` : undefined}
            className={inputClass(Boolean(errors.date))}
          />
        </Field>

        <Field id={fieldId('time')} label="Preferred time" error={errors.time}>
          <select
            id={fieldId('time')}
            name="time"
            required
            value={values.time}
            onChange={(e) => update('time', e.target.value)}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? `${fieldId('time')}-error` : undefined}
            className={cn(inputClass(Boolean(errors.time)), 'appearance-none')}
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </Field>

        <Field id={fieldId('guests')} label="Number of guests" error={errors.guests}>
          <select
            id={fieldId('guests')}
            name="guests"
            required
            value={values.guests}
            onChange={(e) => update('guests', e.target.value)}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? `${fieldId('guests')}-error` : undefined}
            className={cn(inputClass(Boolean(errors.guests)), 'appearance-none sm:col-span-1')}
          >
            {guestOptions.map((count) => (
              <option key={count} value={String(count)}>
                {count} {count === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={fieldId('requests')}
          label="Special requests"
          hint="Optional — allergies, occasions, seating."
          className="sm:col-span-2"
        >
          <textarea
            id={fieldId('requests')}
            name="requests"
            rows={3}
            value={values.requests}
            onChange={(e) => update('requests', e.target.value)}
            placeholder="Celebrating an anniversary; one guest is gluten-free."
            className={cn(inputClass(false), 'resize-none')}
          />
        </Field>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-5 flex items-center gap-2 text-sm text-red-700">
          <AlertTriangle className="h-4 w-4" aria-hidden />
          Something went wrong sending your request. Please try again or email us directly.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          icon={status === 'submitting' ? undefined : <CheckCircle2 className="h-4 w-4" aria-hidden />}
        >
          {status === 'submitting' ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Checking details…
            </span>
          ) : (
            'Request Reservation'
          )}
        </Button>
        <p className="max-w-xs text-xs leading-relaxed text-ash-400">
          Sample reservation form — not connected to a booking system. We&rsquo;ll confirm by email/phone.
        </p>
      </div>

      <AnimatePresence>
        {Object.keys(errors).length > 0 && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="mt-4 text-sm text-red-700"
          >
            Please review the highlighted fields above.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full rounded-sm border bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors duration-200 placeholder:text-ash-300 focus:outline-none focus:ring-2 focus:ring-gold-500/40',
    hasError ? 'border-red-600/70' : 'border-ink-900/15 focus:border-gold-600',
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, error, hint, className, children }: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="label text-ash-500">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-ash-400">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-xs text-red-700">
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}
