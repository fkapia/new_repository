import type { Metadata } from 'next'
import { EngagementsPage } from '@/components/engagements-page'

export const metadata: Metadata = {
  title: 'Nos engagements qualité | Macken Pices',
  description:
    'Traçabilité complète, épreuve de pression, garantie écrite et disponibilité 24/7 contractuellement garantie : découvrez les engagements qualité de Macken Pices en RDC.',
  openGraph: {
    title: 'Nos engagements qualité | Macken Pices',
    description:
      'Chaque flexible est documenté, testé et garanti. Découvrez les engagements de Macken Pices pour vos équipements hydrauliques.',
    type: 'website',
    locale: 'fr_CD',
  },
}

export default function Page() {
  return <EngagementsPage />
}
