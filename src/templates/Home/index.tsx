import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My trips"
        description="Um simples projeto que mostra minhas viagens pelas praias do nordeste."
        canonical="https://my-trips.jeffersonbrandao.com.br"
        openGraph={{
          url: 'https://my-trips.jeffersonbrandao.com.br',
          title: 'My Trips',
          description:
            'Um simples projeto que mostra minhas viagens pelas praias do nordeste.',
          images: [
            {
              url: 'https://my-trips.jeffersonbrandao.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
