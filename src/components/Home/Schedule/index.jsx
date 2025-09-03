import { Card, CardHeader } from "@/components/ui/card";

import DecorativeSvg from "@/components/DecorativeSvg";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="relative flex min-h-screen flex-col justify-center bg-white px-5 py-20 lg:px-8 lg:py-24"
    >
      <div className="z-10 flex flex-col gap-10 2xl:mx-auto 2xl:w-[1430px]">
        <Card className="bg-[#fbfcfd]/80 shadow-lg">
          <CardHeader className="pb-4">
            <h2 className="mb-5 text-4xl font-bold uppercase lg:text-5xl">
              Nos <span className="text-[#b0181c]">horaires</span>
            </h2>

            <div className="lg:flex lg:items-start lg:justify-between">
              <div className="mb-7 flex flex-col gap-5 lg:mb-0">
                <p className="text-lg text-gray-600">
                  Les entraînements ont lieu le lundi, mercredi, jeudi et
                  samedi. Consultez régulièrement notre planning pour être au
                  courant des futurs changements sur notre page{" "}
                  <a
                    href="https://www.instagram.com/geanice06/"
                    className="text-[#b0181c] hover:underline"
                    target="_blank"
                  >
                    instagram
                  </a>
                  .
                </p>

                <ul className="space-y-2 text-[15px]">
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="font-medium">Lundi & Jeudi : </span> 17h30
                    - 20h30
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="font-medium">Mercredi : </span> 19h00 -
                    20h30
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="font-medium">Samedi : </span> 15h30 - 17h30
                  </li>
                </ul>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div>
          <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {/* Lundi */}
              <div className="space-y-4">
                <div className="rounded-lg bg-red-700 p-4 text-center text-white">
                  <h2 className="mb-1 text-xl font-bold">LUNDI</h2>
                  <p className="text-sm opacity-90">
                    10 Boulevard Comte de Falicon
                  </p>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Enfants
                    </span>
                    <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      Lutte
                    </span>
                  </div>
                  <div className="text-center text-xl font-bold text-gray-900 md:text-center">
                    17h30 - 18h45
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Adultes
                    </span>
                    <span className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white">
                      Grappling
                    </span>
                  </div>
                  <div className="text-center text-xl font-bold text-gray-900">
                    18h45 - 20h30
                  </div>
                </div>
              </div>

              {/* Mercredi */}
              <div className="space-y-4">
                <div className="rounded-lg bg-red-700 p-4 text-center text-white">
                  <h2 className="mb-1 text-xl font-bold">MERCREDI</h2>
                  <p className="text-sm opacity-90">63 Boulevard Gorbella</p>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Adultes
                    </span>
                    <span className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white">
                      Grappling
                    </span>
                  </div>
                  <div className="text-center text-xl font-bold text-gray-900">
                    19h00 - 20h30
                  </div>
                </div>
              </div>

              {/* Jeudi */}
              <div className="space-y-4">
                <div className="rounded-lg bg-red-700 p-4 text-center text-white">
                  <h2 className="mb-1 text-xl font-bold">JEUDI</h2>
                  <p className="text-sm opacity-90">
                    10 Boulevard Comte de Falicon
                  </p>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Enfants
                    </span>
                    <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      Lutte
                    </span>
                  </div>
                  <div className="text-center text-xl font-bold text-gray-900">
                    17h30 - 18h45
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Adultes
                    </span>
                    <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      Lutte
                    </span>
                  </div>
                  <div className="text-center text-xl font-bold text-gray-900">
                    18h45 - 20h30
                  </div>
                </div>
              </div>

              {/* Samedi */}
              <div className="space-y-4">
                <div className="rounded-lg bg-red-700 p-4 text-center text-white">
                  <h2 className="mb-1 text-xl font-bold">SAMEDI</h2>
                  <p className="text-sm opacity-90">63 Boulevard Gorbella</p>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Adultes
                    </span>
                    <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      Lutte
                    </span>
                  </div>
                  <div className="text-center text-xl font-bold text-gray-900">
                    15h30 - 17h30
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-center text-lg font-bold text-gray-900">
                INFORMATIONS
              </h3>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Sports par jour */}
                <div>
                  <div className="mb-3 flex items-center">
                    <span className="mr-2 text-lg">🥋</span>
                    <h4 className="font-semibold text-gray-900">
                      Sports par jour
                    </h4>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>Lundi & Mercredi : Grappling adultes</p>
                    <p>Jeudi & Samedi : Lutte adultes</p>
                  </div>
                </div>

                {/* Enfants */}
                <div>
                  <div className="mb-3 flex items-center">
                    <span className="mr-2 text-lg">👶</span>
                    <h4 className="font-semibold text-gray-900">Enfants</h4>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p>Toujours Lutte - Lundi & Jeudi 17h30-18h30</p>
                  </div>
                </div>
              </div>

              {/* Lieux d'entraînement */}
              <div className="mt-6">
                <div className="mb-3 flex items-center">
                  <span className="mr-2 text-lg">📍</span>
                  <h4 className="font-semibold text-gray-900">
                    Lieux d'entraînement
                  </h4>
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    Lundi & Jeudi : 10 Boulevard Comte de Falicon, 06100 Nice
                    Centre Anima Nice Maioun dôu Rai
                  </p>
                  <p>
                    Mercredi & Samedi : 63 Boulevard Gorbella, 06100 Nice -
                    Centre Anima Nice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DecorativeSvg fillColor="#fff" />
    </section>
  );
};

export default Schedule;
