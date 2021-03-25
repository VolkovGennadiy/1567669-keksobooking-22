const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png']
const fileAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileField = document.querySelector('.ad-form__upload input[type=file]');
const previewField = document.querySelector('.ad-form__photo');


fileAvatar.addEventListener('change', () => {
  const file = fileAvatar.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewAvatar.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

fileField.addEventListener('change', () => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const preview = document.createElement('img');
      preview.width = 70;
      preview.height = 70;
      preview.src = reader.result;
      previewField.appendChild(preview);
    });
    reader.readAsDataURL(file);
  }
});
