import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Landing Page')
        .child(
          S.document().schemaType('landingPage').documentId('landingPage')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['siteSettings', 'landingPage'].includes(listItem.getId())
      ),
    ]);
