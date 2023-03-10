import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const dataForm = new FormData(form);
  const finalData = {};
  for (const [key, value] of dataForm.entries()) {
    finalData[key] = Number(value);
  }

  form.reset();

  for (let position = 1; position <= finalData.amount; position += 1) {
    createPromise(position, finalData.delay).then(onSuccess).catch(onError);
    finalData.delay = finalData.delay + finalData.step;
  }
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

formRef.addEventListener('submit', onSubmit);
