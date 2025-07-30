"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Phone } from "lucide-react";

const RequestForInformations = () => {
  const router = useRouter();

  return (
    <section className="relative flex flex-col justify-center px-5 py-20 text-center md:pb-32 xl:py-36">
      <svg
        className="absolute bottom-[100%] left-0 z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fbfcfd"
          fillOpacity="1"
          d="M0,160L17.1,181.3C34.3,203,69,245,103,229.3C137.1,213,171,139,206,117.3C240,96,274,128,309,144C342.9,160,377,160,411,186.7C445.7,213,480,267,514,261.3C548.6,256,583,192,617,165.3C651.4,139,686,149,720,181.3C754.3,213,789,267,823,282.7C857.1,299,891,277,926,250.7C960,224,994,192,1029,186.7C1062.9,181,1097,203,1131,213.3C1165.7,224,1200,224,1234,208C1268.6,192,1303,160,1337,133.3C1371.4,107,1406,85,1423,74.7L1440,64L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>

      <h2 className="mb-5 text-3xl font-bold uppercase lg:text-4xl">
        Contactez-nous pour plus{" "}
        <span className="text-[#b0181c]">d'informations</span>
      </h2>

      <div>
        <p className="text-lg text-gray-600">
          Pour toute demande d'information ou autre, contactez-nous dès
          maintenant !
        </p>
      </div>

      <div className="mt-12 text-center">
        <Button
          onClick={() => router.push("/contact-us")}
          size="xl"
          className="border bg-[#b0181c] font-semibold text-white hover:border-[#b0181c] hover:bg-gray-50 hover:text-[#b0181c] lg:text-base"
        >
          <Phone className="mr-2 h-5 w-5 lg:h-8 lg:w-8" />
          Contactez-nous
        </Button>
      </div>
    </section>
  );
};

export default RequestForInformations;
