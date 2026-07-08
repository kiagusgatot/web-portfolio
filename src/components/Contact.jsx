import { useState } from 'react'

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || 'New Contact from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-10 reveal">
      <div className="bento-card p-6 md:p-10 lg:p-16 relative overflow-hidden backdrop-blur-sm bg-[#1A1A1A]/90">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Let's Build.</h2>
            <p className="text-lg text-dev-muted mb-10 max-w-md">
              Ready to accelerate your product development cycle? Let's connect and discuss how we can build something great together.
            </p>

            <div className="grid grid-cols-2 gap-5 lg:gap-6 font-medium text-sm text-dev-muted w-max">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-dev-surface border border-dev-border flex items-center justify-center text-dev-orange">
                  <i className="ri-linkedin-fill text-xl"></i>
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-dev-surface border border-dev-border flex items-center justify-center text-dev-orange">
                  <i className="ri-whatsapp-fill text-xl"></i>
                </div>
                <span>WhatsApp</span>
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-dev-surface border border-dev-border flex items-center justify-center text-dev-orange">
                  <i className="ri-instagram-line text-xl"></i>
                </div>
                <span>Instagram</span>
              </a>
              <a
                href={profile.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-dev-surface border border-dev-border flex items-center justify-center text-dev-orange">
                  <i className="ri-behance-fill text-xl"></i>
                </div>
                <span>Behance</span>
              </a>
            </div>
          </div>

          <div className="bg-[#111111]/80 border border-dev-border p-6 sm:p-8 rounded-2xl w-full shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-dev-muted uppercase font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#1A1A1A] border border-dev-border rounded-lg px-4 py-3 text-dev-text focus:outline-none focus:border-dev-orange focus:ring-1 focus:ring-dev-orange transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-dev-muted uppercase font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-[#1A1A1A] border border-dev-border rounded-lg px-4 py-3 text-dev-text focus:outline-none focus:border-dev-orange focus:ring-1 focus:ring-dev-orange transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-dev-muted uppercase font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="bg-[#1A1A1A] border border-dev-border rounded-lg px-4 py-3 text-dev-text focus:outline-none focus:border-dev-orange focus:ring-1 focus:ring-dev-orange transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label htmlFor="message" className="text-xs font-mono text-dev-muted uppercase font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="bg-[#1A1A1A] border border-dev-border rounded-lg px-4 py-3 text-dev-text focus:outline-none focus:border-dev-orange focus:ring-1 focus:ring-dev-orange transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-dev-orange text-white px-6 py-4 rounded-lg font-semibold text-base hover:bg-dev-orangeHover transition-colors flex items-center justify-center gap-2 shadow-lg shadow-dev-orange/20"
              >
                Send Message <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
