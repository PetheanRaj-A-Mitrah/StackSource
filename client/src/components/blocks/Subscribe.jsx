"use client";
import { subscribeAction } from "@/data/action";
import { useActionState } from "react";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  errorMessage: null,
  successMessage: null,
};

export function Subscribe({
  headline,
  content,
  placeholder,
  buttonText,
}) {
  const [formState, formAction] = useActionState(
    subscribeAction,
    INITIAL_STATE
  );

  const zodErrors = formState?.zodErrors?.email;
  const strapiErrors = formState?.strapiErrors?.message;
  const errorMessage = strapiErrors || zodErrors || formState?.errorMessage;
  const successMessage = formState?.successMessage;


  return (
    <section className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div className="mb-2">
        <h4 className="text-xl font-semibold mb-1 text-gray-900">{headline}</h4>
        <p className="text-gray-600 text-base">{content}</p>
      </div>
      <form className="flex flex-col sm:flex-row gap-3 items-stretch" action={formAction}>
        <input
          name="email"
          type="text"
          placeholder={errorMessage || successMessage || placeholder}
          className={`flex-1 border rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${errorMessage ? "border-red-500 bg-red-50 placeholder-red-400" : "border-gray-300 bg-white placeholder-gray-400"} ${successMessage ? "border-green-500 bg-green-50 placeholder-green-500" : ""}`}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-200 text-base shadow-sm"
        >
          {buttonText}
        </button>
      </form>
      {errorMessage && (
        <div className="text-red-600 text-sm mt-1">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="text-green-600 text-sm mt-1">{successMessage}</div>
      )}
    </section>
  );
}