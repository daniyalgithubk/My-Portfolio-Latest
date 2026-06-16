import React from "react"
import { useSelector } from 'react-redux'
import { pageBg, text, card, input } from '../../theme/backgrounds'

const Contact = () => {
  const theme = useSelector((state) => state.theme.theme)
  const t = text(theme)
  const inp = input(theme)

  return (
    <div className="min-h-screen p-8 transition-colors duration-300"
      style={{ background: pageBg(theme) }}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold" style={{ color: t.heading }}>Contact Me</h1>
        <p className="mt-4" style={{ color: t.muted }}>
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>
      <div className="contact-grid">
        <div className="space-y-6">
          {[
            { icon: "📧", label: "Email", value: "khattakd87@gmail.com" },
            { icon: "📞", label: "Phone", value: "03025454696" },
            { icon: "📍", label: "Location", value: "Islamabad, Pakistan" },
            { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/daniyal-khattak-7628a339b" },
            { icon: "🧑‍💻", label: "GitHub", value: "daniyalgithubk" },
          ].map((item, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold" style={{ color: t.heading }}>{item.icon} {item.label}</h2>
              <p style={{ color: t.muted }}>{item.value}</p>
            </div>
          ))}
        </div>
        <form className="p-8 rounded-lg shadow-md space-y-6" style={{ background: card(theme) }}>
          {[
            { label: "Name", type: "text", placeholder: "Your Name" },
            { label: "Email", type: "email", placeholder: "your@email.com" },
          ].map((field, i) => (
            <div key={i}>
              <label className="block mb-2" style={{ color: t.body }}>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder}
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{ background: inp.background, borderColor: inp.border, color: inp.color }} />
            </div>
          ))}
          <div>
            <label className="block mb-2" style={{ color: t.body }}>Message</label>
            <textarea rows="4" placeholder="Your Message..."
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={{ background: inp.background, borderColor: inp.border, color: inp.color }} />
          </div>
          <button type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact