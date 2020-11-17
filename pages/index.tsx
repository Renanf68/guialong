import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Call from '../components/Call'

import { getCorrectDimension } from '../utils/utils'

const Home: React.FC = () => {
  const [layoutMobile, setLayoutMobile] = useState(true)
  async function getClientWidth() {
    const width = await getCorrectDimension()
    const layoutMob = width < 800 ? true : false 
    return setLayoutMobile(layoutMob)
  }
  useEffect(() => {
    getClientWidth()
    window.addEventListener("resize", getClientWidth, true)
    return window.removeEventListener("resize", getClientWidth)
  }, [])
  return (
    <Layout>
      <Hero layoutMob={layoutMobile} />
      <Call />
    </Layout>
  )
}

export default Home;
