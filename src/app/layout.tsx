import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Rohith Portfolio",
  description: "Developer portfolio website",
  icons: {
    icon: [
      {
        url: "/wolf (2).png", // rename your file to remove spaces!
        type: "image/png",
        sizes: "32x32", // ensures proper favicon size
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Toast Provider */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1f1f1f",
              color: "#fff",
              borderRadius: "8px",
              border: "1px solid #a855f7", // purple accent
            },
          }}
        />
      </body>
    </html>
  );
}
