import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const BASE_URL = getStrapiURL();
const BLOG_PAGE_SIZE = 3;
const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        "blocks.expertise-section": {
          populate: {
            services: {
              populate: {
                icon: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "blocks.android-outsourcing-info": {
          populate: {
            outsourcing_content: {
              populate: true,
            },
          },
        },
        "blocks.best-practices-section": {
          populate: {
            sections: {
              populate: {
                items: {
                  populate: true,
                },
              },
            },
          },
        },
        "blocks.technology-section": {
          populate: {
            items: {
              fields: ["name", "category", "link", "isTrending"],
              populate: {
                logo: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "blocks.schedule-section": {
          populate: {
            banner: {
              fields: ["url", "alternativeText"],
            },
            schedule_items: {
              populate: {
                icon: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            cta: true,
          },
        },
        "blocks.faq-section": {
          populate: {
            faq_questions: true,
          },
        },
        "blocks.trusted-by-section": {
          populate: {
            logos: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        "blocks.contact-form-section": {
          populate: {
            logo: {
              fields: ["url", "alternativeText"],
            },
            services: true,
          },
        },
        "blocks.previous-work-section": {
          populate: {
            categories: {
              populate: {
                items: true
              },
            },
          },
        },
      },
    },
  },
});

export async function getHomePage() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug) =>
  qs.stringify(
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: {
        blocks: {
          on: {
            "blocks.hero-section": {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            "blocks.expertise-section": {
              populate: {
                services: {
                  populate: {
                    icon: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
              },
            },
            "blocks.android-outsourcing-info": {
              populate: {
                outsourcing_content: {
                  populate: true,
                },
              },
            },
            "blocks.best-practices-section": {
              populate: {
                sections: {
                  populate: {
                    items: {
                      populate: true,
                    },
                  },
                },
              },
            },
            "blocks.technology-section": {
              populate: {
                items: {
                  fields: ["name", "category", "link", "isTrending"],
                  populate: {
                    logo: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
              },
            },
            "blocks.schedule-section": {
              populate: {
                banner: {
                  fields: ["url", "alternativeText"],
                },
                schedule_items: {
                  populate: {
                    icon: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
                cta: true,
              },
            },
            "blocks.faq-section": {
              populate: {
                faq_questions: true,
              },
            },
            "blocks.trusted-by-section": {
              populate: {
                logos: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            "blocks.contact-form-section": {
              populate: {
                logo: {
                  fields: ["url", "alternativeText"],
                },
                services: true,
              },
            },
            "blocks.previous-work-section": {
              populate: {
                categories: {
                  populate: {
                    items: true, // This will fetch all previous works under each category
                  },
                },
              },
            },
          },
        },
      },
      publicationState: "live",
    },
    { encodeValuesOnly: true }
  );

export async function getPageBySlug(slug) {
  const path = "/api/pages";
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            logo_img: {
              fields: ["url", "alternativeText"],
            },
            fields: ["logoText"],
          },
        },

        navigation: {
          populate: {

            fields: ["Name", "href"],

            MenuItems: {
              populate: {

                fields: ["Name", "href"],
              },
            },
          },
        },
        cta: {
          populate: {

            fields: ["Name", "href"],
          },
        },
      },
    },
    footer: {
      fields: ["copy"],
      populate: {
        logo: {
          populate: {
            logo_img: {
              fields: ["url", "alternativeText"],
            },
            fields: ["logoText"],
          },
        },
        Menu: {
          populate: {
            fields: ["Name", "href"],
            MenuItems: {
              populate: {
                fields: ["Name", "href"],
              },
            },
          },
        },
        Policies: {
          populate: {
            fields: ["Name", "href"],
          },
        },
        socialLinks: {
          populate: {
            social_icon: {
              fields: ["url", "alternativeText"],
            },
            fields: ["href"],
          },
        },
      },
    },
  },
}, {
  encodeValuesOnly: true,
});

export async function getGlobalSettings() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}

export async function getContent() {
  const path = "/api/technologies";
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    populate: {
      items: {
        fields: ["name", "category", "link", "isTrending"],
        populate: {
          logo: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  })
  return fetchAPI(url.href, { method: "GET" });
}


const blogPopulate = {
  blocks: {
    on: {
      "blocks.hero-section": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          logo: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          cta: true,
        },
      },
      "blocks.info-block": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          cta: true,
        },
      },
      "blocks.featured-article": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: true,
        },
      },
      "blocks.subscribe": {
        populate: true,
      },
      "blocks.heading": {
        populate: true,
      },
      "blocks.paragraph-with-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.paragraph": {
        populate: true,
      },
      "blocks.full-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  },
};

export async function getContentBySlug(slug, path) {
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      ...blogPopulate,
    },
  });

  return fetchAPI(url.href, { method: "GET" });
} 