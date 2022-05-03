let textIntro = ["Привет! Добро пожаловать в Emotherapy! Это приложение создано для того, чтобы работать с психологическими травмами.",
"Чуть позже я попрошу тебя рассказать, что именно тебя беспокоит.  А пока хочу уточнить, что если есть какая-то психологическая проблема, то конечно же лучше всего  будет обратиться к специалисту. Но...",
'Но если рядом нет никого кто мог бы помочь, это приложение может стать "скорой помощью" для того чтобы помочь себе самостоятельно.' ,
"Будь осторожен! Любая проблема берет корни из детства, и в ходе работы придется вспомнить неприятную ситуацию, которая привела именно к той проблеме которая есть у тебя сейчас",
'Но это часть любой психологической работы! И пользуясь этим приложением мы буквально "перезапишем" нейронные связи из детского события по-новому.' ,
"Все события и твоя память о них останутся такими же, но восприятие их изменится! В этом и есть маленькое чудо нашего метода. Если ты готов, поехали!"]
  
// export 
const positiveEmotions = ['Радость', "Спокойствие", "Удовлетворение", "Интерес"];
// export 
const basicNeedsJoy = [ 
    { name: 'полность/полнота', tag: 'deepest_level' }, 
    { name: 'пространство/свободность', tag: 'deepest_level' }, 
    { name: 'мощь/мощность', tag: 'deepest_level' },

    { name: 'радость' },
    { name: 'счастье' },
    { name: 'удовольствие' },
    { name: 'наслаждение' },
    { name: 'блаженство' },
    { name: 'благодать' },
    { name: 'комфорт' },
    { name: 'удобство' },
    { name: 'нормальность' },
    { name: 'приятность' },
    { name: 'легкость' },
    { name: 'умиротворение' },
    { name: 'гармония' },
    { name: 'совершенство' },
    { name: 'идеальность' },
    { name: 'воодушевление' },
    { name: 'вдохновение' },
    { name: 'насыщение/ -ость' },
    { name: 'доверие' },
    { name: 'милосердие' },

    { name: 'влияние / власть' },
    { name: 'самоопределение' },
    { name: 'самовыражение' },
    { name: 'автономия/автономность' },
    { name: 'реализация/реализованность' },
    { name: 'жизнь' },
    { name: '«Я» (отс.себя, меня)' },

    { name: 'единение', tag: 'loneliness' },
    { name: 'общность', tag: 'loneliness' },
    { name: 'общение', tag: 'loneliness' },
    { name: 'участие', tag: 'loneliness' },
    { name: 'тепло', tag: 'loneliness' },
    { name: 'близость', tag: 'loneliness' },
    { name: 'чуткость', tag: 'loneliness' },
    { name: 'забота', tag: 'loneliness' },
    { name: 'любовь', tag: 'loneliness' },
    { name: 'приязнь', tag: 'loneliness' },
    { name: 'радушность/радушие', tag: 'loneliness' },
    { name: 'принадлежность', tag: 'loneliness'},

    { name: 'ценность', tag: 'self-esteem' },
    { name: 'важность', tag: 'self-esteem' },
    { name: 'желанность', tag: 'self-esteem' }, 
 ];

// export 
const basicNeedsCalm = [ 
    { name: 'мощь/ мощность', tag: 'deepest_level' }, 
    { name: 'целостность', tag: 'deepest_level' },  
    { name: 'опора (устойчивость)', tag: 'deepest_level' },  
    { name: 'защищенность', tag: 'deepest_level' },  
    { name: 'защита', tag: 'deepest_level' },  
    { name: 'безопасность', tag: 'deepest_level' },  
    { name: 'благо/ благость', tag: 'deepest_level' },  

    { name: 'спокойствие' },  
    { name: 'спокойность' },  
    { name: 'покой' },  
    { name: 'расслабление/расслабленность' },  
    { name: 'помощь' },  
    { name: 'поддержка' },  
    { name: 'единство' },  
    { name: 'спасение' },  
    { name: 'существование' },  
    { name: 'бытиё' },  
    { name: 'отделенность (в положительном значении)' },  
    { name: 'уверенность' },  
    { name: 'чистость/ чистота' },  
    { name: 'пристойность' },  
    { name: 'приличность' },  
    { name: 'порядочность' },  
    { name: 'достоинство/достойность' },  
    { name: 'понятность/ясность' }  
 ];


// export 
const basicNeedsSatisfaction = [
    { name: 'удовлетворение' },  

    { name: 'признание', tag: 'social' },  
    { name: 'принятие', tag: 'social' },  
    { name: 'уважение', tag: 'social' },  
    { name: 'внимание', tag: 'social' },  
    { name: 'понимание', tag: 'social' },  
    { name: 'любовь', tag: 'social' },  

    { name: 'любимость', tag: 'self-esteem' },
    { name: 'важность', tag: 'self-esteem' },
    { name: 'значимоть', tag: 'self-esteem' }, 
    { name: 'ценность', tag: 'self-esteem' }, 
    { name: 'желанность', tag: 'self-esteem' },


    { name: 'полноценность' },
    { name: 'уважаемость' },
    { name: 'значительность' },
    { name: 'хорошесть' },
    { name: 'превосходство/превосходность' }, 
];

