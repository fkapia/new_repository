'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Cable,
  Check,
  ChevronRight,
  Clock3,
  Factory,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Cable,
    title: 'Flexibles & composants',
    description:
      'Tuyaux, raccords et adaptateurs haute pression conçus pour les contraintes des mines, carrières et sites industriels.',
    detail: 'Pression adaptée à votre installation, jusqu'à 600 bars selon référence.',
  },
  {
    number: '02',
    icon: Factory,
    title: 'Atelier sur votre site',
    description:
      'Un atelier complet, équipé et opéré dans vos installations, avec une équipe Macken Pices dédiée et des composants critiques à demeure.',
    detail: 'Lorsque le dispositif est déployé : intervention en moins de 30 minutes.',
    featured: true,
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Audit & maintenance',
    description:
      'Nous repérons les points de défaillance de vos circuits hydrauliques et préparons un plan de maintenance adapté à votre exploitation.',
    detail: 'Rapport documenté et recommandations priorisées.',
  },
  {
    number: '04',
    icon: PackageCheck,
    title: 'Stock à demeure',
    description:
      'Les références critiques sont sélectionnées selon vos besoins et stockées directement sur votre site pour limiter les délais d'approvisionnement.',
    detail: 'La bonne pièce, là où votre équipe en a besoin.',
  },
]

