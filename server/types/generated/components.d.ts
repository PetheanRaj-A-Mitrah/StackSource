import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAndroidOutsourcingInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_android_outsourcing_infos';
  info: {
    displayName: 'Outsourcing Info';
  };
  attributes: {
    outsourcing_content: Schema.Attribute.Component<
      'elements.heading-with-paragraph',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksBestPracticesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_best_practices_sections';
  info: {
    displayName: 'Best Practices Section';
  };
  attributes: {
    intro: Schema.Attribute.Text;
    main_title: Schema.Attribute.String;
    sections: Schema.Attribute.Component<'elements.section-item', true>;
  };
}

export interface BlocksContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_form_sections';
  info: {
    displayName: 'Contact Form Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'>;
    services: Schema.Attribute.Component<'elements.radio-option', true>;
    submit_button_label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksExpertiseSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_expertise_sections';
  info: {
    displayName: 'Expertise Section';
  };
  attributes: {
    services: Schema.Attribute.Component<'elements.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    faq_questions: Schema.Attribute.Component<'elements.faq', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left ', 'right']>;
    buttonLabel: Schema.Attribute.String;
    buttonLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    preTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Blocks;
  };
}

export interface BlocksPreviousWorkSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_previous_work_sections';
  info: {
    displayName: 'Previous Work Section';
  };
  attributes: {
    categories: Schema.Attribute.Component<'elements.service-category', true>;
    mainTitle: Schema.Attribute.String;
  };
}

export interface BlocksScheduleSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_schedule_sections';
  info: {
    displayName: 'Schedule Section';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.menu-item', true>;
    main_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our process. Simple, seamless, streamlined.'>;
    schedule_items: Schema.Attribute.Component<'elements.schedule-item', true>;
  };
}

export interface BlocksTechnologySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_technology_sections';
  info: {
    displayName: 'Technology Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    items: Schema.Attribute.Component<'elements.technology-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTrustedBySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_trusted_by_sections';
  info: {
    displayName: 'Trusted By Section';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsBlockItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_block_items';
  info: {
    displayName: 'block-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFaq extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    questions: Schema.Attribute.String;
  };
}

export interface ElementsHeadingWithParagraph extends Struct.ComponentSchema {
  collectionName: 'components_elements_heading_with_paragraphs';
  info: {
    displayName: 'Heading with Paragraph';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Blocks;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    MenuItems: Schema.Attribute.Component<'elements.menu-item', true>;
    Name: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logo_img: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_menu_items';
  info: {
    displayName: 'menu-item';
  };
  attributes: {
    Category: Schema.Attribute.Enumeration<
      [
        'Top Solutions',
        'Enterprise Focused',
        'Careers',
        'Recognitions',
        'Inside StackSource',
      ]
    > &
      Schema.Attribute.DefaultTo<'Top Solutions'>;
    href: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/start/basic-details'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Schedule a Call'>;
  };
}

export interface ElementsPreviousWork extends Struct.ComponentSchema {
  collectionName: 'components_elements_previous_works';
  info: {
    displayName: 'Previous Work';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ElementsRadioOption extends Struct.ComponentSchema {
  collectionName: 'components_elements_radio_options';
  info: {
    displayName: 'radio-option';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsScheduleItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_schedule_items';
  info: {
    displayName: 'schedule-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    preTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_section_items';
  info: {
    displayName: 'section-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'elements.block-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsServiceCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_categories';
  info: {
    displayName: 'Service Category';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'elements.previous-work', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    social_icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsTechnologyItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_technology_items';
  info: {
    displayName: 'technology-item';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'All',
        'Cloud Computing',
        'Data Science',
        'Databases',
        'DevOps and QA',
        'Java',
        'JavaScript',
        'PHP',
        'Python',
      ]
    >;
    isTrending: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/technologies'>;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copy: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    Menu: Schema.Attribute.Component<'elements.link', true>;
    name: Schema.Attribute.String;
    Policies: Schema.Attribute.Component<'elements.menu-item', true>;
    socialLinks: Schema.Attribute.Component<'elements.social-links', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.menu-item', true>;
    logo: Schema.Attribute.Component<'elements.logo', true>;
    name: Schema.Attribute.String;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.android-outsourcing-info': BlocksAndroidOutsourcingInfo;
      'blocks.best-practices-section': BlocksBestPracticesSection;
      'blocks.contact-form-section': BlocksContactFormSection;
      'blocks.expertise-section': BlocksExpertiseSection;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.previous-work-section': BlocksPreviousWorkSection;
      'blocks.schedule-section': BlocksScheduleSection;
      'blocks.technology-section': BlocksTechnologySection;
      'blocks.trusted-by-section': BlocksTrustedBySection;
      'elements.block-item': ElementsBlockItem;
      'elements.faq': ElementsFaq;
      'elements.heading-with-paragraph': ElementsHeadingWithParagraph;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.menu-item': ElementsMenuItem;
      'elements.previous-work': ElementsPreviousWork;
      'elements.radio-option': ElementsRadioOption;
      'elements.schedule-item': ElementsScheduleItem;
      'elements.section-item': ElementsSectionItem;
      'elements.service-card': ElementsServiceCard;
      'elements.service-category': ElementsServiceCategory;
      'elements.social-links': ElementsSocialLinks;
      'elements.technology-item': ElementsTechnologyItem;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
