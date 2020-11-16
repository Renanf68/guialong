import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import Seo from '../components/Seo'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <Seo 
            metaDescription="Encontre moradia para idosos na sua região."
            title="Guia Longevidade"
            author="@renan_costa_m"
            canonical_url="https://guialongevidade.vercel.app/"
            keywords={[
              "Moradias para idosos", "casas de repouso"
            ]}  
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" 
            rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
