import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard"
      />
      <body className={`${poppins.className} sm:px-5`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <GoogleAnalytics gaId="G-ED1CSSWNVC" />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
