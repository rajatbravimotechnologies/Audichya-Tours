import React, { useEffect } from "react";
import { siteConfig } from "../../config/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: BreadcrumbItem[];
}

const BASE_URL = "https://audichyatours.in";

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  ogImage = "/images/Udaipur Sunset by the Lake.png",
  schema,
  breadcrumbs,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: "name" | "property", value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Canonical URL
    const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
    const fullCanonical = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;
    setLinkTag("canonical", fullCanonical);

    // 3. Meta Description
    setMetaTag("name", "description", description);

    // 4. OpenGraph Metadata
    const fullImageUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", fullCanonical);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", fullImageUrl);
    setMetaTag("property", "og:site_name", siteConfig.brand.name);
    setMetaTag("property", "og:locale", "en_IN");

    // 5. Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullImageUrl);

    // 6. JSON-LD Structured Data
    const schemasToInject: Array<Record<string, unknown>> = [];

    // Add breadcrumb schema if breadcrumbs provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url.startsWith("http") ? crumb.url : `${BASE_URL}${crumb.url}`,
        })),
      });
    }

    // Add custom schema(s) if provided
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    // Inject JSON-LD element
    let scriptElement = document.getElementById("page-seo-schema") as HTMLScriptElement | null;
    if (schemasToInject.length > 0) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "page-seo-schema";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.text = JSON.stringify(schemasToInject.length === 1 ? schemasToInject[0] : schemasToInject);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    // Cleanup on unmount
    return () => {
      const activeScript = document.getElementById("page-seo-schema");
      if (activeScript) {
        activeScript.remove();
      }
    };
  }, [title, description, canonicalPath, ogType, ogImage, schema, breadcrumbs]);

  return null;
};
