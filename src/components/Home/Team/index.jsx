import DecorativeSvg from "@/components/DecorativeSvg";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section
      id="team"
      className="relative flex min-h-screen flex-col pb-20 xl:pb-24"
    >
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden py-20 xl:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-slate-900 uppercase lg:text-5xl">
            Notre <span className="text-[#b0181c]">Équipe</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
            Nos entraîneurs allient expertise et passion pour vous accompagner
            vers l'excellence, quel que soit votre niveau. Ensemble, nous vous
            aiderons à surpasser vos limites et à révéler le meilleur de
            vous-même.
          </p>
        </div>
      </div>

      {/* Team Stats */}
      <div className="bg-white/50 py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">200+</div>
              <div className="font-medium text-slate-600">Élèves formés</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">10+</div>
              <div className="font-medium text-slate-600">Titres remportés</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">22+</div>
              <div className="font-medium text-slate-600">
                Années d'expérience
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">100%</div>
              <div className="font-medium text-slate-600">Passion</div>
            </div>
          </div>
        </div>
      </div>

      <TeamMember />

      <DecorativeSvg />
    </section>
  );
};

export default Team;
