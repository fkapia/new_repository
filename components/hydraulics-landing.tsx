import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  Droplets,
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
  { number: '01', title: 'Flexibles & raccords', description: 'Tuyaux et composants haute pression, sélectionnés selon votre installation et tracés de bout en bout.', detail: 'Jusqu’à 600 bars selon référence', icon: Gauge },
  { number: '02', title: 'Atelier sur votre site', description: 'Un atelier équipé, un stock de composants critiques et une équipe Macken Pices dédiée, directement dans vos installations.', detail: 'Équipe d’astreinte 24/7', icon: Wrench },
  { number: '03', title: 'Audit & maintenance', description: 'Nous évaluons vos circuits, repérons les risques et organisons un plan de maintenance adapté à vos opérations.', detail: 'Rapport documenté', icon: ShieldCheck },
  { number: '04', title: 'Stock à demeure', description: 'Les références critiques sont déjà sur place, dimensionnées à partir de vos consommations réelles.', detail: 'Lubumbashi & Kolwezi', icon: PackageCheck },
]

const guarantees = [
  { title: 'Moins de 30 minutes', description: 'Démarrage de l’intervention sur arrêt non planifié, lorsque atelier, équipe et stock sont déployés sur votre site.', icon: Zap },
  { title: 'Disponibilité 24/7', description: 'Y compris les nuits, les week-ends et les jours fériés.', icon: Clock3 },
  { title: 'Traçabilité documentée', description: 'Composants conformes aux standards et documentation fournie.', icon: BadgeCheck },
]

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#accueil" aria-label="Macken Pices, accueil">
      <span className="brand-mark" aria-hidden="true"><Droplets size={23} strokeWidth={2.2} /></span>
      <span className="brand-copy"><strong>MACKEN PICES</strong><span>ENGINEERING · CONSTRUCTION</span></span>
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
            <a href="#engagements">Nos engagements</a>
            <a href="#references">Références</a>
            <a className="nav-contact" href="#contact">Parlons de votre site <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="accueil" aria-labelledby="hero-heading">
        <div className="hero-image" role="img" aria-label="Technicien hydraulique en intervention dans un atelier minier" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> Ingénierie hydraulique · Grand Katanga</p>
          <h1 id="hero-heading">Moins d’arrêts.<br /><span>Plus de maîtrise.</span></h1>
          <p className="hero-description">Des solutions hydrauliques pensées pour les réalités de votre exploitation minière et industrielle.</p>
          <div className="hero-actions">
            <a className="button button-yellow" href="tel:+243975146361"><Phone size={17} /> Appeler l’astreinte 24/7</a>
            <a className="button button-outline" href="#solutions">Découvrir nos solutions <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-footnote"><MapPin size={15} /> Lubumbashi, Kolwezi et sites miniers en RDC</div>
        </div>
        <aside className="hero-callout" aria-label="Engagement d’intervention">
          <span className="callout-icon"><Zap size={17} fill="currentColor" /></span>
          <div><strong>&lt; 30 min</strong><span>sur site équipé d’un atelier</span></div>
          <ArrowUpRight className="callout-arrow" size={19} />
        </aside>
        <div className="hero-index" aria-hidden="true">MP / 01</div>
      </section>

      <section className="intro-band" aria-label="Présentation de Macken Pices">
        <div className="intro-inner">
          <div className="intro-heading"><span className="section-kicker">LA CONTINUITÉ, CONCRÈTEMENT</span><h2>Votre partenaire<br />hydraulique de terrain.</h2></div>
          <p>Nous assemblons, testons et maintenons vos composants hydrauliques avec une priorité : garder vos équipements en mouvement. Atelier, équipe et pièces peuvent être réunis au plus près de vos opérations.</p>
          <div className="intro-stat"><span className="stat-number">24<span>/7</span></span><span className="stat-label">Une équipe d’astreinte,<br />quand vous en avez besoin.</span></div>
        </div>
      </section>

      <section className="solutions-section section-wrap" id="solutions" aria-labelledby="solutions-heading">
        <div className="section-topline"><span>01 — NOS SOLUTIONS</span><span>Conçues pour le terrain</span></div>
        <div className="section-heading-row"><div><p className="section-kicker">DE LA PIÈCE À LA PRÉSENCE SUR SITE</p><h2 id="solutions-heading">Une réponse à chaque<br />point de friction.</h2></div><p className="section-summary">Un dispositif ajusté à vos équipements, vos contraintes opérationnelles et au niveau de service attendu.</p></div>
        <div className="service-grid">
          {services.map(({ number, title, description, detail, icon: Icon }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top"><span>{number}</span><Icon size={21} strokeWidth={1.8} /></div>
              <h3>{title}</h3><p>{description}</p>
              <div className="service-detail"><span />{detail}</div>
            </article>
          ))}
        </div>
        <div className="process-strip"><div className="process-icon"><Factory size={21} /></div><p><strong>Un seul responsable : nous.</strong> Atelier dédié sur votre site, complété par nos ateliers de Lubumbashi et Kolwezi.</p><a href="#contact" aria-label="Contacter Macken Pices"><ArrowRight size={20} /></a></div>
      </section>

      <section className="commitment-section" id="engagements" aria-labelledby="commitments-heading">
        <div className="commitment-layout section-wrap">
          <div className="commitment-copy">
            <div className="section-topline section-topline-light"><span>02 — NOS ENGAGEMENTS</span><span>La promesse, avec son périmètre</span></div>
            <p className="section-kicker">UN DISPOSITIF QUI SE PROUVE</p>
            <h2 id="commitments-heading">De la réactivité.<br /><span>Sans raccourci.</span></h2>
            <p className="commitment-description">Le délai dépend du dispositif en place. Sur un site équipé de notre atelier, l’équipe, l’outillage et le stock sont déjà à vos côtés. Hors site équipé, nous convenons du délai d’intervention depuis Lubumbashi ou Kolwezi.</p>
            <a className="commitment-link" href="#contact">Échanger sur votre exploitation <ArrowRight size={16} /></a>
          </div>
          <div className="commitment-list">
            {guarantees.map(({ title, description, icon: Icon }, index) => (
              <article className="guarantee-row" key={title}><span className="guarantee-number">0{index + 1}</span><span className="guarantee-icon"><Icon size={19} /></span><div><h3>{title}</h3><p>{description}</p></div></article>
            ))}
            <div className="response-note"><span className="availability-dot" /> Astreinte hydraulique active 24/7</div>
          </div>
        </div>
      </section>

      <section className="references-section section-wrap" id="references" aria-labelledby="references-heading">
        <div className="section-topline"><span>03 — ILS NOUS FONT CONFIANCE</span><span>Industrie & mines · Grand Katanga</span></div>
        <div className="references-heading-row"><div><p className="section-kicker">UNE CONFIANCE CONSTRUITE SUR LE TERRAIN</p><h2 id="references-heading">Aux côtés des acteurs<br />qui font avancer la région.</h2></div><p>Des partenariats durables pour l’approvisionnement, l’assemblage et la maintenance de composants hydrauliques.</p></div>
        <div className="client-list" aria-label="Références clients"><div><span>KAMOA COPPER SA</span><small>Partenaire depuis 2016</small></div><div><span>KCS DRC</span><small>Partenaire depuis 2015</small></div><div><span>MINING SOLUTION GROUP</span><small>Partenaire depuis 2019</small></div></div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="contact-inner section-wrap">
          <div className="contact-copy"><p className="section-kicker">VOTRE PROCHAINE ÉTAPE</p><h2 id="contact-heading">Parlons de votre<br />exploitation.</h2><p>Une urgence, un besoin en flexibles ou un projet de maintenance ? Notre équipe est à votre écoute.</p><a className="button button-yellow" href="tel:+243975146361"><Phone size={17} /> +243 975 146 361</a></div>
          <div className="contact-details">
            <div><MapPin size={18} /><span><strong>Présence locale</strong><small>Lubumbashi & Kolwezi · RDC</small></span></div>
            <div><Clock3 size={18} /><span><strong>Urgence hydraulique</strong><small>Disponible 24 heures sur 24, 7 jours sur 7</small></span></div>
            <div><Wrench size={18} /><span><strong>Besoin d’un devis ?</strong><small>Appelez-nous pour décrire votre installation et vos contraintes.</small></span></div>
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
