// app/layout.js

import './globals.css'; // Ensure global CSS is imported
import Navbar from '../components/Navbar'; // Import your Navbar component

export const metadata = {
  title: 'Dish Dash',
  description: 'A cooking video streaming platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Render the Navbar here */}
        <Navbar />
        {/* Render the rest of the page content */}
        {children}
      </body>
    </html>
  );
}