// export  
const basicNeedsInterest = [
    { name: 'интерес' },
    { name: 'нужность' },
    { name: 'смысл' },
    { name: 'полезность' },
    { name: 'интересность' },
    { name: 'важность' },
    { name: 'удовольствие' },
    { name: 'воодушевление' },
];

// import {positiveEmotions, basicNeedsJoy, basicNeedsCalm, 
//   basicNeedsSatisfaction, basicNeedsInterest} from './data.js';

document.addEventListener("DOMContentLoaded", function() {

  let emotions1 = ['Страх (беспокойство, тревога, паника)', 'Отчаяние', 'Уныние', 'Сожаление','Досада', 'Обида', 'Разочарование', 
  'Злость (раздражение, агрессия, возмущение, ненависть)', 'Вина', 'Стыд',  'Горе', 'Боль', 'Апатия', 'Отвращение', 'Жалость', 'Жалость к себе', 
  'Злорадство', 'Тоска', 'Грусть', 'Печаль', 'Ностальгия','Горечь',  'Шок', 'Презрение', 'Не могу определить эмоцию']; 

 
  (function printEmotionsBlock() {  
    let emotionsContainerEls = document.querySelectorAll('.emotions__container');

    emotionsContainerEls.forEach(function(containerEl) {
      function printEmotionsList (emotionsList) { 
        let emotionsListEl = document.createElement('ul');
        emotionsListEl.classList.add('emotions__list'); 
        containerEl.appendChild(emotionsListEl);

        emotionsList.forEach(function(emotionName) {
          let li = document.createElement('li');
          li.classList.add('emotions__item');
          li.innerHTML = emotionName;
          emotionsListEl.appendChild(li);
        }); 
      }
      printEmotionsList(emotions1);
    });
  })();


  (function selectEmotion() {  
    let emotionsContainerEls = document.querySelectorAll('.emotions__container');

    emotionsContainerEls.forEach((emotionsContainerEl) => { 
      emotionsContainerEl.addEventListener('click', function(e) {
        if (e.target.tagName.toLowerCase()  !== 'li') {
          return;
        };
        document.querySelectorAll('.emotions__item').forEach(function(e){
          e.classList.remove('emotions__item--selected');
        });
        e.target.classList.add('emotions__item--selected');
        localStorage.setItem("emotion", e.target.innerHTML); 
      });
    });

  })();

  // todo: тут надо добавить eventListener, чтобы по клику сохранялась эмоция в локал сторадж 
  (function showPositiveEmotionsBlock() {  
    let emotionsContainerEl = document.getElementById('positiveEmotions');

    function showEmotionsList (emotionsList) { 
      let emotionsListEl = document.createElement('ul');
      emotionsListEl.classList.add('emotions__list'); 
      emotionsContainerEl.appendChild(emotionsListEl);

      emotionsList.forEach(function(emotionName) {
        let li = document.createElement('li');
        li.classList.add('emotions__item');
        li.innerHTML = emotionName;
        emotionsListEl.appendChild(li);
      }); 

      emotionsContainerEl.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
          localStorage.setItem('positiveEmotion', e.target.innerHTML);
          showBasicNeedsBlock();
        }; 
      });
    }
    showEmotionsList(positiveEmotions); 
  })();

  // todo: тут надо чтобы отображался именно тот список, 
  // который соответствует выбранной положительной эмоции
  function showBasicNeedsBlock() {  
    let containerEl = document.getElementById('basicNeeds');
    containerEl.innerHTML = '';

    function showBasicNeedsList (basicNeeds) { 
      let listEl = document.createElement('ul');
      listEl.classList.add('emotions__list'); 
      containerEl.appendChild(listEl);

      basicNeeds.forEach(function(need) {
        let li = document.createElement('li');
        li.classList.add('emotions__item');
        li.innerHTML = need.name;
        listEl.appendChild(li);
      }); 
    }
    let positiveEmotion = localStorage.getItem('positiveEmotion');
    switch (positiveEmotion) {
      case 'Радость': showBasicNeedsList(basicNeedsJoy); break;
      case 'Спокойствие': showBasicNeedsList(basicNeedsCalm); break;
      case 'Удовлетворение': showBasicNeedsList(basicNeedsSatisfaction); break; 
      case 'Интерес': showBasicNeedsList(basicNeedsInterest); break;
    } 
  };
  showBasicNeedsBlock();



  // todo: тут тоже надо проверить, чтобы все блоки с эмоциями отрабатывали правильно
  (function fillInAnswersAfterPageReload () { 

    (function fillInTextareas() {
      let textareas = document.querySelectorAll('.step__textarea');

      textareas.forEach(function(element) {
        element.value = localStorage.getItem(element.id); 
      }); 
    })();


    // todo: тут баг, потому что таких блоков стало несколько
    (function restoreSelectedEmotions() {
      let emotion = localStorage.getItem("emotion");

      document.querySelectorAll('.emotions__item').forEach(function(e){ 
        if (e && e.innerHTML === emotion) { 
          e.classList.add('emotions__item--selected');
        }
      }); 
    })();
  })();

  // todo: тут надо бы добавить не только textarea
  (function handleTextareaEdit () {
    let containerEl = document.querySelectorAll('body')[0];

    containerEl.addEventListener("input", function (e) { 
      localStorage.setItem(e.target.id, e.target.value); 
    });
  })();
  
});
