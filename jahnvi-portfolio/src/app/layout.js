import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {
      
        <body>
          {children}
        </body>
      /* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
    </html>
  );
}
