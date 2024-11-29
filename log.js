const thankscontent = document.getElementById('thankscontent');
const thanksbtn = document.getElementById('thanks-btn');
const closebtn = document.getElementById('close');
const form = document.getElementById('form-cont');
const emailInput = document.getElementById('email');

thanksbtn.addEventListener('click', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  if (emailValue!== '') {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      thankscontent.style.display = 'block';
    } else {
      alert('Please enter a valid email address');
    }
  } else {
    alert('Please fill in the required field');
  }
});

closebtn.addEventListener('click',() => {
    thankscontent.style.display = 'none';
});