const navigation = [
  { label: 'Nos solutions', href: '#solutions' },
  { label: 'Notre méthode', href: '#engagements' },
  { label: 'Zone d'intervention', href: '#implantation' },
  { label: 'Références', href: '#references' },
]

export function HydraulicsLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="hydraulics-page">
      <div className="urgency-bar">
        <span className="urgency-dot" aria-hidden="true" />
        <span>Urgence hydraulique — disponibilité 24/7</span>
        <span className="urgency-separator" aria-hidden="true">·</span>
        <a href="tel:+243975146361">+243 975 146 361</a>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#accueil" aria-label="Macken Pices — accueil">
            <span className="brand-mark" aria-hidden="true"><Wrench size={23} strokeWidth={2.1} /></span>
            <span className="brand-copy">
              <strong>MACKEN PICES</strong>
              <small>ENGINEERING · CONSTRUCTION</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
              Nous contacter <ArrowRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="accueil" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Hydraulique industrielle · Grand Katanga</p>
            <h1 id="hero-title">Votre production ne peut pas <em>s'arrêter.</em></h1>
            <p className="hero-lead">
              Nous déployons un atelier hydraulique au cœur de votre exploitation — avec l'équipe, l'outillage et les pièces pour intervenir quand chaque minute compte.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href="tel:+243975146361">
                <Phone size={17} aria-hidden="true" /> Appeler l'urgence 24/7
              </a>
              <a className="button button-outline" href="#solutions">Découvrir nos solutions <ArrowDownRight size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero-coverage"><MapPin size={15} aria-hidden="true" /> Lubumbashi · Kolwezi · Haut-Katanga · Lualaba</p>
          </div>
          <aside className="hero-assurance" aria-label="Notre engagement de disponibilité">
            <div className="assurance-icon"><Clock3 size={21} aria-hidden="true" /></div>
            <div>
              <span className="assurance-label">Disponibilité contractuelle</span>
              <strong>24<span>/</span>7</strong>
              <p>Une équipe d'astreinte, jour et nuit, selon le périmètre convenu.</p>
            </div>
            <a href="#engagements" aria-label="En savoir plus sur nos engagements"><ChevronRight size={18} /></a>
          </aside>
        </div>
        <div className="hero-index" aria-hidden="true">01 <span /> HYDRAULIQUE</div>
      </section>

      <section className="proof-strip" aria-label="Nos engagements clés">
        <div className="proof-item"><ShieldCheck size={21} aria-hidden="true" /><span><strong>Présence sur site</strong><small>Atelier intégré à votre exploitation</small></span></div>
        <div className="proof-item"><Clock3 size={21} aria-hidden="true" /><span><strong>Disponibilité 24/7</strong><small>Contractuellement garantie</small></span></div>
        <div className="proof-item"><PackageCheck size={21} aria-hidden="true" /><span><strong>Stock critique</strong><small>Références disponibles sur place</small></span></div>
        <div className="proof-item"><MapPin size={21} aria-hidden="true" /><span><strong>Grand Katanga</strong><small>Lubumbashi & Kolwezi</small></span></div>
      </section>

      <section className="solutions section-pad" id="solutions" aria-labelledby="solutions-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Ce que nous faisons</p>
            <h2 id="solutions-title">Une réponse complète,<br /><em>au plus près du terrain.</em></h2>
          </div>
          <p className="section-intro">Nous ne faisons pas que fournir des composants. Nous prenons en charge la continuité de votre production, du flexible à l'accompagnement sur site.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, description, detail, featured }) => (
            <article className={`service-card${featured ? ' service-featured' : ''}`} key={number}>
              <div className="service-topline"><span className="service-icon"><Icon size={21} aria-hidden="true" /></span><span className="service-number">{number}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-detail"><Check size={15} aria-hidden="true" /><span>{detail}</span></div>
            </article>
          ))}
        </div>
        <div className="solutions-footnote"><span className="footnote-line" /> Une même équipe. Un seul responsable : Macken Pices.</div>
      </section>

      <section className="engagements section-pad" id="engagements" aria-labelledby="engagement-title">
        <div className="engagement-visual">
          <div className="visual-panel">
            <span className="visual-overline">DE LA PANNE À LA PRÉVENTION</span>
            <div className="process-step"><span>01</span><div><strong>Évaluer</strong><small>Vos équipements & besoins réels</small></div></div>
            <div className="process-rule" />
            <div className="process-step"><span>02</span><div><strong>Installer</strong><small>Atelier, outillage & stock critique</small></div></div>
            <div className="process-rule" />
            <div className="process-step"><span>03</span><div><strong>Accompagner</strong><small>Astreinte et maintenance continue</small></div></div>
            <div className="visual-note"><Clock3 size={18} aria-hidden="true" /><span><strong>Moins de 30 min</strong><small>Lorsque atelier et stock sont déployés sur votre site</small></span></div>
          </div>
          <div className="visual-caption">UNE ORGANISATION PENSÉE POUR VOTRE SITE</div>
        </div>
        <div className="engagement-copy">
          <p className="eyebrow eyebrow-dark">Notre méthode</p>
          <h2 id="engagement-title">La bonne pièce.<br /><em>Au bon endroit.</em></h2>
          <p className="engagement-intro">Un arrêt de production se prépare avant la panne. Nos équipes structurent avec vous le dispositif adapté à vos opérations et à vos équipements.</p>
          <ul className="engagement-list">
            <li><Check size={17} /><span><strong>Un atelier dédié sur votre site</strong><small>Installé et opéré par du personnel Macken Pices.</small></span></li>
            <li><Check size={17} /><span><strong>Des pièces critiques à demeure</strong><small>Un stock construit selon vos références et consommations.</small></span></li>
            <li><Check size={17} /><span><strong>Une maintenance documentée</strong><small>Audits, recommandations priorisées et suivi préventif.</small></span></li>
          </ul>
          <a className="text-link" href="#contact">Parlons de votre site <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="locations section-pad" id="implantation" aria-labelledby="locations-title">
        <div className="locations-heading">
          <p className="eyebrow">Ancrés dans la région</p>
          <h2 id="locations-title">Au cœur du <em>Grand Katanga.</em></h2>
          <p>Nos ateliers de Lubumbashi et Kolwezi soutiennent vos opérations dans le Haut-Katanga et le Lualaba.</p>
        </div>
        <div className="location-cards">
          <article className="location-card"><span className="location-pin"><MapPin size={19} /></span><div><small>ATELIER & INTERVENTIONS</small><h3>Lubumbashi</h3><p>Haut-Katanga · RDC</p></div><span className="location-no">01</span></article>
          <article className="location-card"><span className="location-pin"><MapPin size={19} /></span><div><small>ATELIER & INTERVENTIONS</small><h3>Kolwezi</h3><p>Lualaba · RDC</p></div><span className="location-no">02</span></article>
        </div>
      </section>

      <section className="references section-pad" id="references" aria-labelledby="references-title">
        <div className="references-intro">
          <p className="eyebrow eyebrow-dark">Ils nous font confiance</p>
          <h2 id="references-title">Des partenaires de terrain.<br /><em>Des opérations exigeantes.</em></h2>
          <p>Des acteurs miniers et industriels du Grand Katanga nous confient leurs besoins en approvisionnement, maintenance critique et assemblage de flexibles.</p>
        </div>
        <div className="reference-list" aria-label="Quelques références">
          <div className="reference-name"><span>01</span><strong>Kamoa Copper SA</strong><small>Partenaire depuis 2016</small></div>
          <div className="reference-name"><span>02</span><strong>KCS DRC</strong><small>Partenaire depuis 2015</small></div>
          <div className="reference-name"><span>03</span><strong>Mining Solution Group</strong><small>Partenaire depuis 2019</small></div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Besoin d'une réponse rapide ?</p>
            <h2 id="contact-title">Parlons de votre<br /><em>prochaine intervention.</em></h2>
            <p>Notre équipe est disponible 24/7 pour les urgences hydrauliques à Lubumbashi, Kolwezi et dans les zones d'intervention couvertes.</p>
          </div>
          <div className="contact-action">
            <a className="button button-yellow button-large" href="tel:+243975146361"><Phone size={18} /> Appeler maintenant</a>
            <a className="contact-number" href="tel:+243975146361">+243 975 146 361</a>
            <span><Clock3 size={14} /> Disponibilité 24/7 contractuellement garantie</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#accueil" aria-label="Macken Pices — retour en haut">
          <span className="brand-mark" aria-hidden="true"><Wrench size={21} /></span>
          <span className="brand-copy"><strong>MACKEN PICES</strong><small>ENGINEERING · CONSTRUCTION</small></span>
        </a>
        <p>Hydraulique industrielle · Lubumbashi & Kolwezi</p>
        <a href="tel:+243975146361">+243 975 146 361 <ArrowRight size={14} /></a>
        <small className="copyright">© {new Date().getFullYear()} MACKEN PICES S.A.R.L.</small>
      </footer>
    </main>
  )
}

export default HydraulicsLanding
