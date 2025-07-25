const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "https://worthy-cheese-16c170eb03.strapiapp.com/";

export async function subscribeService(email) {
  const url = new URL("/api/newsletter-sign-ups", BASE_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email,
        },
      }),
    });

    return response.json();
  } catch (error) {
    console.error("Subscribe Service Error:", error);
  }
}


export async function eventsSubscribeService(data) {
  const url = new URL("/api/event-signups", BASE_URL);

  try {
    const response = await fetch(url.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { ...data } }),
    });
    return await response.json();
  } catch (error) {
    console.error("Events Subscribe Service Error:", error);
  }
}


export async function contactDetailsService(data) {
  const url = new URL("/api/contact-submissions", BASE_URL);

  try {
    const response = await fetch(url.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    return await response.json();
  } catch (error) {
    console.error("Contact Submit Error:", error);
  }
}