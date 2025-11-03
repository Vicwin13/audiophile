import { mutation, query } from "./_generated/server"

import { v } from "convex/values"

export const getFeatures = query({
    args: { productId: v.id("products") },
    handler: async (ctx, { productId }) => {
        return await ctx.db.query("productFeatures")
        .withIndex("by_product", q => q.eq("productId", productId))
        .unique()
    }
})


export const setBySlug = mutation({
    args: {
        slug: v.string(),
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
    },
    handler: async (ctx, args) => {

        const product = await ctx.db.query("products")
            .withIndex("by_slug", q => q.eq("slug", args.slug))
            .unique();

        if (!product) {
            throw new Error("Product not found for the given slug.");
        }
        const existing = await ctx.db.query("productFeatures")
            .withIndex("by_product", q => q.eq("productId", product._id))
            .unique()

           const doc = {
      productId: product._id,
      desc_a: args.desc_a,
      desc_b: args.desc_b,
      itemA: args.itemA,
      itemB: args.itemB,
      itemC: args.itemC,
      itemD: args.itemD,
      itemE: args.itemE,
      noA: args.noA,
      noB: args.noB,
      noC: args.noC,
      noD: args.noD,
      noE: args.noE,
        };
        
        
        if (existing) {
            await ctx.db.patch(existing._id, doc);
            return existing._id
        }
        return await ctx.db.insert("productFeatures", doc)
    }
})