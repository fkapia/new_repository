import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  Factory,
  Gauge,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react'

const services = [
  { number: '01', category: 'ÉQUIPEMENTS', title: 'Flexibles & raccords', description: 'Tuyaux et composants haute pression sélectionnés selon votre installation, avec une traçabilité de bout en bout.', detail: 'Jusqu’à 600 bars selon référence', icon: Gauge },
  { number: '02', category: 'PROXIMITÉ', title: 'Atelier sur votre site', description: 'Un atelier équipé, un stock de composants critiques et une équipe Macken Pices dédiée, directement dans vos installations.', detail: 'Astreinte 24/7 sur site équipé', icon: Wrench },
  { number: '03', category: 'PRÉVENTION', title: 'Audit & maintenance', description: 'Nous évaluons vos circuits, repérons les risques et organisons un plan de maintenance adapté à vos opérations.', detail: 'Rapport documenté', icon: ShieldCheck },
  { number: '04', category: 'DISPONIBILITÉ', title: 'Stock à demeure', description: 'Les références critiques sont déjà sur place, dimensionnées à partir de vos consommations réelles.', detail: 'Lubumbashi & Kolwezi', icon: PackageCheck },
]

export function BrandMark({ light = false, homeHref = '#accueil' }: { light?: boolean; homeHref?: string }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href={homeHref} aria-label="Macken Pices SARL, accueil">
      <span className="brand-copy"><strong>MACKEN PICES SARL</strong><span>ENGINEERING – CONSTRUCTION</span></span>
    </a>
  )
}

