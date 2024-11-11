import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: "Transporte Los Andes",
  description: "Llevando tus envíos a nuevos horizontes Estamos preparando algo increíble para ti. Pronto, Transporte Los Andes estará listo para ofrecerte soluciones de logística y transporte confiables y eficientes. ",
};

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MBFV2DSP" />
      <body className={montserrat.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
