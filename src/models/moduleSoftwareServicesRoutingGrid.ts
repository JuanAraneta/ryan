import { componentLink } from "./componentLink";
import { pageServiceDetails } from "./pages/pageService";
import { pageSoftwareDetails } from "./pages/pageSoftware";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentTestimonial = {
  sys: { id: "componentTestimonial" },
  name: "Component / Testimonial",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "testimonial", name: "Testimonial" }),
    createField("assetReference", {
      id: "image",
      name: "Image",
      imagesOnly: true,
    }),
    createField("assetReference", {
      id: "logo",
      name: "Logo",
      imagesOnly: true,
    }),
  ],
} as const satisfies ExpandedContentModel;

export const moduleSoftwareServicesRoutingGrid = {
  sys: { id: "moduleSoftwareServicesRoutingGrid" },
  name: "Module / Software & services routing grid",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "title", name: "Title" }),
    createField("richText", { id: "description", name: "Description" }),
    createField("entryReference", {
      id: "cta",
      name: "Call to action",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      array: true,
      size: { min: 4, max: 25 },
      id: "gridItems",
      name: "Grid items",
      linkContentType: [pageSoftwareDetails, pageServiceDetails],
    }),
    createField("entryReference", {
      id: "testimonial",
      name: "Testimonial",
      linkContentType: [componentTestimonial],
    }),
  ],
} as const satisfies ExpandedContentModel;
