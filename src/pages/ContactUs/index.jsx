// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";

// Validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// State
import { languageState } from "src/recoil";

// Services
import emailjs from "@emailjs/browser";

// Notifications
import toast, { ToastBar, Toaster } from "react-hot-toast";

// Components
import Button from "src/components/Button";
import FormField from "../../components/FormField";

// Assets
import translations from "src/language/translations";

const createValidationSchema = (translations, language) => {
  return yup.object().shape({
    firstName: yup
      .string()
      .required(
        translations[language].contactUs.form.errorYup.firstName.required,
      )
      .min(2, translations[language].contactUs.form.errorYup.firstName.min),
    name: yup
      .string()
      .required(translations[language].contactUs.form.errorYup.name.required)
      .min(2, translations[language].contactUs.form.errorYup.name.min),
    email: yup
      .string()
      .email(translations[language].contactUs.form.errorYup.email.email)
      .required(translations[language].contactUs.form.errorYup.email.required),
    phoneNumber: yup
      .string()
      .required(
        translations[language].contactUs.form.errorYup.phoneNumber.required,
      )
      .matches(
        /^[0-9\s]+$/,
        translations[language].contactUs.form.errorYup.phoneNumber.matches,
      )
      .transform((value) => value.replace(/\s+/g, "")),
    topic: yup
      .string()
      .required(translations[language].contactUs.form.errorYup.topic.required)
      .min(2, translations[language].contactUs.form.errorYup.topic.min),
    content: yup
      .string()
      .required(translations[language].contactUs.form.errorYup.content.required)
      .min(2, translations[language].contactUs.form.errorYup.content.min),
  });
};

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const language = useRecoilValue(languageState);

  const schema = createValidationSchema(translations, language);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      name: "",
      email: "",
      phoneNumber: "",
      topic: "",
      content: "",
    },
    resolver: yupResolver(schema),
  });

  const contentValue = watch("content", "");

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message envoyé ! Nous vous répondrons rapidement 👍", {
        duration: Infinity,
      });
      reset();
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayez ⚠️", {
        duration: Infinity,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-[68px] flex-1 px-3 py-6 md:px-6 xl:py-10">
      <div className="lg:mx-auto lg:w-[800px] 2xl:w-[950px]">
        <Toaster
          position={window.innerWidth >= 1024 ? "bottom-right" : "top-right"}
          reverseOrder={false}
        >
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  {t.type !== "loading" && (
                    <button onClick={() => toast.dismiss(t.id)}>
                      <i className="fa-solid fa-xmark mt-0.5 text-xl"></i>
                    </button>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>

        <h1 className="text-3xl font-bold xl:mb-3 xl:text-4xl">
          {translations[language].contactUs.title}
        </h1>
        <p className="text-sm text-slate-900 md:text-base">
          {translations[language].contactUs.subTitle}{" "}
          <a
            className="decoration-[#b0181c] hover:underline"
            href="mailto:geanice934@gmail.com"
          >
            <strong className="text-[#b0181c]">geanice934@gmail.com</strong>
          </a>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 text-sm md:text-base xl:mt-7"
        >
          <div className="flex flex-col gap-y-8 md:gap-y-11">
            <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-5">
              <FormField
                className="flex-1"
                id="firstName"
                label={translations[language].contactUs.form.label.firstName}
                register={register}
                type="text"
                placeholder={
                  translations[language].contactUs.form.placeholder.firstName
                }
                icon="user"
                errors={errors.firstName}
              />
              <FormField
                className="flex-1"
                id="name"
                label={translations[language].contactUs.form.label.name}
                register={register}
                type="text"
                placeholder={
                  translations[language].contactUs.form.placeholder.name
                }
                icon="user"
                errors={errors.name}
              />
            </div>

            <FormField
              id="email"
              label={translations[language].contactUs.form.label.email}
              register={register}
              type="email"
              placeholder={
                translations[language].contactUs.form.placeholder.email
              }
              icon="envelope"
              errors={errors.email}
            />

            <FormField
              id="phoneNumber"
              label={translations[language].contactUs.form.label.phoneNumber}
              register={register}
              type="text"
              placeholder={
                translations[language].contactUs.form.placeholder.phoneNumber
              }
              icon="phone"
              errors={errors.phoneNumber}
            />

            <FormField
              id="topic"
              label={translations[language].contactUs.form.label.topic}
              register={register}
              type="text"
              placeholder={
                translations[language].contactUs.form.placeholder.topic
              }
              icon="magnifying-glass"
              errors={errors.topic}
            />

            <div className="relative flex flex-col">
              <label className="mb-1 ml-1 font-bold" htmlFor="content">
                {translations[language].contactUs.form.label.content}
              </label>

              <textarea
                {...register("content")}
                className="h-32 resize rounded-2xl border border-slate-500 bg-transparent p-3 pb-6 placeholder:pl-1 focus:outline-[#b0181c] lg:h-40"
                id="content"
                name="content"
                placeholder={
                  translations[language].contactUs.form.placeholder.content
                }
                maxLength="600"
              />
              <span className="absolute bottom-1.5 left-3.5">
                {contentValue.length}/600
              </span>
              {errors.content && (
                <p className="absolute -bottom-6 left-1 text-sm text-red-600 md:-bottom-7 md:text-base">
                  <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                  {errors.content.message}
                </p>
              )}
            </div>

            <Button className="mt-2 bg-[#b0181c] font-bold text-white hover:bg-[#7d2a2d] lg:!py-4">
              {isLoading ? (
                <i className="fa-solid fa-spinner animate-spin lg:text-2xl"></i>
              ) : (
                <>
                  {translations[language].contactUs.form.btnSubmit}
                  <i className="fa-solid fa-arrow-right-long ml-3"></i>
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
