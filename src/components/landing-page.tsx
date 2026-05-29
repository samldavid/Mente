"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronDown,
  Compass,
  GraduationCap,
  MessageCircleQuestion,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  benefits,
  communityBenefits,
  faqs,
  heroStats,
  methodSteps,
  navItems,
  tutors,
  whatsappChannel,
} from "@/data/landing";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Target,
  BookOpenCheck,
  MessageCircleQuestion,
  Compass,
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.22 },
      };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <ChannelPopup />
      <Hero reduceMotion={Boolean(reduceMotion)} />

      <section id="beneficios" className="section-shell section-gap">
        <motion.div {...motionProps} variants={fadeUp} className="max-w-3xl">
          <p className="section-kicker">Primera experiencia</p>
          <h2 className="section-title">
            Una clase gratuita debe demostrar método, no prometer magia.
          </h2>
          <p className="section-copy">
            Mentes Sin Límites está pensado para estudiantes que quieren probar
            una forma más clara de prepararse: menos ruido, más razonamiento y
            práctica con intención.
          </p>
        </motion.div>

        <motion.div
          {...motionProps}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.article
                variants={fadeUp}
                key={benefit.title}
                className="interactive-card group flex min-h-[250px] flex-col justify-between p-6"
              >
                <div>
                  <span className="icon-tile">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-normal">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-400">
                  {benefit.copy}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="section-band">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...motionProps} variants={fadeUp}>
            <p className="section-kicker">Método SeamosGenios</p>
            <h2 className="section-title">
              El recorrido es simple: entrar, entender, practicar y decidir.
            </h2>
            <p className="section-copy">
              La conversión sucede cuando el estudiante siente progreso real.
              Por eso la página conduce primero a una clase y a una comunidad,
              no a una venta apresurada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Sin formularios eternos",
                "Cupos gratuitos por sesión",
                "Aula de estudiantes",
              ].map((item) => (
                <span key={item} className="trust-pill">
                  <Check size={16} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...motionProps}
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2"
          >
            {methodSteps.map((step) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="process-card"
              >
                <span className="process-index">{step.kicker}</span>
                <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {step.copy}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell section-gap">
        <div className="student-entry">
          <motion.div {...motionProps} variants={fadeUp} className="max-w-2xl">
            <p className="section-kicker">Entrada para estudiantes</p>
            <h2 className="section-title">
              Una página de uso rápido para seguir la clase y no perder el ritmo.
            </h2>
            <p className="section-copy">
              El aula gratuita organiza la ruta de estudio, las áreas de
              práctica y el acceso directo al canal para que el proceso no se
              quede solo en una visita.
            </p>
            <Link href="/estudiantes" className="primary-action mt-8">
              Entrar al aula
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div {...motionProps} variants={fadeUp} className="student-image-panel">
            <Image
              src="/reference/study-group.jpg"
              alt="Estudiantes trabajando juntos durante una sesión de estudio"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
            <div className="relative mt-auto p-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/seamosgenios.png"
                  alt="Logo SeamosGenios"
                  width={42}
                  height={42}
                  className="rounded-[8px] bg-white/5 p-1 ring-1 ring-white/10"
                />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-100">
                  Aula SeamosGenios
                </p>
              </div>
              <p className="mt-4 max-w-sm text-lg font-semibold leading-tight">
                Material, agenda y práctica reunidos para que la clase no termine
                cuando cierras la sesión.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tutores" className="section-shell section-gap pt-0">
        <motion.div
          {...motionProps}
          variants={fadeUp}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="section-kicker">Tutores</p>
            <h2 className="section-title">
              Tutores con enfoque claro, credenciales visibles y temas definidos.
            </h2>
            <p className="section-copy">
              Cada perfil muestra qué trabaja, cómo acompaña y qué tipo de
              preguntas puede ayudarte a entender mejor.
            </p>
          </div>
          <a
            href={whatsappChannel}
            target="_blank"
            rel="noreferrer"
            className="secondary-action whatsapp-action"
            aria-label="Ver agenda de tutores en WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Ver agenda
          </a>
        </motion.div>

        <motion.div
          {...motionProps}
          variants={stagger}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {tutors.map((tutor, index) => (
            <motion.article
              key={tutor.name}
              variants={fadeUp}
              className="tutor-card"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="tutor-mark">{String(index + 1).padStart(2, "0")}</span>
                <span className="area-pill">{tutor.area}</span>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-semibold leading-tight text-white">
                  {tutor.name}
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-400">
                  {tutor.credential}
                </p>
                <p className="mt-6 text-sm leading-7 text-zinc-300">
                  {tutor.promise}
                </p>
              </div>
              <div className="mt-6 rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-red-300">
                  Horario
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {tutor.schedule}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {tutor.themes.map((theme) => (
                  <span key={theme} className="topic-chip">
                    {theme}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-band">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div {...motionProps} variants={fadeUp}>
            <p className="section-kicker">Confianza académica</p>
            <h2 className="section-title">
              Aprender mejor empieza con explicaciones concretas, no con promesas.
            </h2>
            <p className="section-copy">
              El programa combina acompañamiento, práctica y comunidad para que
              cada estudiante pueda comprobar el valor antes de dar el siguiente
              paso.
            </p>
          </motion.div>

          <motion.div
            {...motionProps}
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Autoridad sobria",
                copy: "Credenciales visibles y enfoque por competencias.",
              },
              {
                icon: Zap,
                title: "Valor inmediato",
                copy: "Cada sesión debe dejar una acción de práctica.",
              },
              {
                icon: Users,
                title: "Comunidad activa",
                copy: "El canal mantiene agenda, material y recordatorios.",
              },
              {
                icon: GraduationCap,
                title: "Continuidad natural",
                copy: "SeamosGenios aparece como siguiente paso, no como presión.",
              },
            ].map((item) => (
              <motion.article key={item.title} variants={fadeUp} className="dark-card">
                <item.icon aria-hidden="true" size={24} />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="comunidad" className="section-shell section-gap">
        <div className="community-band">
          <motion.div {...motionProps} variants={fadeUp} className="max-w-2xl">
            <p className="section-kicker">Canal oficial</p>
            <h2 className="section-title">
              El canal es el punto de encuentro: clases, avisos y materiales.
            </h2>
            <p className="section-copy">
              La comunidad convierte la intención en hábito. Entras, recibes la
              agenda y sigues cerca del proceso gratuito.
            </p>
            <a
              href={whatsappChannel}
              target="_blank"
              rel="noreferrer"
              className="primary-action whatsapp-action mt-8"
              aria-label="Unirme al canal oficial de WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Unirme al canal
            </a>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {communityBenefits.slice(0, 4).map((benefit) => (
                <div key={benefit} className="community-mini-item">
                  <Check size={16} aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...motionProps} variants={fadeUp}>
            <ChannelPreview />
          </motion.div>
        </div>
      </section>

      <section id="faq" className="section-band">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...motionProps} variants={fadeUp}>
            <p className="section-kicker">Preguntas frecuentes</p>
            <h2 className="section-title">Lo importante, respondido sin vueltas.</h2>
            <p className="section-copy">
              Si algo todavía no está claro, el canal oficial es el mejor lugar
              para recibir avisos y orientación actualizada.
            </p>
          </motion.div>

          <motion.div {...motionProps} variants={stagger} className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="faq-item"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-semibold sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    id={`faq-${index}`}
                    role="region"
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-zinc-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ChannelPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 850);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/72 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="channel-popup-title"
        >
          <motion.div
            className="channel-popup"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              className="popup-close"
              aria-label="Cerrar invitación al canal"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="relative min-h-[210px] overflow-hidden rounded-[8px] border border-white/10">
              <Image
                src="/reference/classroom-study.jpg"
                alt="Estudiantes preparando una clase con material de apoyo"
                fill
                sizes="(min-width: 768px) 520px, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
              <Image
                src="/brand/mente-sin-limites.png"
                alt="Logo Mentes Sin Límites"
                width={92}
                height={110}
                className="absolute bottom-4 left-4 rounded-full ring-1 ring-red-400/40"
              />
            </div>

            <div className="p-6">
              <p className="section-kicker">Canal oficial</p>
              <h2
                id="channel-popup-title"
                className="mt-3 text-3xl font-semibold leading-tight"
              >
                Entra al canal y reserva tu clase gratuita.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Allí publicamos horarios, recordatorios, materiales y avisos de
                las próximas sesiones de Mentes Sin Límites.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappChannel}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-action whatsapp-action"
                  onClick={() => setIsOpen(false)}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Entrar al canal
                </a>
                <button
                  type="button"
                  className="ghost-action"
                  onClick={() => setIsOpen(false)}
                >
                  Ver la página
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ChannelPreview() {
  return (
    <article className="channel-preview-card" aria-label="Vista previa del canal de WhatsApp">
      <header className="channel-preview-header">
        <Image
          src="/brand/mente-sin-limites.png"
          alt="Mentes Sin Límites"
          width={42}
          height={50}
          className="rounded-full bg-white"
        />
        <div className="min-w-0">
          <h3>GRUPO DE ESTUDIO INTENSIVO GRATUITO PARA LAS PRUEBAS SABER 11</h3>
          <p>4,8 mil seguidores</p>
        </div>
      </header>

      <div className="channel-preview-body">
        <div className="channel-post">
          <div className="schedule-poster">
            <div>
              <p className="poster-title">HORARIO</p>
              <span>ICFES - MATES</span>
            </div>
            <div className="poster-row">
              <strong>19 MAYO</strong>
              <strong>3:00 PM</strong>
            </div>
            <div className="poster-strip">ECUACIONES PARA EL ICFES</div>
            <div className="poster-footer">
              <span>Math con Jean</span>
              <span>Jean Hernández</span>
            </div>
          </div>

          <div className="channel-message">
            <p className="font-semibold text-white">Sesión de Mates (Jean)</p>
            <p>Nos vemos a las 3pm, parte 2, vamos con ecuaciones.</p>
            <p className="text-[#25d366]">meet.google.com/bjy-agcp-fyi</p>
            <p className="text-[#25d366]">whatsapp.com/channel/0029Vb0...</p>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-zinc-500">12:18 p. m.</span>
              <a
                href={whatsappChannel}
                target="_blank"
                rel="noreferrer"
                className="channel-view-link"
              >
                Ver canal
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Hero({ reduceMotion }: { reduceMotion: boolean }) {
  const heroIntro = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: "easeOut" as const },
      };
  const heroStatsMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2, duration: 0.65, ease: "easeOut" as const },
      };

  return (
    <header id="inicio" className="relative min-h-screen overflow-hidden text-white">
      <Image
        src="/brand/colombia-network.png"
        alt="Mapa de Colombia conectado por nodos rojos"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(220,38,38,0.22),transparent_34%),linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.94)_48%,rgba(5,5,5,0.72)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />

      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio">
          <span className="brand-lockup">
            <Image
              src="/brand/mente-sin-limites.png"
              alt="Mentes Sin Límites"
              width={58}
              height={69}
              className="h-14 w-12 rounded-full object-cover ring-1 ring-red-500/30"
            />
            <Image
              src="/brand/seamosgenios.png"
              alt="SeamosGenios"
              width={46}
              height={44}
              className="h-10 w-10 rounded-[8px] bg-white/5 p-1 ring-1 ring-white/15"
            />
          </span>
          <div className="leading-tight">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-red-200">
              SeamosGenios
            </p>
            <p className="text-sm font-semibold tracking-normal text-white">
              Mentes Sin Límites
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ),
          )}
        </div>

        <a
          href={whatsappChannel}
          target="_blank"
          rel="noreferrer"
          className="nav-cta whatsapp-nav"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Canal
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-5 pb-14 pt-10 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <motion.div {...heroIntro} className="max-w-4xl">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="hero-badge">
              <Sparkles size={16} aria-hidden="true" />
              Programa gratuito
            </span>
            <span className="hero-badge subtle">
              Saber 11 / ICFES
            </span>
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1] tracking-normal sm:text-6xl lg:text-7xl">
            Prepárate para el ICFES con una metodología clara y sin costo.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Clases introductorias, práctica guiada y comunidad académica para
            estudiantes que quieren entender la prueba antes de pagar por un
            programa completo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappChannel}
              target="_blank"
              rel="noreferrer"
              className="primary-action whatsapp-action"
              aria-label="Reservar clase gratuita en WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Reservar clase gratuita
            </a>
            <Link href="/estudiantes" className="ghost-action">
              <PlayCircle size={20} aria-hidden="true" />
              Entrar al aula
            </Link>
          </div>
        </motion.div>

        <motion.aside {...heroStatsMotion} className="brand-panel">
          <div className="hero-logo-lockup">
            <Image
              src="/brand/mente-sin-limites.png"
              alt="Logo Mentes Sin Límites"
              width={220}
              height={264}
              className="h-auto w-44 rounded-full object-cover shadow-[0_0_70px_rgba(220,38,38,0.22)]"
              priority
            />
            <Image
              src="/brand/seamosgenios.png"
              alt="Logo SeamosGenios"
              width={88}
              height={85}
              className="rounded-[8px] bg-white/5 p-2 ring-1 ring-white/15"
              priority
            />
          </div>
          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">
              Mentes Sin Límites
            </p>
            <p className="mt-3 text-2xl font-semibold leading-tight">
              Una entrada gratuita a la metodología SeamosGenios.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#030303] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-center gap-4">
          <div className="brand-lockup">
            <Image
              src="/brand/mente-sin-limites.png"
              alt="Mentes Sin Límites"
              width={62}
              height={74}
              className="rounded-full ring-1 ring-red-500/25"
            />
            <Image
              src="/brand/seamosgenios.png"
              alt="SeamosGenios"
              width={46}
              height={44}
              className="rounded-[8px] bg-white/5 p-1 ring-1 ring-white/15"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Mentes Sin Límites</p>
            <p className="mt-1 text-sm text-zinc-500">
              Una iniciativa gratuita de SeamosGenios para Saber 11.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#inicio" className="footer-link">
            Inicio
          </a>
          <Link href="/estudiantes" className="footer-link">
            Aula
          </Link>
          <a
            href={whatsappChannel}
            target="_blank"
            rel="noreferrer"
            className="footer-link whatsapp-footer-link"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-600">
        © 2026 SeamosGenios. Todos los derechos reservados.
      </div>
    </footer>
  );
}
