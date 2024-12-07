import { useGetViewerQuery } from '../lib/networking/queries/useGetViewerQuery'
import { useRouter } from 'next/router'
import { PageMetaData } from '../components/patterns/PageMetaData'
import { LoadingView } from '../components/patterns/LoadingView'
import { About } from '../components/templates/About'
import { DEFAULT_HOME_PATH } from '../lib/navigations'
import { useGetViewer } from '../lib/networking/viewer/useGetViewer'
import MarketingPage from '../components/templates/marketingPage/MarketingPage'

export default function LandingPage(): JSX.Element {
  return (
    <MarketingPage />
  )
}
