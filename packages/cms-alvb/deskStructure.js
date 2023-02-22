import S from "@sanity/desk-tool/structure-builder";
import { RiPagesLine, RiSettings4Line } from "react-icons/ri";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon(RiPagesLine)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Pages")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Landing Page")
                .child(
                  S.document()
                    .schemaType("landingPage")
                    .documentId("landingPage"),
                ),
              S.listItem()
                .title("Our Projects")
                .child(
                  S.document()
                    .schemaType("ourServicesPage")
                    .documentId("ourServicesPage"),
                ),
              S.listItem()
                .title("Biobank")
                .child(
                  S.document().schemaType("bioBank").documentId("bioBank"),
                ),
              S.listItem()
                .title("Investment")
                .child(
                  S.document()
                    .schemaType("investmentPage")
                    .documentId("investmentPage"),
                ),
              S.listItem()
                .title("Our Team")
                .child(
                  S.document()
                    .schemaType("employeePage")
                    .documentId("employeePage"),
                ),
              S.listItem()
                .title("Blog")
                .child(
                  S.document().schemaType("blogPage").documentId("blogPage"),
                ),
              S.listItem()
                .title("Contact")
                .child(
                  S.document()
                    .schemaType("contactPage")
                    .documentId("contactPage"),
                ),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "landingPage",
            "employeePage",
            "investmentPage",
            "bioBank",
            "blogPage",
            "contactPage",
            "ourServicesPage",
          ].includes(listItem.getId()),
      ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(RiSettings4Line)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
    ]);
