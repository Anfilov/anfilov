import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Site Settings — singleton
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      // Projects
      S.documentTypeListItem("project").title("Projekty"),
      S.divider(),
      // Pages
      S.documentTypeListItem("page").title("Pages"),
    ]);
