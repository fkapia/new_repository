import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  Factory,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { BrandMark } from '@/components/hydraulics-landing'

const contractFacts = [
  { label: 'Client', value: 'Kamoa Copper SA' },
  { label: 'Site', value: 'Kamoa-Kakula · Lualaba' },
  { label: 'Contrat', value: 'Hydraulic Hoses Services & Fittings' },
]

const contractServices = [
  'Approvisionnement, assemblage et maintenance des circuits de fluides.',
  'Installation d\'ateliers de sertissage fixes ou mobiles au plus près des opérations.',
  'Remplacement des flexibles et maintenance des équipements pour limiter les arrêts de production.',
]

const otherReferences = [
  { name: 'KCS DRC', sector: 'Sous-traitance minière · Katanga', since: 'Partenaire depuis 2015' },
  { name: 'Mining Solution Group', sector: 'Solutions industrielles · RDC', since: 'Partenaire depuis 2019' },
]

function ReferenceEmergencyStrip() {
  return (
    <div className="emergency-strip reference-emergency-strip">
      <span className="availability-dot" aria-hidden="true" />
      <span>Assistance hydraulique, jour et nuit</span>
      <span className="strip-divider" aria-hidden="true">/</span>
      <a href="tel:+243975146361">+243 975 146 361</a>
      <span className="strip-location">Lubumbashi · Kolwezi</span>
    </div>
  )
}

function ReferenceHeader() {
  return (
    <header className="site-header reference-header">
      <div className="header-inner">
        <BrandMark homeHref="/" />
        <nav className="primary-nav" aria-label="Navigation principale">
          <Link href="/">Accueil</Link>
          <Link href="/#solutions">Solutions</Link>
          <Link href="/#engagements">Nos engagements</Link>
          <Link href="/references" aria-current="page">Références</Link>
          <Link className="nav-contact" href="/#contact">Parlons de votre site <ArrowUpRight size={15} /></Link>
        </nav>
      </div>
    </header>
  )
}

