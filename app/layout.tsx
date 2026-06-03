import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudabap.com"),

  title: {
    default: "CloudABAP - RAP, ABAP Cloud, CAP & SAP BTP Tutorials",
    template: "%s | CloudABAP",
  },

  description:
    "Learn SAP RAP, ABAP Cloud, CAP, SAP BTP and S/4HANA Public Cloud through practical tutorials, code examples and real-world implementation guides.",

  keywords: [
    "SAP RAP",
    "ABAP Cloud",
    "CAP",
    "SAP BTP",
    "S/4HANA Public Cloud",
    "CDS View Entity",
    "RAP Managed Scenario",
    "SAP Technical Architect",
    "ABAP Development",
    "CloudABAP",
  ],

  authors: [
    {
      name: "Syed Shadab Hussain",
      url: "https://cloudabap.com",
    },
  ],

  creator: "Syed Shadab Hussain",
  publisher: "CloudABAP",

  openGraph: {
    title: "CloudABAP - RAP, ABAP Cloud, CAP & SAP BTP Tutorials",
    description:
      "SAP RAP, ABAP Cloud, CAP, SAP BTP and S/4HANA Public Cloud tutorials with practical examples and implementation guidance.",
    url: "https://cloudabap.com",
    siteName: "CloudABAP",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CloudABAP",
    description:
      "SAP RAP, ABAP Cloud, CAP, SAP BTP and S/4HANA Public Cloud Tutorials",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
