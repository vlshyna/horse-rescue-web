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
    id: 'winter-2024',
    title: 'Winter Care Fund 2024–25',
    description:
      'Covering heating, extra feed, and veterinary care for all twelve horses through the winter months. Cold season places significant extra demands on every animal in our care — feed consumption rises by roughly 30%, and senior horses like Kaspar need continuous heated stabling.',
    target: 8500,
    raised: 5240,
    status: 'active',
    startDate: 'October 2024',
    horses: ['marta', 'bruno', 'luna', 'kaspar', 'bella', 'rex'],
    reportAvailable: false,
  },

  {
    id: 'rex-emergency',
    title: 'Rex Emergency Fund',
    description:
      'Emergency medical treatment for Rex: surgery, blood transfusion, IV nutrition, and the first month of intensive care following his rescue in August 2024.',
    target: 3200,
    raised: 3200,
    status: 'completed',
    startDate: 'August 2024',
    endDate: 'September 2024',
    horses: ['rex'],
    reportAvailable: true,
    report: {
      summary:
        "Rex arrived in critical condition on 14 August 2024. Within 72 hours, the emergency fundraiser had been fully funded by 94 donors from twelve countries. The funds covered his emergency surgery, a six-day ICU stay at the University Veterinary Clinic, and his first month of specialist recovery care at the sanctuary.",
      spending: [
        {
          category: 'Emergency surgery',
          amount: 1100,
          description:
            'Wound debridement and closure under general anaesthesia at University Veterinary Clinic',
        },
        {
          category: 'Blood transfusion & ICU',
          amount: 780,
          description:
            '6-day intensive care unit stay including blood products and IV nutrition',
        },
        {
          category: 'Medication — first month',
          amount: 340,
          description:
            'Antibiotics, anti-inflammatories, pain management',
        },
        {
          category: 'Specialist diet — first month',
          amount: 280,
          description:
            'Refeeding protocol under veterinary supervision — small, frequent high-nutrition meals',
        },
        {
          category: 'Ongoing monitoring',
          amount: 420,
          description:
            'Bi-weekly vet visits and blood panels through September',
        },
        {
          category: 'Equipment & wound care',
          amount: 180,
          description:
            'Bandages, antiseptic, specialist dressings for daily wound care',
        },
        {
          category: 'Transport',
          amount: 100,
          description: 'Horse ambulance for two clinic transfers',
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

  {
    id: 'annual-care-2022',
    title: 'Annual Care Fund 2022',
    description:
      'Full-year operational funding: feed, veterinary care, farrier visits, and part-time staff wages for seven horses in our care.',
    target: 24000,
    raised: 22800,
    status: 'completed',
    startDate: 'January 2022',
    endDate: 'December 2022',
    horses: [],
    reportAvailable: true,
    report: {
      summary:
        'Our first full-year fundraiser covered core operating costs for seven horses throughout 2022. While we fell €1,200 short of target, careful budgeting and two volunteer work weekends kept us fully operational. A detailed financial statement for the full year is available on request.',
      spending: [
        {
          category: 'Feed & forage',
          amount: 7200,
          description:
            'Hay, haylage, hard feed, and supplements for seven horses over twelve months',
        },
        {
          category: 'Veterinary care',
          amount: 5400,
          description:
            'Routine and emergency vet visits, vaccinations, bloodwork, and one emergency procedure (Kaspar)',
        },
        {
          category: 'Farrier visits',
          amount: 1680,
          description:
            'Six-weekly hoof trimming for all horses — specialist farrier for senior horses',
        },
        {
          category: 'Staffing',
          amount: 6000,
          description:
            'Part-time sanctuary manager salary (part-funded from this campaign)',
        },
        {
          category: 'Utilities & maintenance',
          amount: 1800,
          description: 'Electricity, water, and routine maintenance',
        },
        {
          category: 'Insurance',
          amount: 720,
          description:
            'Public liability and animal health insurance',
        },
      ],
      quote:
        'Every euro in this report went directly into the care of our horses. Nothing was spent on administration beyond what you see here.',
      quoteAuthor: 'Marie Horáčková, Foundation Director',
      outcomes: [
        'Seven horses maintained in full health throughout 2022',
        'Three new rescues successfully integrated',
        'Zero instances of preventable illness or injury',
        'Marta fully rehabilitated and moved to thriving status',
      ],
      remainingFunds: 0,
      remainingNote:
        'The €1,200 shortfall against target was covered by two volunteer work weekends and a private donation from a board member. Full audited financial accounts for 2022 are available as a PDF on request.',
    },
  },
];
