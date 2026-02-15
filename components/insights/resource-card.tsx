"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface ResourceCardProps {
  title: string
  description: string
  downloadUrl?: string
}

export function ResourceCard({ title, description, downloadUrl = "#" }: ResourceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate brief processing delay
    await new Promise((resolve) => setTimeout(resolve, 600))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    if (isSubmitted) {
      // Reset for next time
      setIsSubmitted(false)
      setFormData({ name: "", organization: "", role: "", email: "" })
    }
  }

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-lg shadow-sm border border-[#E8E6E3] overflow-hidden flex flex-col">
        {/* Gold accent line */}
        <div className="h-[3px] bg-[#D4AF37]/40" />

        <div className="p-8 flex flex-col flex-1">
          <h3
            className="text-[28px] leading-tight font-medium text-[#0A1628]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <p className="mt-4 text-base text-[#4B5563] leading-relaxed font-sans flex-1">
            {description}
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-8 w-full bg-[#0C1829] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2942]"
          >
            Access Briefing
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose()
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl">
            {/* Gold accent line */}
            <div className="h-[3px] bg-[#D4AF37]/40 rounded-t-lg" />

            <div className="p-8">
              {/* Close button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 text-[#4B5563] hover:text-[#0A1628] transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <h2
                    id="modal-title"
                    className="text-2xl font-medium text-[#0A1628]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Access This Resource
                  </h2>
                  <p className="mt-2 text-sm text-[#4B5563]">
                    Complete the form below to access this executive briefing.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <label
                        htmlFor="gate-name"
                        className="block text-sm font-medium text-[#0A1628]"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="gate-name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1.5 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="gate-org"
                        className="block text-sm font-medium text-[#0A1628]"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="gate-org"
                        required
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        className="mt-1.5 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="gate-role"
                        className="block text-sm font-medium text-[#0A1628]"
                      >
                        Role
                      </label>
                      <input
                        type="text"
                        id="gate-role"
                        required
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="mt-1.5 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="gate-email"
                        className="block text-sm font-medium text-[#0A1628]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="gate-email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-1.5 block w-full border border-gray-300 bg-white px-4 py-3 text-[#0A1628] text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0C1829] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2942] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Processing..." : "Submit"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <h2
                    className="text-2xl font-medium text-[#0A1628]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Thank You
                  </h2>
                  <p className="mt-3 text-[#4B5563] text-sm leading-relaxed">
                    Your access has been granted. Click the link below to download the resource.
                  </p>
                  <a
                    href={downloadUrl}
                    className="mt-6 inline-block bg-[#D4AF37] text-[#0A1628] px-8 py-3 text-sm font-semibold transition-colors hover:bg-[#c4a030]"
                  >
                    Download Briefing
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
