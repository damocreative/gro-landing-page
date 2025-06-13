import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import HubSpotScript from "./components/hubspot-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GRO Compliance Check-Up | TASC Corporate Services",
  description: "Uncover hidden compliance risks before they impact your business operations in Saudi Arabia.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* HubSpot Form Styling */
          .hs-form-field {
            margin-bottom: 16px !important;
          }
          .hs-form-field label {
            color: white !important;
            font-family: inherit !important;
            font-size: 14px !important;
            margin-bottom: 6px !important;
            display: block !important;
          }
          .hs-input {
            background-color: rgba(255, 255, 255, 0.2) !important;
            border: 1px solid rgba(255, 255, 255, 0.3) !important;
            border-radius: 6px !important;
            color: white !important;
            font-family: inherit !important;
            font-size: 16px !important;
            height: 48px !important;
            padding: 8px 12px !important;
            width: 100% !important;
            transition: all 0.2s ease-in-out !important;
          }
          .hs-input:focus {
            outline: none !important;
            border-color: rgba(255, 255, 255, 0.5) !important;
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2) !important;
          }
          .hs-input::placeholder {
            color: rgba(255, 255, 255, 0.7) !important;
          }
          .hs-button {
            background-color: rgb(56, 189, 248) !important; /* cyan-400 */
            border: none !important;
            border-radius: 6px !important;
            color: rgb(17, 24, 39) !important; /* gray-900 */
            cursor: pointer !important;
            font-family: inherit !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            height: 48px !important;
            padding: 8px 16px !important;
            width: 100% !important;
            transition: all 0.2s ease-in-out !important;
            margin-top: 8px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .hs-button:hover {
            background-color: rgb(6, 182, 212) !important; /* cyan-500 */
          }
          .hs-error-msg {
            color: rgb(252, 165, 165) !important; /* red-300 */
            font-size: 14px !important;
            margin-top: 4px !important;
          }
          .submitted-message {
            color: white !important;
            font-family: inherit !important;
            font-size: 16px !important;
            text-align: center !important;
            padding: 16px !important;
            background-color: rgba(16, 185, 129, 0.2) !important; /* green-500 with opacity */
            border-radius: 6px !important;
            border: 1px solid rgba(16, 185, 129, 0.3) !important;
          }
          /* Fix for legal consent checkbox */
          .legal-consent-container .hs-form-booleancheckbox-display {
            color: white !important;
            font-size: 14px !important;
          }
          .legal-consent-container .hs-form-booleancheckbox-display input {
            margin-right: 8px !important;
          }
          /* Fix for form field spacing */
          .hs-form > .hs-form-field:not(:last-child) {
            margin-bottom: 16px !important;
          }
          /* Fix for form field groups */
          .hs-form-field > .input > .hs-fieldtype-checkbox > .inputs-list,
          .hs-form-field > .input > .hs-fieldtype-radio > .inputs-list {
            list-style: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <HubSpotScript />
      </body>
    </html>
  )
}
