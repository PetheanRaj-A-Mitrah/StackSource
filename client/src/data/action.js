"use server";
import { z } from "zod";
import { subscribeService, eventsSubscribeService, contactDetailsService } from "./services";

const subscribeSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export async function subscribeAction(prevState, formData) {
  const email = formData.get("email");

  const validatedFields = subscribeSchema.safeParse({
    email: email
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }

  const responseData = await subscribeService(validatedFields.data.email);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      errorMessage: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      errorMessage: "Failed to Subscribe.",
    };
  }

  return {
    ...prevState,
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: "Successfully Subscribed!",
  };

}

const eventsSubscribeSchema = z.object({
  firstName: z.string().min(1, {
    message: "Please enter your first name",
  }),
  lastName: z.string().min(1, {
    message: "Please enter your last name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  telephone: z.string()
    .min(1, { message: "Please enter your phone number" })
    .regex(/^(\+\d{1,3}[-.]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {
      message: "Please enter a valid phone number",
    }),
});


export async function eventsSubscribeAction(prevState, formData) {
  const formDataObject = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    eventId: formData.get("eventId"),
  }

  const validatedFields = eventsSubscribeSchema.safeParse(formDataObject);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      formData: {
        ...formDataObject,
      },
    };
  }



  const dataToSend = {
    ...validatedFields.data,
    event: {
      connect: [formDataObject.eventId],
    },
  };

  const responseData = await eventsSubscribeService(dataToSend);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      errorMessage: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      formData: {
        ...formDataObject,
      },
      errorMessage: "Failed to Subscribe.",

    };
  }

  return {
    ...prevState,
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    formData: null,
    successMessage: "Successfully Subscribed!",
  };
}

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});


export async function contactFormAction(prevState, formData) {
  const formDataObject = {
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const validatedFields = contactFormSchema.safeParse(formDataObject);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      formData: formDataObject,
    };
  }

  const responseData = await contactDetailsService(validatedFields.data);

  if (!responseData || responseData.error) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: responseData?.error ?? "Something went wrong",
      formData: formDataObject,
    };
  }

  return {
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: "Successfully Submitted!",
    formData: null,
  };
}
