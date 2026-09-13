export type HorseStatus = 'fund' | 'private' | 'memory';

export interface Horse {
  id: string;
  name: string;
  age: string;
  status: HorseStatus;
  photo: string;
  heroPhoto: string;
  additionalPhotos: string[];
  shortBio: string;
  rescueStory: string;
}

export const horses: Horse[] = [
  {
    id: 'bojevaja',
    name: 'Бойова',
    age: '20XX–2026',
    status: 'memory',
    photo: '/horse-rescue-web/images/bojevaja.jpg',
    heroPhoto: '/horse-rescue-web/images/bojevaja.jpg',
    additionalPhotos: [],
    shortBio: 'Мати Брітні',
    rescueStory: `Ще зовсім маленькою вона мала загинути на бійні. Її вдалося викупити та забрати до міського прокату, але й там на неї чекало жорстоке поводження. Через 8 років тяжкої роботи вона потрапила до нашого фонду.

Ми почали її відновлювати — поступово повертали сили, лікували та вчили знову довіряти людям. Вона оговталася й нарешті отримала шанс на спокійне життя.

Та під час обстрілу неподалік від конюшні в неї влучили уламки. Вона отримала важкі опіки. Ми боролися за її життя, намагалися стабілізувати її стан, зробили переливання крові, але воно не дало очікуваного результату.

Вона не вижила.

Але останні дні свого життя вона провела там, де про неї піклувалися, лікували й любили. І для нас її історія — ще одне нагадування про те, чому ми продовжуємо рятувати.`,
  },

  {
    id: 'britni',
    name: 'Брітні',
    age: 'Рік народження: 2017',
    status: 'fund',
    photo: '/horse-rescue-web/images/brit.jpg',
    heroPhoto: '/horse-rescue-web/images/brit.jpg',
    additionalPhotos: [],
    shortBio: 'Лоша Бойової',
    rescueStory:
      'Викуплена з міського прокату. Брітні почали заїжджати в 7 місяців, через що вона не виросла як слід і тепер страждає від проблем із суглобами.',
  },

  {
    id: 'bagira',
    name: 'Багіра',
    age: 'Рік народження: 2022',
    status: 'fund',
    photo: '/horse-rescue-web/images/bagira.jpg',
    heroPhoto: '/horse-rescue-web/images/bagira.jpg',
    additionalPhotos: [],
    shortBio: 'Лоша Брітні',
    rescueStory:
      'Багіра народилася в окупації, але з першого дня свого життя була оточена абсолютною турботою. Саме тому вона знає лише любов і повну довіру до людини.',
  },

    {
    id: 'furioza',
    name: 'Фуріоза',
    age: 'Рік народження: невідомий',
    status: 'fund',
    photo: '/horse-rescue-web/images/furioza.jpg',
    heroPhoto: '/horse-rescue-web/images/furioza.jpg',
    additionalPhotos: [],
    shortBio: 'Мати Лекси',
    rescueStory:
      `Вагітну Фуріозу мали забити на бойні. Тоді Ліза розповіла про неї в соцмережах і відкрила банку на викуп. До порятунку долучилися жителі с. Віта Поштова, де знаходиться наша ферма, - разом нам вдалося зібрати необхідну суму й подарувати їй шанс на життя.

      Вже на фермі Фуріоза народила лоша - Лексу. Сьогодні вони живуть разом під нашою опікою: мама й донька, які колись могли взагалі не зустрітися.

      А ще у Фуріози є маленький секрет: насправді на фермі її майже ніхто не називає на ім’я. Для всіх вона просто Мати. І, здається, це ім’я їй дуже пасує.`,
  },

   {
    id: 'leksa',
    name: 'Лекса',
    age: 'Рік народження: 2026',
    status: 'fund',
    photo: '/horse-rescue-web/images/leksa.jpg',
    heroPhoto: '/horse-rescue-web/images/leksa.jpg',
    additionalPhotos: [],
    shortBio: 'Лоша Фуріози',
    rescueStory:
      `Лекса народилася на нашій фермі. Її мама, Фуріоза, приїхала до нас вагітною - її вдалося викупити з бойні завдяки спільним зусиллям Лізи та жителів с. Віта Поштова.
      
      Так Лекса отримала те, чого могло не бути в її житті, - шанс народитися у безпеці та з турботою поруч. Сьогодні вона росте разом із мамою, добре їсть, грається, пізнає світ і просто насолоджується кінським життям.

      За нею доглядають, стежать за її здоров’ям і дають їй головне - можливість рости без страху та поспіху. Лекса - маленьке нагадування про те, що порятунок однієї тварини може подарувати життя ще одній.`,
  },

  {
    id: 'vavilon',
    name: 'Вавілон',
    age: 'Рік народження: 2024',
    status: 'fund',
    photo: '/horse-rescue-web/images/vavilon.jpg',
    heroPhoto: '/horse-rescue-web/images/vavilon.jpg',
    additionalPhotos: ['/horse-rescue-web/images/vavilon-bulan.jpg'],
    shortBio: 'Маленький, який боявся всього',
    rescueStory:
      `Він потрапив до нас зовсім маленьким - усього в п’ять місяців. Від страху перед іншими кіньми малюк міг навіть битися зубами об стіну, коли хтось підходив його понюхати. Одного разу, коли до нього прийшли знайомитися, він так злякався, що навіть виламав електропастух.
       Та з часом він знайшов своє місце поруч із нашим приватним жеребцем. І сталося несподіване: жеребець, який зазвичай ганяє старших хлопців, знайшов спільну мову з лошам, яке боїться майже всього.
       Зараз Вавілон поступово вчиться спілкуватися з іншими кіньми, стає впевненішим і пізнає світ без страху. Але один фаворит у нього все ще залишається - його старший друг.`,
  },
  
  {
    id: 'bulan',
    name: 'Булан',
    age: 'Рік народження: 2023',
    status: 'private',
    photo: '/horse-rescue-web/images/bulan.jpg',
    heroPhoto: '/horse-rescue-web/images/bulan.jpg',
    additionalPhotos: ['/horse-rescue-web/images/vavilon-bulan.jpg'],
    shortBio: 'Найкращій друг Вавілона',
    rescueStory:
      `Булан - приватний мешканець нашої ферми. Його історія не про порятунок чи важке минуле, а про життя, у якому є турбота, безпека та правильне оточення.
       Він живе поруч із кіньми фонду, отримує належний догляд, ветеринарне обслуговування, якісне харчування та увагу. Для нас важливо, щоб кожен кінь поруч із нами - незалежно від його історії - мав можливість жити добре.`,
  },

  {
    id: 'sparta',
    name: 'Спарта',
    age: 'Рік народження: невідомий',
    status: 'private',
    photo: '/horse-rescue-web/images/sparta.jpg',
    heroPhoto: '/horse-rescue-web/images/sparta.jpg',
    additionalPhotos: [''],
    shortBio: 'Не всі історії можна розповісти',
    rescueStory:
      `Це приватний кінь, який живе на території нашої ферми разом із підопічними фонду.  
       На нашій фермі живуть не лише коні, які безпосередньо належать фонду. Ми також допомагаємо приватним власникам, чиї коні потребують безпечного місця, відновлення та реабілітації - зокрема тим, кого вдалося вивезти з прифронтових та небезпечних територій.
       Деякі з них приїхали до нас у дуже важкому стані, інші потребували меншої допомоги. Але кожному ми намагаємося дати необхідне: спокійне середовище, ветеринарний супровід, відновлення, якісний догляд і час.
       Історіями приватних коней ми не ділимося детально - поважаємо приватність їхніх власників. Для нас допомога не закінчується на тих, хто офіційно є підопічним фонду. Якщо кінь потребує безпеки та турботи - ми намагаємося бути поруч.`,
  },

  {
    id: 'djo',
    name: 'Джо',
    age: 'Рік народження: невідомий',
    status: 'private',
    photo: '/horse-rescue-web/images/djo.jpg',
    heroPhoto: '/horse-rescue-web/images/djo.jpg',
    additionalPhotos: [''],
    shortBio: 'Не всі історії можна розповісти',
    rescueStory:
      `Це приватний кінь, який живе на території нашої ферми разом із підопічними фонду.  
       На нашій фермі живуть не лише коні, які безпосередньо належать фонду. Ми також допомагаємо приватним власникам, чиї коні потребують безпечного місця, відновлення та реабілітації - зокрема тим, кого вдалося вивезти з прифронтових та небезпечних територій.
       Деякі з них приїхали до нас у дуже важкому стані, інші потребували меншої допомоги. Але кожному ми намагаємося дати необхідне: спокійне середовище, ветеринарний супровід, відновлення, якісний догляд і час.
       Історіями приватних коней ми не ділимося детально - поважаємо приватність їхніх власників. Для нас допомога не закінчується на тих, хто офіційно є підопічним фонду. Якщо кінь потребує безпеки та турботи - ми намагаємося бути поруч.`,
  },

  {
    id: 'lada',
    name: 'Лада',
    age: 'Рік народження: невідомий',
    status: 'private',
    photo: '/horse-rescue-web/images/lada.jpg',
    heroPhoto: '/horse-rescue-web/images/lada.jpg',
    additionalPhotos: [''],
    shortBio: 'Не всі історії можна розповісти',
    rescueStory:
      `Це приватний кінь, який живе на території нашої ферми разом із підопічними фонду.  
       На нашій фермі живуть не лише коні, які безпосередньо належать фонду. Ми також допомагаємо приватним власникам, чиї коні потребують безпечного місця, відновлення та реабілітації - зокрема тим, кого вдалося вивезти з прифронтових та небезпечних територій.
       Деякі з них приїхали до нас у дуже важкому стані, інші потребували меншої допомоги. Але кожному ми намагаємося дати необхідне: спокійне середовище, ветеринарний супровід, відновлення, якісний догляд і час.
       Історіями приватних коней ми не ділимося детально - поважаємо приватність їхніх власників. Для нас допомога не закінчується на тих, хто офіційно є підопічним фонду. Якщо кінь потребує безпеки та турботи - ми намагаємося бути поруч.`,
  },

    {
    id: 'bonya',
    name: 'Боня',
    age: 'Рік народження: невідомий',
    status: 'private',
    photo: '/horse-rescue-web/images/bonya.jpg',
    heroPhoto: '/horse-rescue-web/images/bonya.jpg',
    additionalPhotos: [''],
    shortBio: 'Не всі історії можна розповісти',
    rescueStory:
      `Це приватний кінь, який живе на території нашої ферми разом із підопічними фонду.  
       На нашій фермі живуть не лише коні, які безпосередньо належать фонду. Ми також допомагаємо приватним власникам, чиї коні потребують безпечного місця, відновлення та реабілітації - зокрема тим, кого вдалося вивезти з прифронтових та небезпечних територій.
       Деякі з них приїхали до нас у дуже важкому стані, інші потребували меншої допомоги. Але кожному ми намагаємося дати необхідне: спокійне середовище, ветеринарний супровід, відновлення, якісний догляд і час.
       Історіями приватних коней ми не ділимося детально - поважаємо приватність їхніх власників. Для нас допомога не закінчується на тих, хто офіційно є підопічним фонду. Якщо кінь потребує безпеки та турботи - ми намагаємося бути поруч.`,
  },

  {
    id: 'licar',
    name: 'Лицар',
    age: 'Рік народження: невідомий',
    status: 'private',
    photo: '/horse-rescue-web/images/licar.jpg',
    heroPhoto: '/horse-rescue-web/images/licar.jpg',
    additionalPhotos: [''],
    shortBio: 'Не всі історії можна розповісти',
    rescueStory:
      `Це приватний кінь, який живе на території нашої ферми разом із підопічними фонду.  
       На нашій фермі живуть не лише коні, які безпосередньо належать фонду. Ми також допомагаємо приватним власникам, чиї коні потребують безпечного місця, відновлення та реабілітації - зокрема тим, кого вдалося вивезти з прифронтових та небезпечних територій.
       Деякі з них приїхали до нас у дуже важкому стані, інші потребували меншої допомоги. Але кожному ми намагаємося дати необхідне: спокійне середовище, ветеринарний супровід, відновлення, якісний догляд і час.
       Історіями приватних коней ми не ділимося детально - поважаємо приватність їхніх власників. Для нас допомога не закінчується на тих, хто офіційно є підопічним фонду. Якщо кінь потребує безпеки та турботи - ми намагаємося бути поруч.`,
  },
  
];

