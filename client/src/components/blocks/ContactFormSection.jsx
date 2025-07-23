"use client";

import { useActionState } from "react";
import { StrapiImage } from "../StrapiImage";
import { SubmitButton } from "../SubmitButton";
import { contactFormAction } from "@/data/action";

const INITIAL_STATE = {
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: null,
    formData: null,
};

function InputField({ id, label, name, type = "text", error, defaultValue }) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                defaultValue={defaultValue}
                className="w-full border px-4 py-2 rounded"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

function TextAreaField({ id, label, name, error, defaultValue }) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <textarea
                name={name}
                id={id}
                defaultValue={defaultValue}
                className="w-full border px-4 py-2 rounded min-h-[100px]"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export default function ContactFormSection({ data }) {
    const [formState, formAction] = useActionState(contactFormAction, INITIAL_STATE);
    const { logo, description, submit_button_label, services } = data;

    const zodErrors = formState?.zodErrors ?? {};
    const strapiErrors = formState?.strapiErrors;
    const successMessage = formState?.successMessage;

    return (
        <section className="max-w-4xl mx-auto py-12 px-4 md:px-0">
            {logo && (
                <div className="mb-6">
                    <StrapiImage
                        src={logo.url}
                        width={148}
                        height={48}
                        alt={logo.alternativeText || "Logo"}
                        className="h-20 w-auto"
                    />
                </div>
            )}

            <p className="text-gray-700 mb-6">{description}</p>

            <form action={formAction} className="space-y-6">
                <InputField
                    id="name"
                    name="name"
                    label="Your Name"
                    error={zodErrors.name}
                    defaultValue={formState?.formData?.name}
                />

                <InputField
                    id="email"
                    name="email"
                    type="email"
                    label="Your Work Email"
                    error={zodErrors.email}
                    defaultValue={formState?.formData?.email}
                />

                <div>
                    <p className="font-medium mb-2">Select your service</p>
                    <div className="flex flex-wrap gap-6">
                        {services?.map((service, idx) => (
                            <label key={idx} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="service"
                                    value={service.value}
                                    defaultChecked={formState?.formData?.service === service.value}
                                />
                                <span>{service.label}</span>
                            </label>
                        ))}
                    </div>
                    {zodErrors.service && (
                        <p className="text-red-500 text-sm mt-1">{zodErrors.service}</p>
                    )}
                </div>

                <TextAreaField
                    id="message"
                    name="message"
                    label="How can we help?"
                    error={zodErrors.message}
                    defaultValue={formState?.formData?.message}
                />

                <div className="flex justify-end pt-4">
                    <SubmitButton
                        text={submit_button_label}
                        className="bg-black text-white px-6 py-2 rounded flex items-center gap-2"
                    />
                </div>

                {strapiErrors && <p className="text-red-500">{strapiErrors}</p>}
                {successMessage && <p className="text-green-600">{successMessage}</p>}
            </form>
        </section>
    );
}
