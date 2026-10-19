import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

  const contractScope = [
    'L’approvisionnement, l’assemblage des flexibles et raccords, ainsi que la maintenance critique des circuits de fluides.',
    'Le déploiement d’ateliers de sertissage dédiés, configurés en unités fixes ou mobiles pour intervenir au plus près des infrastructures minières.',
    "Une réactivité technique continue, assurée par des équipes d'experts prêtes à intervenir pour minimiser les arrêts de production.",
  ]

function ReferencesHeader() {
  return (
    <>
      <div className="emergency-strip">
        <span className="availability-dot" aria-hidden="true" />
        <span>Assistance hydraulique</span>
  <span aria-hidden="true">?</span>
  <a className="strip-call-link" href="tel:+243975146361" aria-label="Appelez-nous au +243 975 146 361"><Phone size={12} aria-hidden="true" /> Appelez-nous</a>
        <span className="strip-divider" aria-hidden="true">·</span>
        <a className="strip-whatsapp-link" href="https://wa.me/243975146361" target="_blank" rel="noopener noreferrer" aria-label="Écrire sur WhatsApp au +243 975 146 361"><MessageCircle size={12} aria-hidden="true" /> WhatsApp</a>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Macken Pices SARL, accueil">
            <span className="brand-copy"><strong>MACKEN PICES SARL</strong><span>ENGINEERING – CONSTRUCTION</span></span>
          </Link>
          <nav className="primary-nav" aria-label="Navigation principale">
          <Link href="/#accueil">Accueil</Link>
          <Link href="/engagements">Nos engagements</Link>
          <Link href="/references" aria-current="page">Nos références</Link>
          <Link className="nav-contact" href="/#contact">Parlons de votre besoin <ArrowUpRight size={15} /></Link>
          </nav>
        </div>
      </header>
    </>
  )
}

function ReferencesFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="brand brand-light" href="/" aria-label="Macken Pices SARL, accueil">
          <span className="brand-copy"><strong>MACKEN PICES SARL</strong><span>ENGINEERING – CONSTRUCTION</span></span>
        </Link>
        <p>Solutions hydrauliques industrielles<br />République Démocratique du Congo</p>
        <Link href="#page-top">Retour en haut <ArrowUpRight size={14} /></Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Macken Pices S.A.R.L.</span>
        <span>Engineering · Construction</span>
      </div>
    </footer>
  )
}

