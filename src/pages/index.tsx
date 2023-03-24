import SEO from '@/components/atoms/SEO'
import DescribeiNAZO from '@/components/organisms/top/DescribeiNAZO'
import FeatureiNAZO from '@/components/organisms/top/FeatureiNAZO'
import Links from '@/components/organisms/top/Links'
import Question from '@/components/organisms/top/Question'
import BasicLayout from '@/components/templates/BasicLayout'

const Home = () => {
  return (
    <>
      <SEO title="ホームページ" />
      <BasicLayout>
        <DescribeiNAZO sx={{ my: '5rem' }} />
        <FeatureiNAZO sx={{ my: '5rem' }} />
        <Question />
        <Links />
      </BasicLayout>
    </>
  )
}

export default Home
