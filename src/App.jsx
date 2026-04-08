import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Cable,
  CheckCircle2,
  Cpu,
  Headphones,
  Layers3,
  LifeBuoy,
  Lock,
  MonitorSmartphone,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;
const profileImg = `${baseUrl}Derval-logo-anime-removebg-preview-sNoRaNFg.png`;
const qoqaLogo = `${baseUrl}qoqa-logo.webp`;
const qoqaOtterImg = `${baseUrl}Qoqa-loutre-removebg-preview.png`;
const qoqaOtterStickerImg = `${baseUrl}1730984728122-removebg-preview.png`;

const stats = [
  { label: "Années en relation client et traitement", value: "6+" },
  { label: "Domaines traversés", value: "4" },
  { label: "Diplômes et certifications utiles", value: "5" },
  { label: "Langues de travail", value: "2+" },
];

const chapters = [
  {
    kicker: "Chapitre 01",
    title: "Je viens du terrain, pas d'une fiche parfaite.",
    text:
      "Mon parcours n'a pas commencé dans une salle serveur. Il a commencé là où il faut répondre juste, vite et calmement. Guichet, téléphone, e-mails, dossiers, urgences, usagers, clients. J'ai appris à absorber le flux, à garder la tête froide et à rendre un service fiable.",
    icon: Headphones,
  },
  {
    kicker: "Chapitre 02",
    title: "Ensuite, j'ai appris la rigueur opérationnelle.",
    text:
      "Registre foncier, assurance maladie, logement communal. Trois mondes différents, un même socle. Classer, traiter, vérifier, respecter des normes, suivre les procédures, documenter, facturer, orienter, corriger sans bruit. Là où d'autres voient de l'administratif, moi je vois des systèmes, des flux et de la qualité d'exécution.",
    icon: Layers3,
  },
  {
    kicker: "Chapitre 03",
    title: "Puis j'ai élargi le champ vers le digital et l'IT.",
    text:
      "UX Design, webmastering, webmarketing, HTML, CSS, JavaScript, PHP, ITIL. J'ai construit une culture technique transversale. Pas pour collectionner des lignes sur un CV, mais pour comprendre comment un service fonctionne de bout en bout, du besoin utilisateur jusqu'à l'outil qui le supporte.",
    icon: Cpu,
  },
  {
    kicker: "Chapitre 04",
    title: "Aujourd'hui, je veux basculer là où support et infrastructure se rencontrent.",
    text:
      "Le poste chez QoQa m'intéresse parce qu'il demande plus qu'un exécutant. Il faut aider, équiper, sécuriser, maintenir, coordonner, documenter et faire avancer l'environnement IT au quotidien. C'est exactement le point de convergence entre mon sens du service, ma rigueur, ma culture process et mon envie de monter en puissance sur l'infrastructure.",
    icon: Rocket,
  },
];

const fitCards = [
  {
    icon: LifeBuoy,
    title: "Support niveau 1 et 2",
    text:
      "J'ai l'habitude d'être le premier point de contact. Je traite, j'explique, je rassure, je priorise et je vais au bout du sujet sans perdre l'utilisateur en route.",
  },
  {
    icon: ShieldCheck,
    title: "Rigueur, sécurité, procédures",
    text:
      "Je viens d'environnements où la conformité, les délais et la qualité ne sont pas négociables. La discipline opérationnelle, je la connais déjà.",
  },
  {
    icon: MonitorSmartphone,
    title: "Parc, outils, cycle de vie",
    text:
      "Gestion de stocks, suivi de dossiers, logique d'inventaire, organisation, documentation, coordination. Je sais tenir un cadre propre et exploitable.",
  },
  {
    icon: Network,
    title: "Culture technique qui monte",
    text:
      "ITIL acquis, culture web, bases systèmes et réseau, intérêt concret pour l'infra, envie claire de progresser sur l'admin poste, les accès, l'identité et l'environnement cloud.",
  },
  {
    icon: UserRound,
    title: "Orientation humain + service",
    text:
      "Le support n'est pas seulement un problème technique. C'est une expérience. Mon profil UX me pousse à rendre les choses plus simples, plus compréhensibles et plus fluides.",
  },
  {
    icon: Wrench,
    title: "Esprit d'amélioration",
    text:
      "Je ne veux pas seulement exécuter. Je veux fiabiliser, clarifier les étapes, faire gagner du temps et contribuer à une IT plus nette et plus utile.",
  },
];

