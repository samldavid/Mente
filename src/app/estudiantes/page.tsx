import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Target,
} from "lucide-react";
import {
  studentPath,
  studentResources,
  whatsappChannel,
} from "@/data/landing";

export const metadata = {
  title: "Aula gratuita | Mentes Sin Límites",
  description:
    "Entrada para estudiantes de Mentes Sin Límites: agenda, ruta de práctica y acceso al canal oficial.",
};

export default function StudentsPage() {
  return (
    <main className="student-page-shell">
      <nav className="section-shell flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Volver al inicio">
          <Image
            src="/brand/mente-sin-limites.png"
            alt="Mentes Sin Límites"
            width={52}
            height={62}
            className="rounded-full ring-1 ring-red-500/30"
          />
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-red-200">
              Aula gratuita
            </p>
            <p className="text-sm font-semibold">Mentes Sin Límites</p>
          </div>
        </Link>
        <Link href="/" className="secondary-action hidden sm:inline-flex">
          <ArrowLeft size={18} aria-hidden="true" />
          Inicio
        </Link>
      </nav>

      <section className="section-shell grid gap-10 pb-16 pt-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="section-kicker">Para estudiantes</p>
          <h1 className="section-title">
            Usa esta entrada antes y después de cada clase gratuita.
          </h1>
          <p className="section-copy">
            Aquí tienes una ruta corta para orientarte: revisa la agenda, elige
            un área, practica una pregunta y llega al canal con una duda concreta.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappChannel}
              target="_blank"
              rel="noreferrer"
              className="primary-action"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Abrir canal oficial
            </a>
            <a href="#ruta" className="ghost-action">
              Ver ruta de estudio
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="brand-panel">
          <Image
            src="/brand/mente-sin-limites.png"
            alt="Logo Mentes Sin Límites"
            width={180}
            height={216}
            className="mx-auto rounded-full"
            priority
          />
          <div className="mt-7 grid gap-3">
            {[
              ["Próximo paso", "Entrar al canal y revisar agenda"],
              ["Tiempo sugerido", "25 minutos de práctica"],
              ["Meta", "Llegar con una duda concreta"],
            ].map(([label, value]) => (
              <div key={label} className="student-card">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-300">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="ruta" className="section-band">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-kicker">Ruta rápida</p>
            <h2 className="section-title">Cuatro pasos para aprovechar la clase.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {studentPath.map((step, index) => (
              <article key={step.title} className="student-card">
                <span className="process-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-gap">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Áreas de práctica</p>
            <h2 className="section-title">Elige por dónde empezar.</h2>
            <p className="section-copy">
              No necesitas hacerlo todo el mismo día. Escoge un bloque, practica
              con calma y lleva tus preguntas a la siguiente sesión.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {studentResources.map((resource) => (
              <article key={resource.label} className="student-card">
                <BookOpenCheck className="text-red-400" size={24} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold">{resource.label}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {resource.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              title: "Agenda",
              copy: "Revisa el canal antes de cada semana para confirmar horarios.",
            },
            {
              icon: Target,
              title: "Objetivo",
              copy: "Trabaja una pregunta por área y detecta el tipo de error.",
            },
            {
              icon: CheckCircle2,
              title: "Seguimiento",
              copy: "Marca lo que entendiste y vuelve con una duda específica.",
            },
          ].map((item) => (
            <article key={item.title} className="dark-card">
              <item.icon className="text-red-400" size={24} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
