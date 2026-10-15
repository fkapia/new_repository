import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Clock3,
  FileCheck2,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { BrandMark } from '@/components/hydraulics-landing'

const pillars = [
  {
    number: '01',
    title: 'Traçabilité',
    description: 'Chaque flexible identifié et documenté.',
    icon: ShieldCheck,
    href: '#tracabilite',
  },
  {
    number: '02',
    title: 'Épreuve de pression',
    description: 'Un contrôle défini et consigné avant livraison.',
    icon: Gauge,
    href: '#epreuve',
  },
  {
    number: '03',
    title: 'Garantie écrite',
    description: 'Un engagement documenté sur nos assemblages.',
    icon: BadgeCheck,
    href: '#garantie',
  },
  {
    number: '04',
    title: 'Disponibilité 24/7',
    description: 'Contractuellement garantie.',
    icon: Clock3,
    href: '#urgence',
  },
]

const traceabilityItems = [
  {
    title: 'Fiche de sertissage numérotée',
    description:
      'Références et lots du tuyau et des raccords, diamètre de sertissage théorique et mesuré, opérateur et date.',
  },
  {
    title: 'Déclaration de conformité',
    description:
      'Jointe aux livraisons et appuyée sur la norme ISO 18752 ainsi que sur les certificats de nos fournisseurs.',
  },
  {
    title: 'Marquage permanent',
    description:
      'Un numéro d’identification unique, la date et la pression de service sont indiqués sur le flexible.',
  },
  {
    title: 'Registre consultable',
    description:
      'L’historique complet d’un flexible installé sur vos équipements peut être retrouvé pour vos audits.',
  },
]

const testingItems = [
  {
    title: 'Contrôle dimensionnel systématique',
    description:
      'Le diamètre de sertissage est mesuré au pied à coulisse et comparé aux spécifications du fabricant. Chaque flexible est accompagné de sa fiche de traçabilité.',
  },
  {
    title: 'Épreuve non destructive sur banc',
    description:
      'Généralement réalisée à 150 % de la pression de service, selon le périmètre convenu : épreuve individuelle pour les applications critiques ou épreuve par lot lorsque le cahier des charges le permet.',
  },
  {
    title: 'Méthode définie avant fabrication',
    description:
      'Le mode d’épreuve retenu est arrêté avec vous et précisé dans la Déclaration de conformité jointe à la livraison.',
  },
  {
    title: 'Équipements étalonnés',
    description:
      'L’étalonnage des équipements de contrôle est suivi ; un procès-verbal est disponible.',
  },
]

const warrantyItems = [
  {
    title: 'Une garantie formalisée',
    description:
      'La Déclaration de conformité jointe à chaque livraison matérialise la garantie écrite de nos assemblages.',
  },
  {
    title: 'Conformité documentée',
    description:
      'Nos assemblages respectent les spécifications du fabricant du tuyau et les exigences applicables de la norme ISO 18752.',
  },
  {
    title: 'Traitement prioritaire des retours',
    description:
      'Tout retour sous garantie fait l’objet d’une analyse de cause et d’un rapport.',
  },
  {
    title: 'Un service après-vente dédié',
    description:
      'Le numéro d’identification du flexible permet de retrouver rapidement son historique.',
  },
]

const emergencyItems = [
  {
    title: 'Urgence hydraulique 24/7',
    description: 'Une équipe joignable jour et nuit, 7 jours sur 7.',
  },
  {
    title: 'Intervention à l’atelier ou sur site',
    description:
      'Sertissage et remplacement sur vos équipements à Lubumbashi, Kolwezi et dans le corridor minier.',
  },
  {
    title: 'Stocks dédiés aux clients',
    description:
      'Les références critiques de votre parc peuvent être prépositionnées pour réduire les délais.',
  },
  {
    title: 'Rapport d’intervention',
    description:
      'Un compte rendu illustré et documenté après chaque dépannage, pour le suivi de fiabilité.',
  },
]

function EngagementsHeader() {
  return (
    <>
      <div className="emergency-strip">
        <span className="availability-dot" aria-hidden="true" />
        <span>Assistance hydraulique</span>
        <span className="strip-divider" aria-hidden="true">/</span>
        <a href="tel:+243975146361">+243 975 146 361</a>
        <span className="strip-location">Lubumbashi · Kolwezi</span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <BrandMark homeHref="/" />
          <nav className="primary-nav" aria-label="Navigation principale">
            <Link href="/#solutions">Solutions</Link>
            <Link href="/engagements" aria-current="page">Nos engagements</Link>
            <Link href="/references">Références</Link>
            <Link className="nav-contact" href="/#contact">Parlons de votre site <ArrowUpRight size={15} /></Link>
          </nav>
        </div>
      </header>
    </>
  )
}

