"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@chickanstop.com",
      description: "We reply within 24 hours",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm EST",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "123 Fashion Street, NYC",
      description: "Visit our showroom",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "24/7 Support",
      description: "Always available online",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const faqItems = [
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days delivery. All orders over $50 qualify for free standard shipping.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day hassle-free return policy. Items must be unworn and in original condition with tags attached. Simply contact us for a return shipping label.",
    },
    {
      question: "Are your clothes ethically made?",
      answer:
        "Yes! 100% of our products are Fair Trade certified. We partner with artisans who receive fair wages and work in safe conditions. Learn more on our About page.",
    },
    {
      question: "Do you offer customization?",
      answer:
        "Absolutely! For bulk orders and custom designs, please reach out to our team at custom@chickanstop.com. We can create bespoke pieces tailored to your needs.",
    },
    {
      question: "How can I track my order?",
      answer:
        "After placing an order, you'll receive a tracking number via email. You can also check your order status in your account dashboard anytime.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and cryptocurrency payments. All transactions are secure and encrypted.",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hero-contact bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {"We'd Love to"}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                {" "}
                Hear From You
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about our products or services? Our friendly team
              is here to help and answer any questions you might have.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-rose-500 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {info.label}
                  </h3>
                  <p className="text-rose-600 font-semibold mb-2">
                    {info.value}
                  </p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-3">
                  Contact Form
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-rose-500/30 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                  <Send size={20} />
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      {
                        "Thank you! Your message has been sent successfully. We'll get back to you soon"
                      }
                    </p>
                  </div>
                )}
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Response Time
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        <span className="font-semibold">Emails:</span> Within 24
                        hours
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        <span className="font-semibold">Phone:</span> During
                        business hours
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        <span className="font-semibold">Chat:</span> Instant
                        responses
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-rose-200 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Follow Us
                    </h4>
                    <div className="flex gap-3">
                      {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={index}
                            href={link.href}
                            aria-label={link.label}
                            className="w-10 h-10 rounded-lg bg-white border border-rose-200 flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-300 hover:scale-110"
                          >
                            <Icon size={20} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-rose-500 transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 rounded-3xl p-8 md:p-16 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Visit Our Showroom
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience our collections in person. Visit our flagship store
                in downtown NYC and let our style experts help you find the
                perfect pieces.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-rose-400 mb-3">Address</h4>
                  <p className="text-gray-300">
                    123 Fashion Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-400 mb-3">
                    Store Hours
                  </h4>
                  <p className="text-gray-300">
                    Monday - Friday: 10am - 8pm
                    <br />
                    Saturday: 11am - 7pm
                    <br />
                    Sunday: 12pm - 6pm
                  </p>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Directions
                <MapPin size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {"Can't find what you're looking for?"}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our Help Center for detailed guides, tutorials, and
              resources to help you make the most of your purchase.
            </p>
            <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Help Center
              <Send size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
