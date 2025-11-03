import { defineSchema, defineTable } from "convex/server";

import { title } from "process";
import { v } from "convex/values";

export default defineSchema({

  products: defineTable({
    title: v.string(),
    slug: v.string(),
    price: v.number(),
    image: v.optional(v.string()),
    description: v.optional(v.string()),
    createdAt: v.number(),
    isActive: v.boolean(),
    category: v.union(
      v.literal('headphones'),
      v.literal('speakers'),
      v.literal('earphones')
    ),
    features: v.optional(v.string()),
    isFeatured: v.optional(v.boolean()),
    image1: v.optional(v.string()),
    image2:v.optional(v.string()),
    image3:v.optional(v.string()),
    
  }).index("by_slug", ['slug'])
    .index('by_active', ['isActive'])
  .index("by_category", ["category"]),
  

  productFeatures: defineTable({
    productId: v.id("products"),
    desc_a: v.string(),
    desc_b: v.string(),
    itemA: v.string(),
    itemB: v.string(),
    itemC: v.string(),
    itemD: v.string(),
    itemE: v.optional(v.string()),
    noA: v.number(),
    noB: v.number(),
    noC: v.number(),
    noD: v.number(),
    noE: v.optional(v.number()),
  }).index("by_product", ["productId"])

});