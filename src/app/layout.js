import '../styles/globals.css';
import Header from "@/components/Header";
import FooterContainer from '@/components/Footer/FooterContainer';

function RootLayout({ children }) {
  return (
      <div>
        <Header />
          <main className="flex-grow">{children}</main>
        <FooterContainer />
      </div>
  );
}

export default RootLayout;