const milestones = [
  "Apprentissage employé de commerce et expérience au Registre foncier",
  "3 ans en traitement documentaire et flux métiers en assurance maladie",
  "Service client multicanal, CRM, courrier, mutations et rétention",
  "Accueil, analyse et gestion de dossiers pour les logements à loyers modérés",
  "Diplômes UX Designer, Webmaster, ITIL",
  "Projection claire vers le support, l'infrastructure et les opérations IT",
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-4xl font-black tracking-tight text-[#181018] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-black/74">{text}</p> : null}
    </div>
  );
}

function Reveal({ children, y = 48 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FloatItem({ children, duration = 6, y = 12, rotate = 2, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -y, 0],
        rotate: [0, rotate, 0, -rotate, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function QoQaMotivationLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const sideGlowY = useTransform(scrollYProgress, [0, 1], [0, -240]);

  const pills = useMemo(
    () => [
      "Support IT",
      "Infrastructure",
      "ITIL",
      "Service client",
      "Sécurité",
      "Parc informatique",
      "UX mindset",
      "Windows / Mac / Google",
      "Processus",
      "Progression continue",
    ],
    [],
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fff2f8] text-[#161116]">
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-black/8">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-[#ef7fbe] via-[#ff9ecb] to-[#ffb36b]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-10%] top-[-4rem] h-[28rem] w-[28rem] rounded-full bg-[#ef7fbe]/25 blur-3xl"
          style={{ y: glowY }}
        />
        <motion.div
          className="absolute right-[-12%] top-[22rem] h-[34rem] w-[34rem] rounded-full bg-[#ffb36b]/15 blur-3xl"
          style={{ y: sideGlowY }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.3),transparent_30%,rgba(255,255,255,0.14))]" />
      </div>

      <main className="relative z-10">
        <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:px-8 md:px-12 lg:px-16 lg:pb-24 lg:pt-28">
          <FloatItem duration={9} y={18} rotate={-3} className="absolute right-2 top-24 hidden w-28 opacity-70 lg:block xl:right-16 xl:w-36">
            <img src={qoqaOtterStickerImg} alt="" className="w-full object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.12)]" />
          </FloatItem>
          <FloatItem duration={8} y={20} rotate={2} delay={0.4} className="absolute left-2 top-64 hidden w-20 opacity-65 lg:block xl:left-10 xl:w-24">
            <img src={qoqaOtterStickerImg} alt="" className="w-full object-contain drop-shadow-[0_14px_26px_rgba(0,0,0,0.1)]" />
          </FloatItem>
          <motion.div
            style={{ scale: heroScale, y: heroY }}
            className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
          >
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 backdrop-blur-xl">
                  <img src={qoqaLogo} alt="QoQa" className="h-6 w-auto rounded-md bg-white/90 px-2 py-1" />
                  <span className="text-sm font-semibold text-black/75">
                    Candidature créative · Technicien Infrastructure et Support
                  </span>
                </div>
                <FloatItem duration={5.5} y={8} rotate={1.5}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#ef7fbe]/20 bg-[#ef7fbe]/15 px-4 py-2 text-sm font-semibold text-[#6f234d]">
                    <BadgeCheck className="h-4 w-4" />
                    Profil hybride service + digital + IT
                  </div>
                </FloatItem>
              </div>

              <Reveal y={24}>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.04em] text-[#181018] sm:text-3xl lg:text-5xl">
                  Je ne viens pas du chemin
                  <span className="block bg-gradient-to-r from-[#db4d9b] via-[#ef7fbe] to-[#ff9a52] bg-clip-text text-transparent">
                    le plus attendu.
                  </span>
                  <span className="mt-2 block text-black/88">Et c'est exactement ma force.</span>
                </h1>
              </Reveal>

              <Reveal>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-black/68 sm:text-xl">
                  J'ai appris à gérer le réel, les flux, les urgences, les utilisateurs, les outils et
                  les standards. Aujourd'hui, je veux mettre cette solidité au service de l'équipe IT de QoQa.
                </p>
              </Reveal>

              <Reveal>
                <div className="mt-8 flex flex-wrap gap-3">
                  {pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-black/8 bg-white/58 px-4 py-2 text-sm font-medium text-black/72 backdrop-blur"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-black/8 bg-white/52 p-5 backdrop-blur-xl">
                      <div className="text-3xl font-black text-[#181018]">{item.value}</div>
                      <div className="mt-2 text-sm leading-6 text-black/60">{item.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal y={26}>
                <div className="mt-8 rounded-[1.8rem] border border-black/8 bg-white/58 p-5 backdrop-blur-xl">
                  <div className="text-xs font-black uppercase tracking-[0.24em] text-black/42">Contact direct</div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <a
                      href="tel:+41765024752"
                      className="rounded-2xl bg-[#fff8fc] px-4 py-3 text-sm font-semibold text-black/74 ring-1 ring-black/6 transition hover:-translate-y-0.5"
                    >
                      076 502 47 52
                    </a>
                    <a
                      href="mailto:derval.botuna@gmail.com"
                      className="rounded-2xl bg-[#fff8fc] px-4 py-3 text-sm font-semibold text-black/74 ring-1 ring-black/6 transition hover:-translate-y-0.5"
                    >
                      derval.botuna@gmail.com
                    </a>
                    <div className="rounded-2xl bg-[#fff8fc] px-4 py-3 text-sm font-semibold text-black/74 ring-1 ring-black/6">
                      Avenue de Morges 58, 1004 Lausanne
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={`${baseUrl}Qoqa_08042026.pdf`}
                      download
                      className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Télécharger mon dossier de candidature
                    </a>
                    <a
                      href="https://declyn50s.github.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-[#ef7fbe]/20 bg-[#ef7fbe]/14 px-5 py-3 text-sm font-semibold text-[#7a2454] transition hover:-translate-y-0.5"
                    >
                      <Rocket className="h-4 w-4" />
                      Voir mon portfolio
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="relative mx-auto w-full max-w-[34rem]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#ef7fbe]/28 via-transparent to-[#ffb36b]/18 blur-2xl" />
                <FloatItem duration={7.5} y={16} rotate={-2} className="absolute left-2 top-44 z-20 hidden w-24 md:block lg:-left-8 lg:top-48 lg:w-32">
                  <img src={qoqaOtterImg} alt="Loutre QoQa" className="w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.14)]" />
                </FloatItem>
                <FloatItem duration={6.2} y={12} rotate={4} delay={0.6} className="absolute -right-6 bottom-10 z-20 w-20 sm:w-24">
                  <img src={qoqaOtterStickerImg} alt="Sticker loutre QoQa" className="w-full object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.12)]" />
                </FloatItem>
                <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/45 p-4 shadow-2xl backdrop-blur-2xl">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-black/8 bg-[linear-gradient(180deg,#fff8fc,#ffe5f0)] p-6">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_35%,rgba(255,255,255,0.16))]" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Candidat</div>
                        <div className="mt-3 text-3xl font-black tracking-tight text-[#181018]">Derval Botuna</div>
                        <div className="mt-2 text-base text-black/60">
                          Support orienté humain · Processus · Culture IT · Exécution fiable
                        </div>
                      </div>
                      <FloatItem duration={5.8} y={7} rotate={1.2}>
                        <div className="rounded-2xl border border-emerald-500/18 bg-emerald-500/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                          Disponible pour progresser vite
                        </div>
                      </FloatItem>
                    </div>

                    <div className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-black/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),rgba(255,255,255,0.18)_45%,transparent_65%),linear-gradient(180deg,#fff7fb,#ffe8f1)] p-5">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.18))]" />
                      <FloatItem duration={6.8} y={14} rotate={1.8} className="relative">
                        <img
                          src={profileImg}
                          alt="Portrait illustré de Derval Botuna"
                          className="relative mx-auto h-[23rem] w-auto object-contain drop-shadow-[0_25px_55px_rgba(98,31,71,0.25)] sm:h-[28rem]"
                        />
                      </FloatItem>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {[
                        ["ITIL", "Connaissance"],
                        ["Anglais", "B2"],
                        ["UX + Web", "Diplômé"],
                      ].map(([k, v]) => (
                        <div key={k} className="rounded-2xl border border-black/8 bg-white/55 px-4 py-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-black/40">{k}</div>
                          <div className="mt-2 text-lg font-bold text-[#181018]">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="flex items-center gap-3 rounded-full border border-black/8 bg-white/52 px-5 py-3 text-sm text-black/60 backdrop-blur"
            >
              <ArrowDown className="h-4 w-4" />
              Scroller pour lire l'histoire complète
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-10 sm:px-8 md:px-12 lg:px-16 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="relative mx-auto h-[26rem] w-[2px] rounded-full bg-white/10">
                  <motion.div
                    className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-fuchsia-300 via-pink-300 to-orange-200"
                    style={{ height: progressHeight }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {chapters.map((chapter, index) => {
                const Icon = chapter.icon;
                return (
                  <Reveal key={chapter.title}>
                    <article className="grid gap-6 rounded-[2rem] border border-black/8 bg-white/55 p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[120px_minmax(0,1fr)] lg:p-10">
                      <div className="flex items-start gap-4 lg:block">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-black/8 bg-[#ef7fbe]/14 text-[#7a2454] shadow-lg">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="mt-0 lg:mt-6">
                          <div className="text-xs font-bold uppercase tracking-[0.26em] text-black/42">{chapter.kicker}</div>
                          <div className="mt-2 text-sm text-black/40">0{index + 1} / 04</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-3xl font-black leading-tight tracking-tight text-[#181018] sm:text-4xl">
                          {chapter.title}
                        </h3>
                        <p className="mt-5 max-w-4xl text-lg leading-8 text-black/68">{chapter.text}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-8 md:px-12 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionTitle
                eyebrow="Pourquoi ce poste a du sens"
                title="Ce que QoQa cherche. Ce que j'apporte déjà. Ce que je veux accélérer."
                text="Je n'essaie pas de me vendre comme un clone du profil idéal sur papier. Je me présente comme un profil fiable, solide, rapide à faire monter, avec un vrai sens du service et une base technique cohérente pour évoluer dans votre environnement IT."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {fitCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} y={36 + index * 4}>
                    <div className="group h-full rounded-[1.8rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,240,247,0.86))] p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-black/8 bg-[#ef7fbe]/14 text-[#7a2454] shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-black tracking-tight text-[#181018]">{card.title}</h3>
                      <p className="mt-4 text-base leading-7 text-black/68">{card.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-8 md:px-12 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="hidden rounded-[2rem] border border-black/8 bg-white/55 p-7 backdrop-blur-xl sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb36b]/30 bg-[#ffb36b]/18 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8a4a00]">
                  <Lock className="h-3.5 w-3.5" />
                  Lucidité
                </div>
                <h2 className="mt-6 text-4xl font-black tracking-tight text-[#181018]">Je connais aussi l'écart.</h2>
                <p className="mt-5 text-lg leading-8 text-black/68">
                  Je n'ai pas un CFC d'informaticien ni trois ans dans un rôle strictement identique. Et je ne vais pas
                  maquiller ça. En revanche, j'ai déjà la partie que l'on n'enseigne pas facilement: la posture de
                  service, la discipline, la communication, l'endurance, l'organisation et l'envie nette de progresser
                  dans l'IT.
                </p>
                <p className="mt-5 text-lg leading-8 text-black/68">
                  J'ai une compréhension du digital et surtout une trajectoire claire. Je veux investir mon énergie dans un environnement où
                  le support, l'infrastructure et l'amélioration continue comptent vraiment. C'est précisément ce que
                  ce poste représente.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-black/8 bg-[linear-gradient(180deg,#fff8fc,#ffe7f1)] p-7 backdrop-blur-xl sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/8 bg-white/65 text-[#7a2454]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#181018]">Ce qui m'a construit</div>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {milestones.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.55, delay: index * 0.05 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="mt-1 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#ef7fbe] to-[#ffb36b]" />
                        {index !== milestones.length - 1 ? <div className="mt-2 h-full w-px bg-black/10" /> : null}
                      </div>
                      <div className="pb-5 text-base leading-7 text-black/68">{item}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-8 md:px-12 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-black/8 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_30%),linear-gradient(135deg,rgba(239,127,190,0.22),rgba(255,255,255,0.48),rgba(255,179,107,0.18))] p-8 backdrop-blur-2xl sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <Reveal>
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 rounded-[2rem] bg-white/50 blur-2xl" />
                  <FloatItem duration={7.2} y={12} rotate={-3} className="absolute -right-6 -top-8 z-10 w-20 sm:w-24">
                    <img src={qoqaOtterStickerImg} alt="Sticker loutre QoQa" className="w-full object-contain drop-shadow-[0_14px_26px_rgba(0,0,0,0.12)]" />
                  </FloatItem>
                  <FloatItem duration={8.4} y={16} rotate={-2.5} className="absolute -left-8 bottom-0 z-10 hidden w-24 md:block lg:-left-14 lg:w-32">
                    <img src={qoqaOtterImg} alt="Loutre QoQa" className="w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.14)]" />
                  </FloatItem>
                  <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[linear-gradient(180deg,#fff7fb,#ffe5f0)] p-4">
                    <FloatItem duration={6.5} y={12} rotate={1.4} className="relative">
                      <img src={profileImg} alt="Portrait illustré" className="mx-auto h-[20rem] w-auto object-contain sm:h-[24rem]" />
                    </FloatItem>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/58 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-black/62">
                    <Cable className="h-3.5 w-3.5" />
                    Dernier écran
                  </div>
                  <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#181018] sm:text-3xl lg:text-4xl">
                    Je veux rejoindre QoQa pour faire une IT qui aide vraiment les gens à avancer.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-black/74 sm:text-xl">
                    Pas une IT distante. Pas une IT qui subit. Une IT utile, claire, bien tenue, capable de soutenir
                    le rythme d'une entreprise vivante et ambitieuse.
                  </p>
                  <p className="mt-5 text-lg leading-8 text-black/68">
                    Si vous cherchez quelqu'un de fiable, impliqué, agréable à
                    faire travailler en équipe et prêt à grandir vite, alors je suis prêt à entrer dans votre tanière.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://declyn50s.github.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-black/8 bg-white/62 px-5 py-3 text-sm font-semibold text-[#181018] transition hover:-translate-y-0.5"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Derval Botuna · Candidature motivation créative
                    </a>
                    <div className="inline-flex items-center gap-3 rounded-full border border-[#ef7fbe]/20 bg-[#ef7fbe]/14 px-5 py-3 text-sm font-semibold text-[#7a2454]">
                      <Rocket className="h-4 w-4" />
                      Prêt à démarrer et à monter en puissance
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
