import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "../i18n/LanguageContext"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <LanguageProvider>
          <main className="relative">{props.children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
