export default function Contact({ profile }) {
  return (
    <section id="contact" className="py-10 reveal">
      <div className="bento-card p-10 lg:p-16 text-center relative overflow-hidden backdrop-blur-sm bg-[#1A1A1A]/90">
        <div className="max-w-xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Let's Build.</h2>
          <p className="text-lg text-dev-muted mb-10">Ready to accelerate your product development cycle?</p>

          <a
            href={`mailto:${profile.email}`}
            className="bg-white text-dev-bg px-10 py-4 rounded-lg font-bold text-lg hover:bg-dev-orange hover:text-white transition-colors w-full sm:w-auto shadow-lg"
          >
            Send a Message
          </a>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12 font-medium text-sm text-dev-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <i className="ri-linkedin-fill text-xl"></i> LinkedIn
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <i className="ri-whatsapp-fill text-xl"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