export function ReferencesPage() {
  return (
    <main className="reference-page" id="page-top">
      <ReferencesHeader />

      <section className="reference-hero" aria-labelledby="reference-title">
        <div className="reference-hero-inner">
          <div className="reference-breadcrumb"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span>Références</span></div>
          <p className="reference-eyebrow"><span /> Une référence industrielle</p>
          <h1 id="reference-title">Kamoa Copper confie ses services de flexibles hydrauliques à Macken Pices.</h1>
          <p className="reference-lead">Un partenariat au service de la disponibilité des équipements miniers, avec des prestations hydrauliques pensées pour les réalités du terrain.</p>
          <div className="reference-meta">
            <span><CalendarDays size={15} aria-hidden="true" /> 20 septembre 2024</span>
            <span className="reference-meta-divider" aria-hidden="true" />
            <span><MapPin size={15} aria-hidden="true" /> Kamoa-Kakula · Lualaba, RDC</span>
          </div>
        </div>
        <span className="reference-hero-index" aria-hidden="true">MP / RÉF. 01</span>
      </section>

      <section className="reference-article" aria-label="Détail de la référence Kamoa Copper">
        <div className="reference-article-layout">
          <div className="reference-story">
            <figure className="reference-figure">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kamoa-signature-2024-wrRXQ7iTNA3ReLmrgvsglI7yxdgmZf.jpg"
                alt="Les représentants de Kamoa Copper et de Macken Pices S.A.R.L. signent leur contrat, en présence de l’ARSP."
                width={1000}
                height={667}
                priority
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 88vw, 820px"
              />
              <figcaption>Signature du contrat entre Kamoa Copper et Macken Pices S.A.R.L., sous l’égide de l’ARSP.</figcaption>
            </figure>

            <div className="reference-prose">
              <p className="reference-intro">Le 20 septembre 2024, Macken Pices s.a.r.l. a signé un contrat de sous-traitance avec Kamoa Copper SA, filiale d’Ivanhoe Mines, dans la province du Lualaba. L’accord porte sur les services de flexibles hydrauliques de la mine de Kamoa-Kakula.</p>
              <p>Conclu sous l’égide de l’Autorité de Régulation de la Sous-Traitance dans le Secteur Privé (ARSP), ce contrat illustre la contribution des entreprises congolaises aux opérations des grandes entreprises minières.</p>

              <div className="reference-section-heading">
                <span className="reference-section-number">01</span>
                <div><p className="reference-kicker">SUR LE TERRAIN</p><h2>Des services au cœur des opérations</h2></div>
              </div>
              <p>Le contrat « Hydraulic Hoses Services &amp; Fittings » englobe la fourniture et l’entretien technique des circuits hydrauliques. La prestation couvre notamment :</p>
              <ul className="reference-scope-list">
                {contractScope.map((item) => <li key={item}><ShieldCheck size={18} aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
              <p>Des ateliers de sertissage fixes ou mobiles peuvent être installés directement sur site afin de rapprocher les équipements, les composants et l’équipe des opérations minières.</p>

              <aside className="reference-highlight">
                <span className="reference-highlight-icon"><Wrench size={20} aria-hidden="true" /></span>
                <p>Conçue sur mesure pour la mine de Kamoa-Kakula, cette présence de proximité rapproche les composants stratégiques des zones d’extraction. L’objectif : réduire de manière significative le temps d’immobilisation des engins.</p>
              </aside>

              <div className="reference-section-heading">
                <span className="reference-section-number">02</span>
                <div><p className="reference-kicker">FIABILITÉ &amp; PERFORMANCE</p><h2>La disponibilité comme exigence</h2></div>
              </div>
              <p>La prestation s’inscrit dans un environnement où la disponibilité technique des équipes et la réactivité sur les flexibles participent à la continuité des opérations. Les modalités d’intervention et les indicateurs de performance sont définis avec le périmètre du contrat et les exigences du site.</p>
              <p>Le gabarit fourni indique que les contrats cadres de cette vague pouvaient s’étendre jusqu’à trois ans, généralement sous forme de périodes de 12 mois renouvelables après audit de performance.</p>
              <blockquote className="reference-quote">
                <p>« Il ne suffit pas d’avoir un contrat, il faut aussi le maintenir. Aujourd’hui, les entreprises minières font confiance aux sous-traitants congolais grâce aux efforts du chef de l’État. Il faut garder cette confiance et la maintenir le plus longtemps possible. »</p>
                <cite>Directeur général de l’ARSP</cite>
              </blockquote>

              <div className="reference-section-heading">
                <span className="reference-section-number">03</span>
                <div><p className="reference-kicker">SOUS-TRAITANCE CONGOLAISE</p><h2>Une confiance à faire durer</h2></div>
              </div>
              <p>Cette signature s’inscrit dans une dynamique d’intégration des sous-traitants congolais au sein de la chaîne d’approvisionnement minière. Le gabarit indique que 22 entreprises congolaises ont signé cette vague de contrats. Pour Macken Pices, la confiance se construit dans la durée : par la qualité technique, la conformité aux exigences HSE du site et la fiabilité des interventions.</p>
              <blockquote className="reference-quote">
                <p>« Le domaine dans lequel les sociétés minières ont la possibilité de croître dans ce pays, c’est la chaîne d’approvisionnement. Les contrats que nous signons aujourd’hui sont des contrats d’une durée de 3 ans. Je suis contente de signer ce contrat avec ces entrepreneurs que je connais, qui vont participer au destin d’une mine qui a une durée de vie de 42 ans. »</p>
                <cite>Annabelle Oosthuizen — Administratrice, Kamoa Copper</cite>
              </blockquote>
            </div>
          </div>

          <aside className="reference-aside" aria-label="Résumé du contrat">
            <p className="reference-aside-label">EN BREF</p>
            <h2>Une référence de terrain.</h2>
            <dl>
              <div><dt>Client</dt><dd>Kamoa Copper SA</dd></div>
              <div><dt>Activité</dt><dd>Mine de cuivre</dd></div>
              <div><dt>Localisation</dt><dd>Kamoa-Kakula, Lualaba</dd></div>
              <div><dt>Expertise</dt><dd>Flexibles hydrauliques &amp; maintenance</dd></div>
              <div><dt>Cadre</dt><dd>Sous-traitance sous l’égide de l’ARSP</dd></div>
            </dl>
            <Link className="reference-aside-link" href="/#contact">Parlons de votre site <ArrowRight size={16} /></Link>
          </aside>
        </div>
      </section>

      <section className="reference-partners" aria-labelledby="reference-partners-title">
        <div className="reference-partners-inner">
          <div className="reference-partners-heading">
            <div><p className="reference-kicker">ILS NOUS FONT CONFIANCE</p><h2 id="reference-partners-title">Des partenariats de terrain.</h2></div>
            <p>Des collaborations dans les secteurs minier et industriel, au service des opérations en RDC.</p>
          </div>
          <div className="reference-partner-grid">
            <article className="reference-partner-card reference-partner-featured"><span className="reference-partner-category">MINE DE CUIVRE · LUALABA</span><h3>Kamoa Copper SA</h3><p>Contrat « Hydraulic Hoses Services &amp; Fittings » : flexibles hydrauliques, ateliers de sertissage et maintenance des circuits.</p><span className="reference-partner-note">Contrat signé en 2024</span></article>
            <article className="reference-partner-card"><span className="reference-partner-category">SOUS-TRAITANCE MINIÈRE · KATANGA</span><h3>KCS DRC</h3><p>Prestations hydrauliques et maintenance d’équipements au service des opérations minières de la région.</p><span className="reference-partner-note">Partenaire depuis 2015</span></article>
            <article className="reference-partner-card"><span className="reference-partner-category">SOLUTIONS INDUSTRIELLES · RDC</span><h3>Mining Solution Group</h3><p>Accompagnement technique et solutions hydrauliques pour les exploitations industrielles et minières.</p><span className="reference-partner-note">Partenaire depuis 2019</span></article>
          </div>
        </div>
      </section>

      <section className="reference-cta" aria-labelledby="reference-cta-title">
        <div className="reference-cta-inner">
          <div><p className="reference-kicker">VOTRE PROCHAINE ÉTAPE</p><h2 id="reference-cta-title">Un besoin hydraulique sur site ?</h2><p>Flexibles, atelier de sertissage ou maintenance : échangeons sur les contraintes de votre exploitation.</p></div>
          <div className="reference-cta-actions">
            <Link className="button button-yellow" href="/#contact">Parlons de votre projet <ArrowRight size={16} /></Link>
            <a className="reference-phone-link" href="tel:+243975146361"><Phone size={15} aria-hidden="true" /> +243 975 146 361</a>
            <a className="whatsapp-link" href="https://wa.me/243975146361" target="_blank" rel="noopener noreferrer" aria-label="Écrire sur WhatsApp au +243 975 146 361"><MessageCircle size={15} aria-hidden="true" /> WhatsApp</a>
          </div>
        </div>
      </section>
      <ReferencesFooter />
    </main>
  )
}
