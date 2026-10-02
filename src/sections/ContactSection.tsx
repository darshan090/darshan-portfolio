import React, { useState } from 'react';
import { Mail, Copy, Send, Check, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { HERO_DATA } from '../data/portfolioData';
import { RevealOnScroll } from '../components/animations/RevealOnScroll';

interface ContactSectionProps {
  onOpenResume: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume, onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    onShowToast('Thank you! Your message has been recorded.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#07090e] border-t border-slate-800/80 font-sans relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-6 space-y-6">
            
            <RevealOnScroll>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  <Mail className="w-3.5 h-3.5" />
                  <span>08 — Get in Touch</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Let's build something useful.
                </h2>

                <p className="text-base text-slate-300 max-w-xl leading-relaxed">
                  Open to software development opportunities, full-stack positions, engineering internships, and complex software problems.
                </p>
              </div>
            </RevealOnScroll>

            {/* Quick Email Action Card */}
            <RevealOnScroll delay={100}>
              <div className="card-hover-micro p-6 rounded-2xl bg-[#0e131d] border border-slate-800/90 space-y-4 shadow-xl">
                <span className="text-xs font-mono text-slate-400 uppercase block">Direct Email Connection</span>
                
                <div className="flex items-center justify-between gap-3 bg-[#080b11] p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                      {HERO_DATA.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-micro px-3 py-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-lg transition-colors flex items-center gap-1.5 flex-shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                  <button
                    onClick={onOpenResume}
                    className="btn-micro inline-flex items-center gap-2 px-4 py-2 font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            {/* Social Links Cards */}
            <RevealOnScroll delay={160}>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={HERO_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover-micro p-4 rounded-xl bg-[#0d111a] border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <h4 className="text-xs font-bold text-white">GitHub Profile</h4>
                      <span className="text-[11px] font-mono text-slate-400">@darshanjariwala</span>
                    </div>
                  </div>
                </a>

                <a
                  href={HERO_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover-micro p-4 rounded-xl bg-[#0d111a] border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <h4 className="text-xs font-bold text-white">LinkedIn Profile</h4>
                      <span className="text-[11px] font-mono text-slate-400">Darshan Jariwala</span>
                    </div>
                  </div>
                </a>
              </div>
            </RevealOnScroll>

          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:col-span-6">
            <RevealOnScroll delay={120}>
              <div className="bg-[#0c1018] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Send a Direct Message</span>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the details below and I will get back to you promptly.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Message Sent Successfully</h4>
                    <p className="text-xs text-slate-300">
                      Thank you for reaching out, Darshan has received your inquiry.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-xs font-mono text-emerald-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                    <div>
                      <label htmlFor="contact-name" className="block text-slate-300 font-medium mb-1">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/80 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-slate-300 font-medium mb-1">
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/80 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-slate-300 font-medium mb-1">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="e.g. Software Developer Role / Project Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/80 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-slate-300 font-medium mb-1">
                        Message <span className="text-emerald-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Briefly describe your project, role opportunity, or question..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/80 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-micro w-full py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-950/40 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
};
