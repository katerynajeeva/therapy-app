let textIntro = ["Привет! Добро пожаловать в Emotherapy! Это приложение создано для того, чтобы работать с психологическими травмами.",
"Чуть позже я попрошу тебя рассказать, что именно тебя беспокоит.  А пока хочу уточнить, что если есть какая-то психологическая проблема, то конечно же лучше всего  будет обратиться к специалисту. Но...",
'Но если рядом нет никого кто мог бы помочь, это приложение может стать "скорой помощью" для того чтобы помочь себе самостоятельно.' ,
"Будь осторожен! Любая проблема берет корни из детства, и в ходе работы придется вспомнить неприятную ситуацию, которая привела именно к той проблеме которая есть у тебя сейчас",
'Но это часть любой психологической работы! И пользуясь этим приложением мы буквально "перезапишем" нейронные связи из детского события по-новому.' ,
"Все события и твоя память о них останутся такими же, но восприятие их изменится! В этом и есть маленькое чудо нашего метода. Если ты готов, поехали!"]
  
export const positiveEmotions = ['Радость', "Спокойствие", "Удовлетворение", "Интерес"];
export const basicNeedsJoy = [ 
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

export const basicNeedsCalm = [ 
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


export const basicNeedsSatisfaction = [
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

export const basicNeedsInterest = [
    { name: 'интерес' },
    { name: 'нужность' },
    { name: 'смысл' },
    { name: 'полезность' },
    { name: 'интересность' },
    { name: 'важность' },
    { name: 'удовольствие' },
    { name: 'воодушевление' },
];
 






