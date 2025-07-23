"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  text,
  className,
}) {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={status.pending}
      disabled={status.pending}
      className={className}
    >
      {status.pending ? "Loading..." : text}
    </button>
  );
}