export type CampaignStatus = 'active' | 'completed';

export interface SpendingItem {
  category: string;
  amount: number;
  description: string;
}

export interface CampaignReport {
  summary: string;
  spending: SpendingItem[];
  quote: string;
  quoteAuthor: string;
  outcomes: string[];
  remainingFunds: number;
  remainingNote: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  target: number;
  raised: number;
  status: CampaignStatus;
  startDate: string;
  endDate?: string;
  horses?: string[];
  reportAvailable: boolean;
  report?: CampaignReport;
}

export const campaigns: Campaign[] = [
  {
    id: 'winter-2026',
    title: 'Подаруй коням ситу зиму',
    description:
      `Зима для коней - не лише холод, а й місяці, коли їм особливо потрібні тепло, турбота та достатньо якісного корму. Саме тому ми розпочали збір на 80 тонн сіна (це приблизно 20 машин по 4,5–5 тонн кожна)
        /n/n
      Вартість однієї машини сіна разом із доставкою: 34 000 грн.  
      /n
      (20 машин * 34 000 грн = 680 000 грн)
      /n/n
      Дві машини ми вже придбали власним коштом, а зараз збираємо на наступні.
      /n/n
      Ми хочемо, щоб допомога була взаємною.
      /n
      За донат на сіно ти можеш приїхати до нас на ферму та провести час із кіньми. Познайомитися з ними, погладити, погодувати, побути поруч і відчути особливий зв’язок, який виникає між людиною та конем. Домовитися про зустріч можна з засновницею фонду через Instagram 
      /n/n
      Твій внесок - не просто підтримка ферми. Це турбота про тварин і можливість стати частиною їхнього життя.
      /n
      Дякуємо кожному, хто долучається!`,
    target: 612000,
    raised: 32022,
    status: 'active',
    startDate: 'Август 2026',
    horses: ['britni', 'bagira', 'furioza', 'leksa', 'vavilon', 'bulan', 'djo', 'lada', 'sparta', 'licar', 'bonya'],
    reportAvailable: false,
  },

  {
    id: 'furioza',
    title: 'Викуп вагітної кобили з бійні',
    description:
      `Вагітна кобила з раною на нозі була викуплена в м’ясника в Березні 2026`,
    target: 45000,
    raised: 51630,
    status: 'completed',
    startDate: '21 Березня 2026',
    endDate: '21 Березня 2026',
    horses: ['furioza', 'leksa'],
    reportAvailable: true,
    report: {
      summary:
        "М’ясник збирався зарізати вагітну кобилу. Засновниця фонду терміново відкрила збір на її викуп. За один день ми зібрали необхідну суму та врятували кобилу",
      spending: [
      {
          category: 'Викуп кобили',
          amount: 45000,
          description:
            '',
        },
        {
          category: 'Вакцинація',
          amount: 3320,
          description:
            '',
        },
        {
          category: 'Корма',
          amount: 3310,
          description:
            '',
        },
       
      ],
      quote:
        "When Rex arrived, we weren't sure he would make it through the first night. The speed at which your donations arrived gave us the freedom to act immediately without hesitation. That's what saved him.",
      quoteAuthor: 'Dr. Petra Nováková, Foundation Veterinarian',
      outcomes: [
        'Rex survived the first critical week and was transferred from ICU to sanctuary care',
        'Wound infection cleared by day 18',
        'Weight gain of 34 kg over the first six weeks',
        'All donated funds were spent within the first six weeks of rescue',
      ],
      remainingFunds: 0,
      remainingNote:
        "All €3,200 raised were fully spent on Rex's emergency and recovery care. Rex continues to need ongoing care funded through our general donations and the current Winter Care campaign.",
    },
  },

  {
    id: 'stables-repair-2023',
    title: 'Stable Roof Repair',
    description:
      'Emergency structural repair to two stable roofs after storm damage in April 2023. Needed to provide safe, weatherproof housing for six horses through the coming winter.',
    target: 4800,
    raised: 5100,
    status: 'completed',
    startDate: 'May 2023',
    endDate: 'July 2023',
    horses: [],
    reportAvailable: true,
    report: {
      summary:
        'Following severe storm damage in April 2023, two of our stable blocks were deemed unsafe for horse habitation. The repair campaign exceeded its target by €300, allowing us to also insulate the western block. All work was completed by 20 July 2023.',
      spending: [
        {
          category: 'Structural repairs',
          amount: 2800,
          description:
            'Timber frame repairs and roof re-sheeting — both stable blocks',
        },
        {
          category: 'Roofing materials',
          amount: 1200,
          description:
            'Corrugated steel sheets, fixings, and waterproof membrane',
        },
        {
          category: 'Insulation — bonus work',
          amount: 620,
          description:
            'Rigid insulation board to western block walls — funded by the €300 surplus',
        },
        {
          category: 'Labour',
          amount: 480,
          description:
            'Local construction team — three days of skilled labour',
        },
      ],
      quote:
        "We've wanted to insulate that western block for two winters. The generosity of donors made it possible. The horses are noticeably calmer and warmer in there.",
      quoteAuthor: 'Jiří Kovář, Sanctuary Manager',
      outcomes: [
        'Both stable blocks fully repaired and certified safe by 20 July 2023',
        'Western block insulated — estimated 25% reduction in heating costs',
        'Six horses moved back into repaired stabling before August',
        '€300 surplus fully allocated to insulation — nothing held in reserve',
      ],
      remainingFunds: 0,
      remainingNote:
        'The campaign raised €5,100 against a target of €4,800. The €300 surplus was spent on the insulation project, with full transparency to all donors.',
    },
  },

];
