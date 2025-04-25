'use client';

import { useRef } from 'react';
import { useActionState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ParticlesClient from './ui/ParticlesClient';
import SubmitButton from './SubmitButton';

type FormState = {
  errors: string[] | null;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const contactAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    const errors: string[] = [];
    if (!name.trim()) errors.push('Name is required.');
    if (!email.trim()) errors.push('Email is required.');
    if (!message.trim()) errors.push('Message is required.');

    if (errors.length > 0) {
      return { ...prevState, errors };
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success('Your message was sent successfully!');
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message. Please try again.');
    }

    return { errors: null };
  };

  const [formState, formAction] = useActionState<FormState, FormData>(contactAction, {
    errors: null,
  });

  return (
    <section id="contact" className="relative py-20 px-4 bg-[#040D12] text-white">
      <div className="absolute inset-0 z-0">
        <ParticlesClient />
      </div>

      <div className="w-full max-w-2xl rounded-3xl md:p-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-left">
          Let&apos;s <span className="text-accent">Connect.</span>
        </h2>

        <form ref={formRef} action={formAction} className="space-y-6">
          <div>
            <label className="block text-[#93B1A6] text-lg md:text-xl mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#040D12]/80 text-[#93B1A6] border border-[#5C8374]/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5C8374] transition-all"
            />
          </div>
          <div>
            <label className="block text-[#93B1A6] text-lg md:text-xl mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-[#040D12]/80 text-[#93B1A6] border border-[#5C8374]/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5C8374] transition-all"
            />
          </div>
          <div>
            <label className="block text-[#93B1A6] text-lg md:text-xl mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message..."
              className="w-full bg-[#040D12]/80 text-[#93B1A6] border border-[#5C8374]/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5C8374] transition-all"
            />
          </div>

          <SubmitButton />

          {formState.errors && (
            <ul className="text-red-500 text-sm mt-4 space-y-1">
              {formState.errors.map((err) => (
                <li key={err}>* {err}</li>
              ))}
            </ul>
          )}
        </form>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
