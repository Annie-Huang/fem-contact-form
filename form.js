const form = document.querySelector('form');
const firstNameField = document.getElementById('fname');

function validateField(field) {
  const errorEl =
    field.type === 'radio'
      ? field.closest('fieldset').querySelector('.error-message')
      : field.parentElement.querySelector('.error-message');

  if (!field.validity.valid) {
    // console.log('field is invalid, field=', field);
    errorEl.textContent = field.dataset.error || 'This field is required';
    return false;
  }

  // console.log('field is valid');
  errorEl.textContent = '';
  return true;
}

// Validate the form on blur of each field
form.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('blur', () => {
    validateField(input);
  });
});

// Validate the form on Submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // const isValid = validateField(firstNameField);
  let isValid = true;

  const fields = form.querySelectorAll('input, textarea');
  fields.forEach((field) => {
    console.log(`Checking ${field.name}`);
    const fieldValid = validateField(field);
    if (!fieldValid) {
      isValid = false;
    }
  });

  if (isValid) {
    console.log('submitting');
  } else {
    // console.log('error');

    // When we got error on submit, focus back on the first invalid element. Only work in input field, not for radio button or checkbox.
    form.querySelector(':invalid').focus();
  }
});
