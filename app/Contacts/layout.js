export const metadata = {
  title: "Contacts",
  description: "Creating resume using react app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
