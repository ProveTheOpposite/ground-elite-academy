import {
  AlertCircle,
  ArrowLeft,
  Home,
  Mail,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import Link from "next/link";

const ErrorFetchArticlesData = () => {
  return (
    <section className="flex items-start justify-center px-5 py-7">
      <div
        role="alert"
        className="w-full max-w-147.5 rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_18px_50px_rgba(15,23,42,0.09)] sm:p-10"
      >
        <div className="mx-auto flex size-19 items-center justify-center rounded-full bg-red-50 ring-8 ring-red-50/60">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#c91520] text-white shadow-lg shadow-red-200">
            <AlertCircle
              className="size-7"
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold tracking-wider text-[#b8171f] uppercase">
          <WifiOff className="size-3.5" aria-hidden="true" /> Service
          momentanément indisponible
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
          Quelque chose ne s&apos;est pas passé comme prévu
        </h2>
        <p className="mx-auto mt-4 max-w-107.5 text-[15px] leading-7 text-slate-600">
          Nous rencontrons un petit problème technique. Vos données sont en
          sécurité. Réessayez dans quelques instants ou contactez-nous si le
          problème persiste.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91520] px-5 py-3 text-sm font-bold text-white shadow-[0_7px_16px_rgba(201,21,32,0.22)] transition hover:bg-[#a9131c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c91520]"
          >
            <RefreshCw className="size-4" aria-hidden="true" /> Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <Home className="size-4" aria-hidden="true" /> Retour à
            l&apos;accueil
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 border-t border-slate-100 pt-6 text-sm text-slate-500">
          <Mail className="size-4 text-[#c91520]" aria-hidden="true" /> Besoin
          d&apos;aide ?{" "}
          <Link
            href="/contact-us"
            className="font-semibold text-[#b8171f] hover:underline"
          >
            Contactez notre équipe
          </Link>
          <ArrowLeft className="ml-1 size-3.5 rotate-180" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default ErrorFetchArticlesData;
