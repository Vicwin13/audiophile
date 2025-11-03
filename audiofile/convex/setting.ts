
// convex/settings.ts

import { query } from "./_generated/server";

export const getSettings = query({
  handler: async (ctx) => {
    // You can store these in a settings table in Convex
    return {
      vatRate: 20, // 20% VAT
      shippingFee: 50, // $50 shipping
      // Add other settings as needed
    };
  },
});