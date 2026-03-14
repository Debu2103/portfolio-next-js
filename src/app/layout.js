import "./globals.css";

export const metadata = {
  title: "Debaroon Deb Roy | Full Stack Developer",
  description:
    "Portfolio of Debaroon Deb Roy — Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Currently building enterprise solutions at OmniMinds Consulting.",
  keywords:
    "Debaroon Deb Roy, Full Stack Developer, React, TypeScript, Node.js, MERN Stack, Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
