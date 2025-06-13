"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function HubSpotScript() {
  useEffect(() => {
    const initializeForm = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "20309062",
          formId: "79767128-8f1c-45b3-81f2-d019b6176bda",
          region: "na1",
          target: "#hubspot-form-container",
        })
      }
    }

    // Check if HubSpot script is already loaded
    // @ts-ignore
    if (window.hbspt) {
      initializeForm()
    } else {
      // Wait for script to load
      const checkHubSpot = setInterval(() => {
        // @ts-ignore
        if (window.hbspt) {
          clearInterval(checkHubSpot)
          initializeForm()
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkHubSpot), 10000)
    }
  }, [])

  return <Script src="//js.hsforms.net/forms/embed/v2.js" strategy="afterInteractive" />
} 