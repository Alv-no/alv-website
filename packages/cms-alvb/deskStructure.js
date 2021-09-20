import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Pages')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Landing Page')
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('landingPage')
                ),
              S.listItem()
                .title('Our Projects')
                .child(
                  S.document()
                    .schemaType('ourServicesPage')
                    .documentId('ourServicesPage')
                ),
              S.listItem()
                .title('Bio Bank Page')
                .child(
                  S.document().schemaType('bioBank').documentId('bioBank')
                ),
              S.listItem()
                .title('Employee Page')
                .child(
                  S.document()
                    .schemaType('employeePage')
                    .documentId('employeePage')
                ),
              S.listItem()
                .title('Contact Page')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                ),
              S.listItem()
                .title('Blog Page')
                .child(
                  S.document().schemaType('blogPage').documentId('blogPage')
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'siteSettings',
            'landingPage',
            'employeePage',
            'bioBank',
            'blogPage',
            'contactPage',
            'ourServicesPage',
          ].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
