const { readFile } = require('fs').promises;

const allowedDocTypes = [
  {
    mimetype: 'application/pdf',
    signature: '25504446',
  },
  {
    mimetype:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

    signature: '504b0304',
  },
];

const validateEmailAttachment = async (file) => {
  const { mimetype, filepath, size } = file;

  let errors;

  // Validate file type by extension
  if (!allowedDocTypes.some((el) => el.mimetype === mimetype)) {
    errors += 'Invalid file type. Must be PDF or DOCX.';
    return;
  }

  // Validate file type by file signatures
  const bytes = await readFile(filepath, { encoding: 'hex' });
  const signature = bytes.toString().slice(0, 8);

  if (!allowedDocTypes.some((type) => type.signature === signature)) {
    errors += 'Invalid file type. Must be PDF or DOCX.';
    return;
  }

  // Validate file size
  if (size > 10000000) {
    errors += 'File size exceeds maximum size of 10MB';
    return;
  }

  return errors;
};

module.exports = { validateEmailAttachment };
