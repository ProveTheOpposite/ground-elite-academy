"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CardContent } from "../ui/card";

import { initEmailJs } from "@/assets/javascript/emailJs";
import emailjs from "@emailjs/browser";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  LoaderCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
  X,
} from "lucide-react";

import { toast, ToastBar, Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object({
    firstName: yup
      .string()
      .required("Prénom requis")
      .min(2, "Prénom trop court"),
    lastName: yup.string().required("Nom requis").min(2, "Nom trop court"),
    email: yup.string().email("Email invalide").required("Email requis"),
    phone: yup
      .string()
      .required("Numéro de téléphone requis")
      .matches(/^[0-9\s]+$/, "Numéro de téléphone invalide")
      .transform((value) => value.replace(/\s+/g, "")),
    subject: yup.string().required("Sujet requis"),
    message: yup
      .string()
      .required("Message requis")
      .min(10, "Message trop court")
      .max(600, "Message trop long"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const messageValue = watch("message", "");

  useEffect(() => {
    initEmailJs();
  }, []);

  const submitForm = async (values) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
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
    <CardContent>
      <Toaster position="top-center" reverseOrder={false}>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>
                    <X className="h-4 w-4 cursor-pointer" />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>

      <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              Prénom
            </Label>
            <div>
              <div className="relative">
                <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input
                  {...register("firstName")}
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Votre prénom ici..."
                  className="h-12 border-gray-200 pl-10 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              {errors.firstName && (
                <p className="mt-2 pl-2 text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Nom
            </Label>
            <div>
              <div className="relative">
                <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input
                  {...register("lastName")}
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Votre nom ici..."
                  className="h-12 border-gray-200 pl-10 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              {errors.lastName && (
                <p className="mt-2 pl-2 text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <div>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                {...register("email")}
                id="email"
                name="email"
                type="email"
                placeholder="Votre email ici..."
                className="h-12 border-gray-200 pl-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>

            {errors.email && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Numéro de téléphone
          </Label>
          <div>
            <div className="relative">
              <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                {...register("phone")}
                id="phone"
                name="phone"
                type="tel"
                placeholder="Votre numéro de téléphone ici..."
                className="h-12 border-gray-200 pl-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>

            {errors.phone && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="subject"
            className="text-sm font-medium text-gray-700"
          >
            Sujet
          </Label>
          <div>
            <div className="relative">
              <MessageSquare className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                {...register("subject")}
                id="subject"
                name="subject"
                type="text"
                placeholder="Votre sujet ici..."
                className="h-12 border-gray-200 pl-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>

            {errors.subject && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </Label>
          <div>
            <div className="relative">
              <Textarea
                {...register("message")}
                id="message"
                name="message"
                placeholder="Votre message ici..."
                className="min-h-[140px] resize-y border-gray-200 focus:border-red-500 focus:ring-red-500"
                maxLength={600}
              />
              <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                {messageValue.length}/600
              </div>
            </div>

            {errors.message && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="h-12 w-full transform bg-[#b0181c] font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#ad2a2d]"
        >
          {isLoading ? (
            <LoaderCircle className="h-6! w-6! animate-spin" />
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Envoyer
            </>
          )}
        </Button>
      </form>
    </CardContent>
  );
};

export default ContactForm;