export function HydraulicsLanding() {
  return (
    <main>
      <div className="emergency-strip">
        <span className="availability-dot" aria-hidden="true" />
        <span>Assistance hydraulique, jour et nuit</span>
        <span className="strip-divider" aria-hidden="true">/</span>
        <a href="tel:+243975146361">+243 975 146 361</a>
        <span className="strip-location">Lubumbashi · Kolwezi</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className="primary-nav" aria-label="Navigation principale">
            <a href="#solutions">Solutions</a>
            <a href="/engagements">Nos engagements</a>
            <a href="/references">Références</a>
            <a className="nav-contact" href="#contact">Parlons de votre site <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="accueil" aria-labelledby="hero-heading">
        <div className="hero-image" role="img" aria-label="Technicien hydraulique en intervention dans un atelier minier" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> Ingénierie & Maintenance industrielle</p>
          <h1 id="hero-heading" className="hero-heading-urgent">Arrêt hydraulique ?<br />Nous intervenons en <span>moins de 30 min</span>, votre production repart.</h1>
          <p className="hero-description">Des solutions sur mesure et une logistique de proximité pensées pour garantir la continuité de votre exploitation.</p>
          <div className="hero-actions">
            <a className="button button-yellow" href="tel:+243975146361"><Phone size={17} /> Appeler l’astreinte 24/7</a>
            <a className="button button-outline" href="#solutions">Découvrir nos solutions <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-footnote"><MapPin size={15} /> Lubumbashi, Kolwezi et sites miniers en RDC</div>
        </div>

        <div className="hero-index" aria-hidden="true">MP / 01</div>
      </section>

      <section className="intro-band" aria-label="Présentation de Macken Pices">
        <div className="intro-inner">
          <div className="intro-copy">
            <div className="intro-heading"><span className="section-kicker">LA CONTINUITÉ, CONCRÈTEMENT</span><h2>Votre partenaire<br />hydraulique de terrain.</h2></div>
            <ul className="intro-benefits">
    <li><strong>In-Situ :</strong> Équipe et stock stratégique s’installent au cœur de votre exploitation.</li>
    <li><strong>Sur mesure :</strong> Interventions immédiates pensées pour vos rendements.</li>
    <li><strong>Proximité :</strong> Couverture totale depuis nos bases de Lubumbashi et Kolwezi.</li>
  </ul>
          </div>
          <aside className="intro-stat" aria-label="Astreinte et délai d’intervention adaptés à votre infrastructure">
            <span className="stat-number">24<span>/7</span></span>
            <div className="stat-copy"><strong>Astreinte et délai d’intervention adaptés à votre infrastructure.</strong></div>
          </aside>
        </div>
      </section>

      <section className="solutions-section section-wrap" id="solutions" aria-labelledby="solutions-heading">
        <div className="section-topline"><span>NOS SOLUTIONS</span><span>Conçues pour le terrain</span></div>
        <div className="section-heading-row"><div><p className="section-kicker">DE LA PIÈCE À LA PRÉSENCE SUR SITE</p><h2 id="solutions-heading">Une réponse à chaque<br />point de friction.</h2></div><p className="section-summary">Un dispositif ajusté à vos équipements, vos contraintes opérationnelles et au niveau de service attendu.</p></div>
        <div className="service-grid">
          {services.map(({ number, category, title, description, detail, icon: Icon }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top"><div className="service-card-label"><span className="service-number">{number}</span><span className="service-category">{category}</span></div><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-card-footer"><div className="service-detail"><span aria-hidden="true" />{detail}</div><a className="service-action" href="#contact" aria-label={`Discuter de votre besoin : ${title}`}>Discuter de ce besoin <ArrowRight size={16} aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
        <div className="process-strip"><div className="process-icon"><Factory size={21} /></div><p><strong>Un seul responsable : nous.</strong> Atelier dédié sur votre site, complété par nos ateliers de Lubumbashi et Kolwezi.</p><a href="#contact">Parlons de votre site <ArrowRight size={17} aria-hidden="true" /></a></div>
      </section>

      <section className="commitment-section" id="engagements" aria-labelledby="commitments-heading">
        <div className="commitment-layout section-wrap">
          <div className="commitment-copy">
            <div className="section-topline section-topline-light"><span>02 — NOS ENGAGEMENTS</span><span>La promesse, avec son périmètre</span></div>
            <h2 id="commitments-heading">De la réactivité.<br /><span>Sans raccourci.</span></h2>
            <p className="commitment-intro">Une réponse adaptée à votre infrastructure : sur les sites équipés d’un atelier de sertissage dédié, déployé contractuellement en unité fixe ou mobile, le diagnostic et la réparation s’enclenchent en moins de 30 minutes. Pour les autres sites, l’intervention est coordonnée depuis nos bases régionales.</p>
            <a className="commitment-link" href="/engagements">Voir nos engagements détaillés <ArrowRight size={16} /></a>
          </div>
          <div className="commitment-details">
            <aside className="commitment-timing" aria-label="Sur un site équipé de notre atelier, diagnostic et réparation s’enclenchent en moins de 30 minutes.">
              <div className="commitment-timing-value" aria-hidden="true"><strong>30</strong><span>MIN</span></div>
              <div className="commitment-timing-copy"><span>SUR SITE ÉQUIPÉ</span><h3>Diagnostic et réparation en moins de 30 minutes.</h3><p>Sur les sites équipés de notre atelier.</p></div>
            </aside>
            <div className="commitment-service-grid">
              <article className="commitment-service"><Factory size={20} aria-hidden="true" /><h3>Dispositif In-Situ</h3><p>Nos techniciens et pièces d’usure sont déjà intégrés à votre exploitation.</p></article>
              <article className="commitment-service"><MapPin size={20} aria-hidden="true" /><h3>Couverture régionale</h3><p>Nos hubs de Lubumbashi et Kolwezi planifient et valident une intervention rapide selon un protocole logistique strict.</p></article>
            </div>
            <ul className="commitment-assurances" aria-label="Garanties complémentaires">
              <li><Clock3 size={18} aria-hidden="true" /><span><strong>Disponibilité 24/7</strong><small>Sur les sites équipés d’un atelier.</small></span></li>
              <li><BadgeCheck size={18} aria-hidden="true" /><span><strong>Traçabilité documentée</strong><small>Composants conformes aux standards et documentation fournie.</small></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="references-section section-wrap" id="references" aria-labelledby="references-heading">
        <div className="section-topline"><span>03 — ILS NOUS FONT CONFIANCE</span><span>Industrie & mines · Grand Katanga</span></div>
        <div className="references-heading-row"><div><p className="section-kicker">UNE CONFIANCE CONSTRUITE SUR LE TERRAIN</p><h2 id="references-heading">Aux côtés des acteurs<br />qui font avancer la région.</h2></div><p>Des partenariats durables pour l’approvisionnement, l’assemblage et la maintenance de composants hydrauliques.</p></div>
        <div className="client-list" aria-label="Références clients"><div><span>KAMOA COPPER SA</span><small>Partenaire depuis 2016</small></div><div><span>KCS DRC</span><small>Partenaire depuis 2015</small></div><div><span>MINING SOLUTION GROUP</span><small>Partenaire depuis 2019</small></div></div>
        <a className="reference-detail-link" href="/references">Découvrir notre référence Kamoa Copper <ArrowRight size={15} /></a>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="contact-inner section-wrap">
          <div className="contact-copy"><p className="section-kicker">VOTRE PROCHAINE ÉTAPE</p><h2 id="contact-heading">Parlons de votre<br />exploitation.</h2><p>Une urgence, un besoin en flexibles ou un projet de maintenance ? Notre équipe est à votre écoute.</p><a className="button button-yellow" href="tel:+243975146361"><Phone size={17} /> +243 975 146 361</a></div>
          <div className="contact-details">
            <div><MapPin size={18} /><span><strong>Présence locale</strong><small>Lubumbashi & Kolwezi · RDC</small></span></div>
            <div><Clock3 size={18} /><span><strong>Urgence hydraulique</strong><small>Astreinte 24/7 sur les sites équipés d’un atelier.</small></span></div>
            <div><Wrench size={18} /><span><strong>Besoin d’un devis ?</strong><small>Appelez-nous pour d��crire votre installation et vos contraintes.</small></span></div>
          </div>
          <span className="contact-watermark" aria-hidden="true">MP.</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner"><BrandMark light /><p>Solutions hydrauliques industrielles<br />République Démocratique du Congo</p><a href="#accueil">Retour en haut <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Macken Pices S.A.R.L.</span><span>Engineering · Construction</span></div>
      </footer>
    </main>
  )
}

export default HydraulicsLanding
