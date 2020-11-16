interface SeoProps {
  canonical_url: string;
  metaDescription: string;
  title: string;
  author: string;
  keywords: string[];
}

const Seo: React.FC<SeoProps> = ({
  canonical_url, metaDescription, title, author, keywords
}) => {
  const keywordsArray = []
  const siteKeywords = [...keywordsArray, keywords].join(", ")
  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: "keywords",
      content: siteKeywords,
    },
  ]
  return (
    <>
      <link rel="canonical" href={canonical_url}></link>
      {
          metaTags.map( (meta, index) => {
            if(meta.name) {
              return <meta key={index} name={meta.name} content={meta.content} />
            } else {
              return <meta key={index} property={meta.property} content={meta.content} />
            }
          })
        }
    </>
  )

}

export default Seo