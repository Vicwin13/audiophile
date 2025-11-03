import { mutation, query } from "./_generated/server";

import {v} from "convex/values"

export const list = query({
  args: {
    category: v.optional(
      v.union(v.literal("speakers"), v.literal("headphones"), v.literal("earphones"))
    ),
  },
  handler: async (ctx, { category }) => {
    let q = ctx.db.query("products").withIndex("by_active", (x) => x.eq("isActive", true));
    if (category) {
     
      q = ctx.db.query("products").withIndex("by_category", (x) => x.eq("category", category));
    }
    const items = await q.collect();
    return items.sort((a, b) => b.createdAt - a.createdAt);
  },
});




export const bySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
  },
});

export const create = mutation({
  args: {
   title: v.string(),
    slug: v.string(),
    price: v.number(),
    image: v.optional(v.string()),
    description: v.optional(v.string()),
    category: v.union(
      v.literal('headphones'),
      v.literal('speakers'),
      v.literal('earphones')
    ),
    features: v.string(),
    isFeatured: v.optional(v.boolean()),
    image1: v.optional(v.string()),
    image2: v.optional(v.string()),
    image3: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("products")
      .withIndex("by_slug", q => q.eq('slug', args.slug))
      .unique();
    
    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        isActive: true,
      })
      return existing._id
    }
    return await ctx.db.insert("products", {
      ...args,
      isActive: true,
      createdAt:Date.now()
    })
   
  },


});

export const seedProducts = mutation({
  args: {
    products: v.array(v.object({
      title: v.string(),
      slug: v.string(),
      price: v.number(),
      image: v.string(),
      description: v.string(),
      category: v.union(v.literal('headphones'), v.literal('speakers'), v.literal('earphones')),
      features: v.string(),
      isFeatured: v.optional(v.boolean()),
    }))
  },
  handler: async (ctx, args) => {
    const productIds = [];
    for (const product of args.products) {
      const productId = await ctx.db.insert("products", {
        ...product,
        isActive: true,
        createdAt: Date.now(),
      });
      productIds.push(productId);
    }
    return productIds;
  },
});

export const seedOnce = mutation({
  args: {
    products: v.array(v.object({
      title: v.string(),
      slug: v.string(),
      price: v.number(),
      image: v.optional(v.string()),
      description: v.optional(v.string()),
      category: v.union(v.literal("headphones"), v.literal("speakers"), v.literal("earphones")),
      features: v.string(),
      isFeatured: v.optional(v.boolean()),
    }))
  },
  handler: async (ctx, { products }) => {
    for (const p of products) {
      const existing = await ctx.db
        .query("products")
        .withIndex("by_slug", q => q.eq("slug", p.slug))
        .unique();
      if (existing) {
        await ctx.db.patch(existing._id, { ...p });
      } else {
        await ctx.db.insert("products", { ...p, isActive: true, createdAt: Date.now() });
      }
    }
    return true;
  },
});




export const getProductBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .filter((q) => q.eq(q.field("isActive"), true))
      .first();
  },
});

export const getProductsByCategory = query({
  args: { category: v.union(v.literal('headphones'), v.literal('speakers'), v.literal('earphones')) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const getAllActiveProducts = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("products")
      .withIndex("by_active", (q) => q.eq("isActive", true))
      .collect();
  },
});

