const form = document.querySelector('#form');
let inps = document.querySelectorAll('.inp');
let nameInp = document.querySelector('.name-inp');
let mailInp = document.querySelector('.mail-inp');
let passInp = document.querySelector('.pass-inp');
let conPassInp = document.querySelector('.pass-conf-inp');

let cont = document.querySelector('.cont');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   inps.forEach(item => {
      if (item.value == '') {
         item.classList.add('warn');
      } else if (item.value != '') {
         item.classList.add('sucs');
      }
   })

   checkMail();
   confirmPassword();
})

inps.forEach(item => {
   item.addEventListener('click', (e) => {
      
      cont.addEventListener('click', () => {
         if (item.value == '') {
            item.classList.add('warn');
         } else {
            item.classList.add('sucs');
         }
      })
   })
})

function confirmPassword(e) {

   if (passInp.value != conPassInp.value || (passInp.value.length < 8 && conPassInp.value.length < 8)) {

      passInp.classList.add('warn');
      conPassInp.classList.add('warn');
   } else if (passInp.value == conPassInp.value) {
      
      confirm();

      function confirm(e) {
         if (passInp.value.length >= 8 && conPassInp.value.length >= 8) {
            passInp.classList.add('sucs');
            conPassInp.classList.add('sucs');
         }
      }
   }
} 

function checkMail(e) {
   if (/([a-z@.0-9]+)\g/.test(mailInp.value)) {
      mailInp.classList.add('sucs');
   } else {
      mailInp.classList.add('warn');
   }
}