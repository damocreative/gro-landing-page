import React from "react"
import {
  Shield,
  AlertTriangle,
  FileText,
  Users,
  Clock,
  Download,
  Phone,
  Building,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function GROAuditLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/hero-slider-img-01.webp"
            alt="Business professionals in Saudi Arabia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Logo */}
        <div className="relative container mx-auto px-4 pt-8">
          <img
            src="https://tascoutsourcing.sa/images/logo.svg"
            alt="TASC Logo"
            className="h-12 w-auto"
          />
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
            <div className="relative order-2 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Compliance Check</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  />
                  <Input
                    placeholder="Company Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  />
                  <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 py-3 h-12 font-semibold">
                    Get My Risk Assessment
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-white space-y-8 order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">
                <AlertTriangle className="w-4 h-4" />
                Compliance Risk Alert
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Is Your Compliance Putting Your <span className="text-cyan-400">Business at Risk?</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                One missed policy or misaligned record could quietly block your hiring, payroll, or visa approvals — and
                may even result in <span className="text-cyan-400">fines or compliance penalties.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Risk Assessment
                </Button>
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 text-lg font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Checklist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-cyan-500" />
              <span className="font-medium">100+ businesses across KSA</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-cyan-500" />
              <span className="font-medium">7+ years in Saudi</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Building className="w-5 h-5 text-cyan-500" />
              <span className="font-medium">200-member team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Blocks Section - Risk Reality Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">It All Seems Fine — Until It Isn't.</h2>
            <p className="text-xl text-gray-600">
              Here's how small compliance blind spots turn into {" "}
              <span className="text-cyan-500 font-semibold">big business problems</span> — and what you can do to stop
              them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/info-media-img-03.webp"
                  alt="Business risk illustration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">1. The Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Everything looks fine... until it isn't. Even one missed setting, expired policy, or outdated employee
                  record can silently block your ability to hire, pay, or renew documents in Saudi Arabia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/accordion-img-03.webp"
                  alt="Business reality illustration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">2. The Reality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We've seen it firsthand. A healthcare firm in Riyadh couldn't onboard a new specialist because a
                  default policy hadn't been uploaded. They lost {" "}
                  <span className="text-cyan-500 font-semibold">three weeks — and the candidate.</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/advantage-img-05.webp"
                  alt="Business solution illustration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">3. The Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  The Compliance Check-Up is a {" "}
                  <span className="text-cyan-500 font-semibold">no-obligation session</span> that uncovers risks before
                  they impact your operations. You'll receive a custom insights report and checklist — no access needed.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-4 text-lg font-semibold">
              Get My Risk Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Pre-Audit Checklist Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Free Resource
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Download the Pre-Audit Checklist</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Want to gauge your GRO risk profile before speaking with us? Download our quick checklist to spot the most
              common issues across your <span className="text-cyan-500 font-semibold">Qiwa, Muqeem, Mudad</span>, and
              other compliance platforms.
            </p>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Download the Checklist
            </Button>
          </div>
        </div>
      </section>

      {/* Client Story Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">From Our Clients</h2>
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm border-l-4 border-l-blue-900">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl text-blue-900">"</span>
                  </div>
                  <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed">
                    "We thought we could manage Saudi compliance from Dubai — but it quickly became overwhelming. TASC
                    gave us clarity, speed, and peace of mind. Now, our HR team can focus on growth instead of
                    government paperwork."
                  </blockquote>

                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      A fast-growing company expanding into Saudi Arabia relied on their Dubai-based HR team to manage
                      GRO and compliance processes remotely. Without local expertise, they ran into frequent delays —
                      from stalled visa processing to confusion around GOSI and WPS registration.
                    </p>
                    <p>
                      TASC stepped in with an on-ground GRO, resolved their government registrations, and took over all
                      regulatory touchpoints. Today, the company is fully compliant, avoiding penalties, while their HR
                      team focuses on what they do best: growing the business.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">Here's How It Works</h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Compliance Check-Up (30 mins)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A short, <span className="text-cyan-500 font-semibold">no-obligation discovery call</span> to
                    understand which portals you use, your team size, and any concerns. You'll receive an insights
                    document outlining potential red flags.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Tailored Audit Proposal</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Based on the check-up, we'll recommend a deeper audit {" "}
                    <span className="text-cyan-500 font-semibold">only if needed</span> — to cover your full compliance
                    across relevant government platforms and documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Compliance Review & Action Report</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you proceed, we'll provide a {" "}
                    <span className="text-cyan-500 font-semibold">full audit report</span> with risks, misalignments,
                    and priority fixes.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-4 text-lg font-semibold">
                Get My Risk Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">Why This Matters</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Blocked Access</h3>
                <p className="text-gray-600">
                  You could lose the ability to issue visas or track {" "}
                  <span className="text-cyan-500 font-semibold">Saudization status.</span>
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expired Records</h3>
                <p className="text-gray-600">
                  <span className="text-cyan-500 font-semibold">Payroll syncing</span> and iqama renewals could fail
                  without warning.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missed Policies</h3>
                <p className="text-gray-600">
                  <span className="text-cyan-500 font-semibold">Labor compliance penalties</span> and disruptions are
                  common.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with HubSpot Form */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start With a Simple, <span className="text-cyan-400">No-Cost Check-Up</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              No commitment. No access required. Just a quick conversation to identify what's under the surface.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-6">Book Your Risk Assessment</h3>
              <div id="hubspot-form-container" className="text-left">
                {/* HubSpot form will be injected here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section with Portal Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted by Businesses Across <span className="text-cyan-500">KSA</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We've helped <span className="text-cyan-500 font-semibold">100+ companies</span> in Saudi Arabia fix
              hidden compliance risks before they escalated.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              <div className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-cyan-50 transition-colors">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-portal_icon_01-kR9NtiNW40yo9uD2xYAHE3Gb5zlhj1.png"
                  alt="Ministry of Labor"
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-cyan-50 transition-colors">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-portal_icon_02-9JByU6Yf8Pj7HUkAnTJ1VjQ7eLW0px.png"
                  alt="Muqeem"
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-cyan-50 transition-colors">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-portal_icon_03-blgqT9wy6pfQpSI4gwOHC2gcVdiA2A.png"
                  alt="Qiwa"
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-cyan-50 transition-colors">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-portal_icon_04-9MWJR6g41RL2Zmy3IZGRo0RSePtI9h.png"
                  alt="Mudad"
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-cyan-50 transition-colors">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-portal_icon_05-sfCoPmStKXJ67iLPDf4XrrlF7beP1r.png"
                  alt="GOSI"
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-cyan-50 transition-colors">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-portal_icon_06-zfgvzyt6JYEZDYX0fQtPVE0Cpv8YFX.png"
                  alt="Federation of Saudi Chambers"
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">Riyadh Office</p>
                <p>Top Talent Consulting Ltd.</p>
                <p>Building 1, Office No. 4, 1st Floor</p>
                <p>Salahuddin Al Ayoubi Street, King Abdulaziz Dist.</p>
                <p>Riyadh, Saudi Arabia, P.O. Box: 11452</p>
                <p className="text-cyan-400">+966 11 216 6218</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/tascoutsourcingcorporate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="text-white/90 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/tasc_corporate_services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                  className="text-white/90 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/tasccorporateservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                  className="text-white/90 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 TASC Corporate Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 