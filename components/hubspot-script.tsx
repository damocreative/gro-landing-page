"use client"

import { useEffect } from "react"
import Script from "next/script"

interface HubSpotScriptProps {
  target?: string
}

export default function HubSpotScript({ target = "#hubspot-form-container" }: HubSpotScriptProps) {
  useEffect(() => {
    const initializeForm = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "20309062",
          formId: "b90fc151-8d37-448f-b499-c72440ae44c2",
          region: "na1",
          target,
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
  }, [target])

  return <Script src="//js.hsforms.net/forms/embed/v2.js" strategy="afterInteractive" />
} 