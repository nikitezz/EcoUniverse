 const studyButton = document.getElementById('studyButton');
        
 studyButton.addEventListener('click', function() {
   const radioButtons = document.querySelectorAll('input[type="radio"]');

   radioButtons.forEach(function(radioButton) {
     if (radioButton.checked) {
       const category = radioButton.nextElementSibling.textContent;
       
       switch (category) {
         case 'Птицы':
           window.location.href = './birds/index.html';
           break;
         case 'Рыбы':
           window.location.href = './fish/index.html';
           break;
         case 'Насекомые':
           window.location.href = 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BD%D0%B0%D1%81%D0%B5%D0%BA%D0%BE%D0%BC%D1%8B%D1%85,_%D0%B7%D0%B0%D0%BD%D0%B5%D1%81%D1%91%D0%BD%D0%BD%D1%8B%D1%85_%D0%B2_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%83%D1%8E_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C';
           break;
         case 'Земноводные':
           window.location.href = 'https://example.com/zemnovodnye';
           break;
         case 'Млекопитающие':
           window.location.href = 'https://example.com/mlekopitayushchie';
           break;
         default:
           break;
       }
     }
   });
 });



 