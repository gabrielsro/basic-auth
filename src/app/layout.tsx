import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basic Auth",
  description: "Exploring next auth",
};

function TopNav() {
  return (
    <nav className="flex w-full itemx-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-4">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