function ReferenceHero() {
  return (
    <section className="reference-hero" aria-labelledby="reference-title">
      <div className="reference-hero-grid">
        <div className="reference-hero-copy">
          <nav className="reference-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link><span aria-hidden="true">/</span><span>Références</span>
          </nav>
          <p className="reference-eyebrow"><span /> Nos références industrielles</p>
          <h1 id="reference-title">Kamoa Copper confie ses services de flexibles hydrauliques à Macken Pices.</h1>
          <p className="reference-lead">Un contrat de sous-traitance signé avec Kamoa Copper SA, dans le cadre du programme ARSP, pour accompagner la performance des circuits hydrauliques de Kamoa-Kakula.</p>
          <div className="reference-meta">
            <span><CalendarDays size={15} /> 20 septembre 2024</span>
            <i aria-hidden="true" />
            <span><MapPin size={15} /> Kamoa-Kakula, Lualaba (RDC)</span>
          </div>
        </div>
        <aside className="reference-facts" aria-label="Informations sur le contrat">
          <div className="reference-facts-heading"><span className="reference-facts-icon"><Factory size={19} /></span><span>LE CONTRAT EN BREF</span></div>
          {contractFacts.map(({ label, value }) => (
            <div className="reference-fact" key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
          <div className="reference-facts-foot"><span className="availability-dot" /> Sous-traitance congolaise · Programme ARSP</div>
        </aside>
      </div>
      <span className="reference-hero-index" aria-hidden="true">MP / RÉF. 01</span>
    </section>
  )
}

function ContractArticle() {
  return (
    <section className="reference-story" aria-label="Détails de la référence Kamoa Copper">
      <div className="reference-story-layout">
        <article className="reference-article">
          <figure className="reference-figure">
            <Image
              src="/hydraulics-hero.png"
              alt="Technicien intervenant sur un flexible hydraulique d'un équipement minier."
              width={1376}
              height={768}
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 90vw, 760px"
            />
            <figcaption><span /> Intervention hydraulique en environnement minier — image d'illustration.</figcaption>
          </figure>

          <div className="reference-article-body">
            <p className="reference-intro-paragraph">L'accord, conclu sous l'égide de l'ARSP (Autorité de Régulation de la Sous-Traitance dans le Secteur Privé), porte sur les services de flexibles hydrauliques de la mine de Kamoa-Kakula. Il illustre la place croissante des sous-traitants congolais dans la chaîne de valeur des grandes entreprises minières.</p>

            <h2>Un contrat au cœur de la performance de la mine</h2>
            <p>D'intitulé officiel <strong>« Hydraulic Hoses Services &amp; Fittings »</strong> (fourniture et services de flexibles hydrauliques), le contrat prévoit notamment :</p>
            <ul className="reference-check-list">
              {contractServices.map((service) => <li key={service}><span><Check size={13} strokeWidth={3} /></span>{service}</li>)}
            </ul>

            <h2>Durée et exigences de performance</h2>
            <p>Les contrats cadres de cette vague d'attribution peuvent s'étendre jusqu'à <strong>trois ans</strong>, généralement sous forme de contrats de 12 mois renouvelables après audit de performance.</p>
            <p>Les exigences de résultat portent sur la disponibilité des équipes de maintenance pour le remplacement des flexibles, avec un objectif opérationnel clair : réduire au maximum le temps d'arrêt des machines d'extraction.</p>

            <aside className="reference-highlight">
              <span className="reference-highlight-icon"><Clock3 size={19} /></span>
              <p><strong>La continuité au plus près des opérations.</strong> Les modalités d'intervention et d'astreinte sont définies selon le dispositif déployé sur chaque site. L'astreinte 24/7 s'applique aux sites équipés d'un atelier Macken Pices.</p>
            </aside>

            <h2>Une signature marquante pour la sous-traitance congolaise</h2>
            <p>Cette attribution s'inscrit dans le programme d'accompagnement de l'ARSP, qui facilite l'accès des sous-traitants congolais aux marchés des grandes entreprises minières. Au total, <strong>22 entreprises congolaises</strong> ont signé cette vague de contrats.</p>
            <p>Le directeur général de l'ARSP a rappelé l'importance de faire vivre ces partenariats dans la durée :</p>
            <blockquote>
              <p>« Il ne suffit pas d'avoir un contrat, il faut aussi le maintenir. Aujourd'hui, les entreprises minières font confiance aux sous-traitants congolais grâce aux efforts du chef de l'État. Il faut garder cette confiance et la maintenir le plus longtemps possible. Que Dieu bénisse ces entrepreneurs. »</p>
              <cite>Directeur général de l'ARSP</cite>
            </blockquote>
            <p>Annabelle Oosthuizen, administratrice de Kamoa Copper, a également souligné la place de la chaîne d'approvisionnement et des entrepreneurs locaux dans le développement du secteur :</p>
            <blockquote>
              <p>« Le domaine dans lequel les sociétés minières ont la possibilité de croître dans ce pays, c'est la chaîne d'approvisionnement. Les contrats que nous signons aujourd'hui sont des contrats d'une durée de 3 ans. Je suis contente de signer ce contrat avec ces entrepreneurs que je connais, qui vont participer au destin d'une mine qui a une durée de vie de 42 ans. Et même vos enfants pourront en bénéficier. »</p>
              <cite>Annabelle Oosthuizen — Administratrice, Kamoa Copper</cite>
            </blockquote>
            <p>Macken Pices s'inscrit dans cette dynamique aux côtés des acteurs miniers du Lualaba, avec un engagement constant : la performance technique, la conformité HSE et la fiabilité des interventions.</p>
          </div>
        </article>

        <aside className="reference-sidebar" aria-label="Repères de la référence">
          <div className="reference-sidebar-card">
            <p className="reference-sidebar-kicker">NOTRE INTERVENTION</p>
            <h2>Des composants critiques, au bon endroit.</h2>
            <ul>
              <li><Wrench size={16} /> Flexibles &amp; raccords</li>
              <li><Factory size={16} /> Ateliers de sertissage sur site</li>
              <li><ShieldCheck size={16} /> Maintenance des circuits</li>
            </ul>
            <Link href="/#solutions">Découvrir nos solutions <ArrowRight size={15} /></Link>
          </div>
          <div className="reference-sidebar-note"><BadgeCheck size={17} /><p>Une collaboration inscrite dans le programme de sous-traitance de l'ARSP.</p></div>
        </aside>
      </div>
    </section>
  )
}

function MoreReferences() {
  return (
    <section className="reference-partners" aria-labelledby="reference-partners-title">
      <div className="reference-container">
        <div className="reference-section-topline"><span>ILS NOUS FONT CONFIANCE</span><span>Industrie &amp; mines · Grand Katanga</span></div>
        <div className="reference-partners-heading">
          <div><p className="reference-eyebrow reference-eyebrow-light">DES PARTENARIATS DE TERRAIN</p><h2 id="reference-partners-title">Une confiance qui se construit dans la durée.</h2></div>
          <p>Aux côtés des acteurs miniers et industriels, Macken Pices mobilise son expertise hydraulique au service des opérations en RDC.</p>
        </div>
        <div className="reference-partner-grid">
          <article className="reference-partner-card reference-partner-featured"><span className="reference-partner-number">01</span><span className="reference-partner-category">MINE DE CUIVRE · LUALABA</span><h3>Kamoa Copper SA</h3><p>Flexibles hydrauliques, ateliers de sertissage sur site et maintenance des circuits de fluides.</p><span className="reference-partner-note">Contrat signé en 2024</span></article>
          {otherReferences.map(({ name, sector, since }, index) => (
            <article className="reference-partner-card" key={name}><span className="reference-partner-number">0{index + 2}</span><span className="reference-partner-category">{sector}</span><h3>{name}</h3><p>Prestations hydrauliques et accompagnement technique au service des opérations industrielles et minières.</p><span className="reference-partner-note">{since}</span></article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReferenceCallToAction() {
  return (
    <section className="reference-cta" id="contact" aria-labelledby="reference-cta-title">
      <div className="reference-cta-inner">
        <div><p className="reference-eyebrow">VOTRE PROCHAINE ÉTAPE</p><h2 id="reference-cta-title">Parlons de votre exploitation.</h2><p>Besoin de flexibles, d'un atelier de sertissage ou d'un accompagnement maintenance ? Échangeons sur vos contraintes de site.</p></div>
        <div className="reference-cta-actions"><Link className="reference-cta-primary" href="/#contact">Nous contacter <ArrowRight size={16} /></Link><a className="reference-cta-secondary" href="tel:+243975146361"><Phone size={16} /> +243 975 146 361</a></div>
      </div>
    </section>
  )
}

function ReferenceFooter() {
  return (
    <footer className="reference-footer">
      <div className="reference-footer-inner"><div className="reference-footer-brand"><BrandMark light homeHref="/" /><p>Solutions hydrauliques industrielles<br />République Démocratique du Congo</p></div><a className="reference-footer-top" href="#top">Retour en haut <ArrowUpRight size={14} /></a></div>
      <div className="reference-footer-bottom"><span>© {new Date().getFullYear()} Macken Pices S.A.R.L.</span><span>Engineering · Construction</span></div>
    </footer>
  )
}

export function ReferenceArticlePage() {
  return (
    <main className="reference-page" id="top">
      <ReferenceEmergencyStrip />
      <ReferenceHeader />
      <ReferenceHero />
      <ContractArticle />
      <MoreReferences />
      <ReferenceCallToAction />
      <ReferenceFooter />
    </main>
  )
}

export default ReferenceArticlePage
