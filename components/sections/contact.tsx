"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Linkedin, Github, Send } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-purple-400" />,
      label: "Location",
      value: "Quezon City, Philippines, 1109",
    },
    {
      icon: <Phone className="h-5 w-5 text-purple-400" />,
      label: "Phone",
      value: "09620855132",
    },
    {
      icon: <Mail className="h-5 w-5 text-purple-400" />,
      label: "Email",
      value: "josefleyton16@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-purple-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ayushjha23",
      link: "www.linkedin.com/in/josef-johrel-medel-131570312",
    },
    {
      icon: <Github className="h-5 w-5 text-purple-400" />,
      label: "GitHub",
      value: "github.com/AyushRajJha",
      link: "https://github.com/jjmalupet2002?tab=overview&from=2025-06-01&to=2025-06-08",
    },
  ]

  return (
    <section id="contact" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

      <div className="grid md:grid-cols-2 gap-10">
        <div
          className={cn(
            "space-y-6 opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-sm text-gray-400">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Send Me a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-gray-400 mb-1 block">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-400 mb-1 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-gray-400 mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-400 text-gray-900 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Vercel (V0). All rights reserved.</p>
      </div>
    </section>
  )
}
