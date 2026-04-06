'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const subjectOptions = [
  { value: '', label: 'Valitse aihe' },
  { value: 'yleinen', label: 'Yleinen kysymys' },
  { value: 'palaute', label: 'Palaute' },
  { value: 'yhteistyo', label: 'Yhteistyö' },
  { value: 'virheraportti', label: 'Virheraportti' },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nimi on pakollinen';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Sähköposti on pakollinen';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Tarkista sähköpostiosoitteen muoto';
    }

    if (!formData.subject) {
      newErrors.subject = 'Valitse aihe';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Viesti on pakollinen';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Viesti on liian lyhyt (vähintään 10 merkkiä)';
    }

    return newErrors;
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrors({ message: data.error || 'Viestin lähetys epäonnistui.' });
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setErrors({ message: 'Verkkovirhe. Tarkista yhteys ja yritä uudelleen.' });
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-7 w-7 text-emerald-600" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[#0B1F3F]">
          Kiitos viestistäsi!
        </h3>
        <p className="text-sm text-slate-600">
          Vastaamme 1–2 arkipäivän kuluessa.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }}
          className="mt-6 text-sm font-medium text-[#0891B2] transition-colors hover:text-[#0B1F3F]"
        >
          Lähetä uusi viesti
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-medium text-[#0B1F3F]"
        >
          Nimi <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Etunimi Sukunimi"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-[#0891B2] focus:ring-2 focus:ring-[#0891B2]/20 ${
            errors.name ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-[#0B1F3F]"
        >
          Sähköposti <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nimi@esimerkki.fi"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-[#0891B2] focus:ring-2 focus:ring-[#0891B2]/20 ${
            errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-medium text-[#0B1F3F]"
        >
          Aihe <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0891B2] focus:ring-2 focus:ring-[#0891B2]/20 ${
            errors.subject ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'
          } ${!formData.subject ? 'text-slate-400' : ''}`}
        >
          {subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-[#0B1F3F]"
        >
          Viesti <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Kirjoita viestisi tähän..."
          rows={5}
          className={`w-full resize-y rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-[#0891B2] focus:ring-2 focus:ring-[#0891B2]/20 ${
            errors.message ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0891B2] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Lähetetään...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Lähetä viesti
          </>
        )}
      </button>
    </form>
  );
}
