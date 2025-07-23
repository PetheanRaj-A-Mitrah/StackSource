'use strict';

/**
 * newsletter-sign-up service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsletter-sign-up.newsletter-sign-up');
