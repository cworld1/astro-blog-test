import { getCollection, type CollectionKey } from "astro:content";

export function staticFunc() {
  console.log("Static!");
}

export async function dynamicFunc(contentType: CollectionKey = "blog") {
  return await getCollection(contentType);
}