function EngagementHero() {
  return (
    <section className="engagement-hero" aria-labelledby="engagement-title">
      <Image
        src="/hydraulics-hero.png"
        alt="Technicien Macken Pices contrôlant un circuit hydraulique sur un équipement minier."
        fill
        priority
        sizes="100vw"
        className="engagement-hero-image"
      />
      <div className="engagement-hero-overlay" aria-hidden="true" />
      <div className="engagement-hero-inner">
        <nav className="engagement-breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link><span aria-hidden="true">/</span><span>Nos engagements</span>
        </nav>
        <div className="engagement-hero-copy">
          <p className="engagement-eyebrow"><span /> NOTRE PROMESSE QUALITÉ</p>
          <h1 id="engagement-title">Nos engagements :<br />la preuve à chaque flexible.</h1>
          <p className="engagement-hero-lead">
            Chaque flexible qui sort de notre atelier est documenté, testé et garanti. Traçabilité complète, épreuve de pression définie avec vous, garantie écrite et disponibilité 24/7 contractuellement garantie : la preuve accompagne la pièce.
          </p>
          <div className="engagement-hero-actions">
            <Link className="button button-yellow" href="/#contact">Demander un devis <ArrowRight size={16} /></Link>
            <a className="button button-outline" href="tel:+243975146361"><Phone size={16} /> Urgence 24/7 : +243 975 146 361</a>
          </div>
        </div>
        <span className="engagement-hero-index" aria-hidden="true">MP / QUALITÉ</span>
      </div>
    </section>
  )
}

