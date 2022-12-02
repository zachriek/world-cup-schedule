import '../styles/globals.css';
import 'moment/locale/id';
import { Footer } from './components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <main className="container min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
