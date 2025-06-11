import { Shield, AlertTriangle, FileText, Users, Clock, ArrowRight, Download, Phone, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function GROAuditLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/hero-slider-img-01.webp"
            alt="Business professionals in Saudi Arabia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-blue-900/95"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-36 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">Quick Compliance Check</h3>
                <div className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 text-lg"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 text-lg"
                  />
                  <Input
                    placeholder="Company Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 text-lg"
                  />
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-4 text-lg font-semibold transition-all duration-300">
                    Get My Risk Assessment
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-white space-y-10 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-200 px-6 py-3 rounded-full text-sm font-medium">
                <AlertTriangle className="w-5 h-5" />
                Compliance Risk Alert
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Is Your Compliance Putting Your <span className="text-yellow-400">Business at Risk?</span>
              </h1>

              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                One missed policy or misaligned record could quietly block your hiring, payroll, or visa approvals — and
                may even result in fines or compliance penalties.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-10 py-6 text-lg font-semibold transition-all duration-300">
                  <Phone className="w-6 h-6 mr-3" />
                  Book Your Compliance Check-Up
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-10 py-6 text-lg font-semibold transition-all duration-300"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Checklist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
            <div className="flex items-center gap-3 text-gray-600">
              <Users className="w-6 h-6 text-yellow-500" />
              <span className="font-medium text-lg">100+ businesses across KSA</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Clock className="w-6 h-6 text-yellow-500" />
              <span className="font-medium text-lg">7+ years in Saudi</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Building className="w-6 h-6 text-yellow-500" />
              <span className="font-medium text-lg">200-member team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Blocks Section - Risk Reality Solution */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">It All Seems Fine — Until It Isn't.</h2>
            <p className="text-xl text-gray-600">
              Here's how small compliance blind spots turn into big business problems — and what you can do to stop
              them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">1. The Risk</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Everything looks fine... until it isn't. Even one missed setting, expired policy, or outdated employee
                  record can silently block your ability to hire, pay, or renew documents in Saudi Arabia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">2. The Reality</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  We've seen it firsthand. A healthcare firm in Riyadh couldn't onboard a new specialist because a
                  default policy hadn't been uploaded. They lost three weeks — and the candidate.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">3. The Solution</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  The Compliance Check-Up is a no-obligation session that uncovers risks before they impact your
                  operations. You'll receive a custom insights report and checklist — no access needed.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-12 py-6 text-lg font-semibold transition-all duration-300">
              Get My Risk Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Pre-Audit Checklist Section */}
      <section className="py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <FileText className="w-5 h-5" />
              Free Resource
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Download the Pre-Audit Checklist</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Want to gauge your GRO risk profile before speaking with us? Download our quick checklist to spot the most
              common issues across your Qiwa, Muqeem, Mudad, and other compliance platforms.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-12 py-6 text-lg font-semibold transition-all duration-300">
              <Download className="w-6 h-6 mr-3" />
              Download the Checklist
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardContent className="p-12 lg:p-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-5xl text-yellow-600">"</span>
                  </div>
                  <blockquote className="text-2xl lg:text-3xl text-gray-700 italic leading-relaxed mb-8">
                    "We thought we were compliant with Saudization requirements — but during the check-up, the team
                    flagged that several of our job roles had different, stricter targets. We had no idea. Thanks to the
                    audit, we caught and corrected the gaps before being penalized. It saved us from a significant fine
                    and ensured we stayed on track."
                  </blockquote>
                  <div className="flex items-center justify-center gap-3 text-gray-500">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium text-lg">Healthcare Company, Riyadh</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-20">Here's How It Works</h2>

            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-2xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Check-Up (30 mins)</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    A short, no-obligation discovery call to understand which portals you use, your team size, and any
                    concerns. You'll receive an insights document outlining potential red flags.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-2xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tailored Audit Proposal</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Based on the check-up, we'll recommend a deeper audit only if needed — to cover your full compliance
                    across relevant government platforms and documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-2xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Review & Action Report</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    If you proceed, we'll provide a full audit report with risks, misalignments, and priority fixes.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-16">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-12 py-6 text-lg font-semibold transition-all duration-300">
                Get My Risk Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">Why This Matters</h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blocked Access</h3>
                <p className="text-gray-600 text-lg">You could lose the ability to issue visas or track Saudization status.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expired Records</h3>
                <p className="text-gray-600 text-lg">Payroll syncing and iqama renewals could fail without warning.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Missed Policies</h3>
                <p className="text-gray-600 text-lg">Labor compliance penalties and disruptions are common.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Start With a Simple, No-Cost Check-Up</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              No commitment. No access required. Just a quick conversation to identify what's under the surface.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-16 py-6 text-lg font-semibold transition-all duration-300">
              <Phone className="w-6 h-6 mr-3" />
              Book My Compliance Check-Up
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Trusted by Businesses Across KSA</h2>
            <p className="text-xl text-gray-600 mb-16">
              We've helped 100+ companies in Saudi Arabia fix hidden compliance risks before they escalated.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center opacity-60">
              <div className="bg-gray-100 rounded-xl p-8 h-24 flex items-center justify-center hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-gray-600 text-lg">QIWA</span>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 h-24 flex items-center justify-center hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-gray-600 text-lg">MUQEEM</span>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 h-24 flex items-center justify-center hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-gray-600 text-lg">MUDAD</span>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 h-24 flex items-center justify-center hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-gray-600 text-lg">GOSI</span>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 h-24 flex items-center justify-center hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-gray-600 text-lg">ABSHER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg">© 2024 TASC Corporate Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 