export const metadata = {
  title: "Apex Gym Hub API Server",
  description: "Bespoke SaaS operational core",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#09090b", color: "#f4f4f5", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
