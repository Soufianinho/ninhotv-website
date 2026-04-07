import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NinhoTV - Best IPTV UK Service | 33,000+ Live Channels",
  description: "Get the best IPTV service in UK with 33,000+ live channels and 150,000+ movies. Fast UK servers, 24/7 support, HD quality. Start your free trial today!",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

// Advanced matching data collection
function getAdvancedMatchingData() {
  const data = {};
  
  // Try to get user data from localStorage
  if (typeof window !== 'undefined') {
    try {
      const email = localStorage.getItem('user_email') || localStorage.getItem('email');
      if (email) data.em = email;
      
      const phone = localStorage.getItem('user_phone') || localStorage.getItem('phone');
      if (phone) data.ph = phone;
      
      const firstName = localStorage.getItem('user_firstname') || localStorage.getItem('first_name');
      if (firstName) data.fn = firstName;
      
      const lastName = localStorage.getItem('user_lastname') || localStorage.getItem('last_name');
      if (lastName) data.ln = lastName;
      
      // Country detection from timezone
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timezoneCountryMap = {
        'Europe/London': 'GB', 'Europe/Paris': 'FR', 'Europe/Madrid': 'ES',
        'Europe/Amsterdam': 'NL', 'Europe/Berlin': 'DE', 'Asia/Riyadh': 'SA',
        'Asia/Dubai': 'AE', 'Africa/Cairo': 'EG', 'Africa/Casablanca': 'MA',
        'America/New_York': 'US', 'America/Los_Angeles': 'US'
      };
      
      if (timezoneCountryMap[timeZone]) {
        data.country = timezoneCountryMap[timeZone];
      }
    } catch (error) {
      console.warn('Error collecting advanced matching data:', error);
    }
  }
  
  return data;
}

// Initialize pixel with advanced matching
const advancedData = getAdvancedMatchingData();
fbq('init', '1677283240099442', advancedData);
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1677283240099442&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {/* Snap Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');

snaptr('init', '32960c97-92f4-4917-978b-0b6458e35826', {});

snaptr('track', 'PAGE_VIEW');`,
          }}
        />
        {/* End Snap Pixel Code */}
        
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vlx7crw4o4");`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
