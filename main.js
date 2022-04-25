document.addEventListener("DOMContentLoaded", function() {

  let emotions1 = ['Страх (беспокойство, тревога, паника)', 'Отчаяние', 'Уныние', 'Сожаление','Досада', 'Обида', 'Разочарование']; 
  let emotions2 = ['Злость (раздражение, агрессия, возмущение, ненависть)', 'Вина', 'Стыд',  'Горе', 'Боль', 'Апатия', 'Отвращение', 'Жалость', 'Жалость к себе'];
  let emotions3 = ['Злорадство', 'Тоска', 'Грусть', 'Печаль', 'Ностальгия','Горечь',  'Шок', 'Презрение', 'Не могу определить эмоцию']; 

 
  (function printEmotionsBlock() { 
    let emotionsContainerEl = document.getElementById('emotions__container');
    function printEmotionsList (emotionsList) {

      let emotionsListEl = document.createElement('ul');
      emotionsListEl.classList.add('emotions__list'); 
      emotionsContainerEl.appendChild(emotionsListEl);

      emotionsList.forEach(function(emotionName) {
        let li = document.createElement('li');
        li.classList.add('emotions__item');
        li.innerHTML = emotionName;
        emotionsListEl.appendChild(li);
      }); 
    }
    printEmotionsList(emotions1);
    printEmotionsList(emotions2);
    printEmotionsList(emotions3); 
  })();



  (function fillInAnswersAfterPageReload () { 
    let testareas = document.querySelectorAll('.step__textarea');
    testareas.forEach(function(element) {
      element.value = localStorage.getItem(element.id); 
    });

  })();




  (function handleTextareaEdit () {
    let containerEl = document.getElementById('container');
    containerEl.addEventListener("input", function (e) { 
      localStorage.setItem(e.target.id, e.target.value); 
    });
  })();
  
});
