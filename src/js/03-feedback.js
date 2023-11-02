import throttle from "lodash.throttle";

const FEETBACK_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm.elements;
let formData = {};
onLoadPage();

feedbackForm.addEventListener('input', throttle(onInputChange, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInputChange() {
    formData = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem(FEETBACK_KEY, JSON.stringify(formData));
}

function onLoadPage() {
    formData = JSON.parse(localStorage.getItem(FEETBACK_KEY));

    if (formData) {
        email.value = formData.email || '';
        message.value = formData.message || '';
    }
}

function onSubmitForm(event) {
    event.preventDefault();

    if(!email.value.trim() || !message.value.trim())
        return alert('Email or message is empty!');

    console.log(formData);
    localStorage.clear();
    event.currentTarget.reset();
    formData = {}
}

