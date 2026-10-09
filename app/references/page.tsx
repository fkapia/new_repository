import type { Metadata } from 'next'
import { ReferencesPage } from '@/components/references-page'

export const metadata: Metadata = {
  title: 'Référence Kamoa Copper | Macken Pices',
  description:
    'Découvrez la référence de Macken Pices auprès de Kamoa Copper SA : services de flexibles hydrauliques et maintenance sur site au Lualaba.',
  openGraph: {
    title: 'Kamoa Copper confie ses services hydrauliques à Macken Pices',
    description:
      'Une référence industrielle de Macken Pices au service des opérations minières du Lualaba.',
    type: 'article',
    locale: 'fr_CD',
  },
}

export default function Page() {
  return <ReferencesPage />
}

export const revalidate = false
