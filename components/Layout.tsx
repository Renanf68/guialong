import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = ({children}) => {
  return (
    <div>
      <Head>
        <title>Guia Longevidade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;