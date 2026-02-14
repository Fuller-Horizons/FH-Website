"use client"

import React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Pre-fill message from URL parameter
  useEffect(() => {
    const interest = searchParams.get("interest")
    if (interest) {
      setFormData((prev) => ({
        ...prev,
        message: interest,
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
    } catch {
      setError("There was an error sending your message. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-medium text-[#0A1628]">
          Thank you for your inquiry.
        </h3>
        <p className="mt-4 text-[#4B5563]">
          You will be contacted within 24 business hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#0A1628]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-2 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
        />
      </div>

      {/* Organization Field */}
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-[#0A1628]"
        >
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={(e) =>
            setFormData({ ...formData, organization: e.target.value })
          }
          className="mt-2 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#0A1628]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-2 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[#0A1628]"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-2 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
          placeholder="(555) 555-5555"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#0A1628]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="mt-2 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] resize-none transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0C1829] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1a2942] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Request a Conversation"}
      </button>
    </form>
  )
}
