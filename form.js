const form = document.querySelector('form');
const firstNameField = document.getElementById('fname');

function validateField(field) {
  if (!field.validity.valid) {
    console.log('field is invalid');
    return false;
  }

  console.log('field is valid');
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // const isValid = validateField(firstNameField);
  let isValid = true;

  const fields = form.querySelectorAll('input, textarea');
  fields.forEach((field) => {
    console.log(`Checking ${field.name}`);
  });

  if (isValid) {
    console.log('submitting');
  } else {
    console.log('error');
  }
});