function EngagementPillars() {
  return (
    <nav className="engagement-pillars" aria-label="Nos quatre engagements">
      <div className="engagement-pillars-inner">
        {pillars.map(({ number, title, description, icon: Icon, href }) => (
          <a className="engagement-pillar" href={href} key={number}>
            <span className="engagement-pillar-icon"><Icon size={19} aria-hidden="true" /></span>
            <span className="engagement-pillar-copy"><span className="engagement-pillar-number">{number} / ENGAGEMENT</span><strong>{title}</strong><span>{description}</span></span>
            <ArrowUpRight className="engagement-pillar-arrow" size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  )
}

function CommitmentList({ items }: { items: { title: string; description: string }[] }) {
  return (
    <ul className="engagement-check-list">
      {items.map(({ title, description }) => (
        <li key={title}>
          <span className="engagement-check" aria-hidden="true"><Check size={14} strokeWidth={2.5} /></span>
          <span><strong>{title}</strong><span>{description}</span></span>
        </li>
      ))}
    </ul>
  )
}

function TraceabilitySection() {
  return (
    <section className="engagement-detail-section" id="tracabilite" aria-labelledby="traceability-title">
      <div className="engagement-detail-inner engagement-detail-grid">
        <div className="engagement-visual engagement-trace-visual" aria-label="Étapes de traçabilité d’un flexible" role="img">
          <div className="engagement-visual-top"><span>FICHE DE TRAÇABILITÉ</span><FileCheck2 size={19} aria-hidden="true" /></div>
          <div className="engagement-trace-record"><span>IDENTIFICATION</span><strong>MP — FLEXIBLE HYDRAULIQUE</strong><span>Référence · Lot · Pression de service</span></div>
          <div className="engagement-trace-steps"><span><i>01</i> Réception des composants</span><span><i>02</i> Sertissage documenté</span><span><i>03</i> Contrôle et livraison</span></div>
          <div className="engagement-visual-caption"><ShieldCheck size={15} aria-hidden="true" /> Un historique consultable pour vos audits</div>
          <span className="engagement-visual-index" aria-hidden="true">MP / 01</span>
        </div>
        <div className="engagement-detail-copy">
          <p className="engagement-section-kicker">01 — TRAÇABILITÉ COMPLÈTE</p>
          <h2 id="traceability-title">Du lot de fabrication au flexible installé.</h2>
          <p className="engagement-intro">Un flexible hydraulique est un équipement de sécurité. Chaque assemblage est identifiable de la réception des matières jusqu’à sa mise en service, et documenté pour vos audits.</p>
          <CommitmentList items={traceabilityItems} />
        </div>
      </div>
    </section>
  )
}

function PressureTestSection() {
  return (
    <section className="engagement-detail-section engagement-detail-alt" id="epreuve" aria-labelledby="pressure-title">
      <div className="engagement-detail-inner engagement-detail-grid engagement-test-grid">
        <div className="engagement-detail-copy">
          <p className="engagement-section-kicker">02 — ÉPREUVE DE PRESSION</p>
          <h2 id="pressure-title">Testé avant livraison.<br />Prouvé après.</h2>
          <p className="engagement-intro">Un flexible qui n’a pas été éprouvé est un risque. Le contrôle de chaque assemblage est rigoureux et documenté ; son périmètre est arrêté avec vous, sans ambiguïté.</p>
          <CommitmentList items={testingItems} />
        </div>
        <div className="engagement-test-panel" aria-label="Indicateurs de contrôle des flexibles">
          <div className="engagement-test-panel-heading"><span>CONTRÔLE QUALITÉ</span><Gauge size={19} aria-hidden="true" /></div>
          <div className="engagement-metric"><strong>150 %</strong><span>de la pression de service, généralement pour l’épreuve — selon le périmètre convenu</span></div>
          <div className="engagement-metric"><strong>100 %</strong><span>des flexibles contrôlés dimensionnellement et tracés</span></div>
          <div className="engagement-metric"><strong>1</strong><span>Déclaration de conformité par livraison, précisant le périmètre d’épreuve</span></div>
          <p className="engagement-test-note">Le protocole — épreuve individuelle ou par lot — est convenu avant fabrication, selon l’application et le cahier des charges.</p>
        </div>
      </div>
    </section>
  )
}

function WarrantySection() {
  return (
    <section className="engagement-detail-section" id="garantie" aria-labelledby="warranty-title">
      <div className="engagement-detail-inner engagement-detail-grid">
        <div className="engagement-visual engagement-warranty-visual" aria-label="Aperçu d’un engagement qualité documenté" role="img">
          <div className="engagement-warranty-watermark" aria-hidden="true">MP</div>
          <div className="engagement-warranty-document">
            <div className="engagement-warranty-seal"><BadgeCheck size={28} aria-hidden="true" /></div>
            <p>MACKEN PICES S.A.R.L.</p>
            <span>DÉCLARATION DE CONFORMITÉ</span>
            <i />
            <i />
            <i />
            <div className="engagement-warranty-signature">Qualité documentée</div>
          </div>
          <span className="engagement-visual-index" aria-hidden="true">MP / 03</span>
        </div>
        <div className="engagement-detail-copy">
          <p className="engagement-section-kicker">03 — GARANTIE ÉCRITE</p>
          <h2 id="warranty-title">Nous signons ce que nous sertissons.</h2>
          <p className="engagement-intro">La garantie n’est pas une option marketing : c’est la conséquence directe de notre traçabilité. Parce que chaque flexible est documenté, nous pouvons engager notre responsabilité et la tenir.</p>
          <CommitmentList items={warrantyItems} />
        </div>
      </div>
    </section>
  )
}

function EmergencySection() {
  return (
    <section className="engagement-detail-section engagement-detail-alt" id="urgence" aria-labelledby="emergency-title">
      <div className="engagement-detail-inner engagement-detail-grid engagement-emergency-grid">
        <div className="engagement-detail-copy">
          <p className="engagement-section-kicker">04 — INTERVENTION 24/7</p>
          <h2 id="emergency-title">Une panne n’attend pas.<br />Nous non plus.</h2>
          <p className="engagement-intro">Chaque heure d’arrêt coûte cher. Nos équipes interviennent à l’atelier comme sur site, avec des stocks dédiés et un service d’urgence joignable à toute heure.</p>
          <CommitmentList items={emergencyItems} />
        </div>
        <aside className="engagement-emergency-card" aria-label="Assistance hydraulique 24 heures sur 24, 7 jours sur 7">
          <div className="engagement-emergency-icon"><Clock3 size={25} aria-hidden="true" /></div>
          <p className="engagement-section-kicker">DISPONIBILITÉ CONTRACTUELLEMENT GARANTIE</p>
          <strong className="engagement-emergency-number">24<span>/7</span></strong>
          <p className="engagement-emergency-copy">Une assistance hydraulique joignable de jour comme de nuit, 7 jours sur 7.</p>
          <a href="tel:+243975146361" className="engagement-emergency-phone"><Phone size={17} aria-hidden="true" /> +243 975 146 361</a>
          <span className="engagement-emergency-location"><MapPin size={14} aria-hidden="true" /> Lubumbashi · Kolwezi · corridor minier</span>
        </aside>
      </div>
    </section>
  )
}

function EngagementsFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <BrandMark light homeHref="/" />
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

export function EngagementsPage() {
  return (
    <main className="engagement-page" id="page-top">
      <EngagementsHeader />
      <EngagementHero />
      <EngagementPillars />
      <TraceabilitySection />
      <PressureTestSection />
      <WarrantySection />
      <EmergencySection />
      <section className="engagement-cta" aria-labelledby="engagement-cta-title">
        <div className="engagement-cta-inner">
          <div>
            <p className="engagement-section-kicker">UNE QUESTION ? UN BESOIN ?</p>
            <h2 id="engagement-cta-title">Parlons des exigences de votre site.</h2>
            <p>Décrivez l’équipement, la panne, la localisation et le niveau d’urgence : notre équipe vous répond sous 24 h ouvrées avec les prochaines étapes.</p>
          </div>
          <div className="engagement-cta-actions">
            <Link className="button button-yellow" href="/#contact">Demander un devis <ArrowRight size={16} /></Link>
            <Link className="engagement-reference-link" href="/references">Voir nos références <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
      <EngagementsFooter />
    </main>
  )
}

export default EngagementsPage

