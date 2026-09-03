export type HorseStatus = 'critical' | 'recovering' | 'stable' | 'thriving';
export type HorseGender = 'mare' | 'stallion' | 'gelding';

export interface Horse {
  id: string;
  name: string;
  age: number;
  breed: string;
  gender: HorseGender;
  status: HorseStatus;
  rescuedDate: string;
  location: string;
  photo: string;
  heroPhoto: string;
  additionalPhotos: string[];
  shortBio: string;
  rescueStory: string;
  currentCondition: string;
  needs: string[];
  monthlyNeed: number;
}

export const horses: Horse[] = [
  {
    id: 'marta',
    name: 'Marta',
    age: 12,
    breed: 'Thoroughbred mix',
    gender: 'mare',
    status: 'thriving',
    rescuedDate: 'March 2022',
    location: 'South paddock',
    photo: 'https://images.unsplash.com/photo-1519614356164-43acba9cb25d?w=600&h=720&fit=crop&auto=format',
    heroPhoto: 'https://images.unsplash.com/photo-1519614356164-43acba9cb25d?w=1600&h=900&fit=crop&auto=format',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1783267152320-947d4cadd869?w=900&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1761673295751-a4f49c60aa5c?w=900&h=600&fit=crop&auto=format',
    ],
    shortBio: "Found malnourished and alone after her owner's bankruptcy, Marta took a year to learn to trust again. She's now our most social resident.",
    rescueStory: "Marta was discovered in January 2022 by a local vet responding to an anonymous tip. She had been without regular food or water for at least three weeks. Her coat was dull, ribs visible, and she flinched at every human touch. The owner had declared bankruptcy and abandoned the property.\n\nOur team arrived with emergency hay and electrolytes. It took six weeks of patient, daily contact before Marta would eat from a hand. By summer, she was galloping in the paddock for the first time.",
    currentCondition: "Fully rehabilitated. Healthy weight, glossy coat, and excellent bloodwork. Marta now helps socialise newly arrived horses through shared fence contact — her calm presence has been invaluable to Luna and Rex.",
    needs: ['Hoof care every 6 weeks', 'Annual dental float', 'Monthly deworming', 'Continued routine vaccination'],
    monthlyNeed: 180,
  },
  {
    id: 'bruno',
    name: 'Bruno',
    age: 7,
    breed: 'Belgian Draft',
    gender: 'gelding',
    status: 'recovering',
    rescuedDate: 'November 2023',
    location: 'Large stable block',
    photo: 'https://images.unsplash.com/photo-1514861889637-9f51bc99fc19?w=600&h=720&fit=crop&auto=format',
    heroPhoto: 'https://images.unsplash.com/photo-1514861889637-9f51bc99fc19?w=1600&h=900&fit=crop&auto=format',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1682636109994-4f2bbee2fd72?w=900&h=600&fit=crop&auto=format',
    ],
    shortBio: "Bruno was surrendered by a farming family after sustaining a serious leg injury. At 600 kg, he needs specialist equipment and daily physical therapy.",
    rescueStory: "Bruno's former owners contacted us in October 2023 when they realised they couldn't afford the surgery their draft horse needed. A kick from another horse had fractured a small bone in his left foreleg. Without intervention, he would have been put down.\n\nWe partnered with the University Veterinary Clinic to perform the surgery in November 2023. Bruno spent three months in strict stall rest before beginning a careful rehabilitation programme.",
    currentCondition: "Eight months post-surgery. Walking normally in the paddock. Still requires bi-weekly physiotherapy and controlled exercise. Prognosis is positive — the vet expects full recovery by spring.",
    needs: ['Bi-weekly physiotherapy sessions', 'Anti-inflammatory medication', 'Extra bedding (double quantity)', 'Specialist farrier visits every 5 weeks'],
    monthlyNeed: 420,
  },
  {
    id: 'luna',
    name: 'Luna',
    age: 4,
    breed: 'Lusitano',
    gender: 'mare',
    status: 'stable',
    rescuedDate: 'June 2024',
    location: 'Training paddock',
    photo: 'https://images.unsplash.com/photo-1603985724731-287f8d5faf7e?w=600&h=720&fit=crop&auto=format',
    heroPhoto: 'https://images.unsplash.com/photo-1603985724731-287f8d5faf7e?w=1600&h=900&fit=crop&auto=format',
    additionalPhotos: [],
    shortBio: "Seized by authorities from an illegal breeding operation, Luna arrived fearful and unhandled. At four years old, she has her whole life ahead of her.",
    rescueStory: "Luna was one of eleven horses seized from an illegal breeding operation in June 2024. She had never been properly socialised with humans and arrived in a state of extreme anxiety — unable to be haltered, backing away from any approach.\n\nOur team began working with a certified equine behaviourist in July. Progress is slow and deliberate. Luna now allows haltering and can be led with minimal resistance.",
    currentCondition: "Medically healthy — all bloodwork normal, vaccinations complete, dental care done. Behaviourally still in early rehabilitation. Makes measurable progress each week. We expect six to twelve more months of patient groundwork before she's truly comfortable around people.",
    needs: ['Weekly behavioural training sessions', 'Enrichment materials', 'Continued socialisation programme', 'Regular handling by trained volunteers'],
    monthlyNeed: 280,
  },
  {
    id: 'kaspar',
    name: 'Kaspar',
    age: 19,
    breed: 'Hanoverian',
    gender: 'gelding',
    status: 'stable',
    rescuedDate: 'January 2023',
    location: 'Senior paddock',
    photo: 'https://images.unsplash.com/photo-1561361649-c86e8a408c95?w=600&h=720&fit=crop&auto=format',
    heroPhoto: 'https://images.unsplash.com/photo-1561361649-c86e8a408c95?w=1600&h=900&fit=crop&auto=format',
    additionalPhotos: [],
    shortBio: "A former competition horse, Kaspar spent his final years in neglect after his owner lost interest. He arrived with severe arthritis and a broken spirit.",
    rescueStory: "Kaspar competed at regional dressage level until age fourteen. When his competitive career ended, his owner's attention moved elsewhere. By the time a neighbour reported him to authorities, Kaspar had been living in a muddy paddock without shelter through two winters, his arthritis completely untreated.\n\nHis first winter with us was difficult. But with heated stabling, careful medication, and the quiet company of other senior horses, something shifted in him by spring.",
    currentCondition: "Arthritis well-managed with daily medication and monthly joint injections. Good appetite. Comfortable in his routine — gentle walks in the paddock, grooming sessions, and social time with Marta. A dignified, unhurried life.",
    needs: ['Daily arthritis medication', 'Monthly joint injections', 'Senior feed supplement', 'Heated stabling in winter months'],
    monthlyNeed: 350,
  },
  {
    id: 'bella',
    name: 'Bella',
    age: 3,
    breed: 'Friesian cross',
    gender: 'mare',
    status: 'thriving',
    rescuedDate: 'September 2022',
    location: 'Main paddock',
    photo: 'https://images.unsplash.com/photo-1504310977373-186d29f99322?w=600&h=720&fit=crop&auto=format',
    heroPhoto: 'https://images.unsplash.com/photo-1504310977373-186d29f99322?w=1600&h=900&fit=crop&auto=format',
    additionalPhotos: [],
    shortBio: "Born at the sanctuary to a mare we rescued, Bella has known only kindness. She reminds us every day why this work matters.",
    rescueStory: "Bella was born here in September 2022, three weeks after her mother Rona arrived from a hoarding situation. Rona was pregnant when we found her — malnourished and in poor condition. Our team stayed up through the night for the birth.\n\nBella has never known anything but safety, good food, and gentle handling. She is curious, confident, and already a favourite with our volunteers.",
    currentCondition: "Young and completely healthy. Currently receiving basic groundwork and socialisation to prepare her for a future as a gentle, well-adjusted horse. We are accepting adoption enquiries from experienced horse owners.",
    needs: ['Regular training and socialisation', 'Standard hoof and dental care', 'Finding the right forever home'],
    monthlyNeed: 160,
  },
  {
    id: 'rex',
    name: 'Rex',
    age: 9,
    breed: 'Knabstrupper',
    gender: 'stallion',
    status: 'critical',
    rescuedDate: 'August 2024',
    location: 'Medical stable',
    photo: 'https://images.unsplash.com/photo-1601317210034-a040bdbfe891?w=600&h=720&fit=crop&auto=format',
    heroPhoto: 'https://images.unsplash.com/photo-1601317210034-a040bdbfe891?w=1600&h=900&fit=crop&auto=format',
    additionalPhotos: [],
    shortBio: "Rex arrived just six weeks ago in critical condition — severe malnutrition and an untreated wound. He is fighting every day, and so are we.",
    rescueStory: "Rex came to us in August 2024 through an emergency call from the regional animal welfare office. He had been found tied to a tree in a forest, severely underweight, with a large open wound on his shoulder that had been left untreated for weeks.\n\nOur vet team worked through the night on his arrival. He required a blood transfusion, wound surgery, and IV nutrition for the first ten days. He is stable now, but still far from safe.",
    currentCondition: "Critical but stable. Daily wound care, refeeding programme under strict veterinary supervision. He is responding to treatment — gaining weight slowly, and beginning to show interest in his surroundings. Each day counts.",
    needs: ['Daily veterinary visits', 'Wound care materials', 'Specialised refeeding diet', 'Blood monitoring (bi-weekly)', 'Urgent additional funding'],
    monthlyNeed: 680,
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
    description: "Covering heating, extra feed, and veterinary care for all twelve horses through the winter months. Cold season places significant extra demands on every animal in our care — feed consumption rises by roughly 30%, and senior horses like Kaspar need continuous heated stabling.",
    target: 8500,
    raised: 5240,
    status: 'active',
    startDate: 'October 2024',
    horses: ['marta', 'bruno', 'luna', 'kaspar', 'bella', 'rex'],
    reportAvailable: false,
  },
  {
    id: 'rex-emergency',
    title: "Rex Emergency Fund",
    description: "Emergency medical treatment for Rex: surgery, blood transfusion, IV nutrition, and the first month of intensive care following his rescue in August 2024.",
    target: 3200,
    raised: 3200,
    status: 'completed',
    startDate: 'August 2024',
    endDate: 'September 2024',
    horses: ['rex'],
    reportAvailable: true,
    report: {
      summary: "Rex arrived in critical condition on 14 August 2024. Within 72 hours, the emergency fundraiser had been fully funded by 94 donors from twelve countries. The funds covered his emergency surgery, a six-day ICU stay at the University Veterinary Clinic, and his first month of specialist recovery care at the sanctuary.",
      spending: [
        { category: 'Emergency surgery', amount: 1100, description: 'Wound debridement and closure under general anaesthesia at University Veterinary Clinic' },
        { category: 'Blood transfusion & ICU', amount: 780, description: '6-day intensive care unit stay including blood products and IV nutrition' },
        { category: 'Medication — first month', amount: 340, description: 'Antibiotics, anti-inflammatories, pain management' },
        { category: 'Specialist diet — first month', amount: 280, description: 'Refeeding protocol under veterinary supervision — small, frequent high-nutrition meals' },
        { category: 'Ongoing monitoring', amount: 420, description: 'Bi-weekly vet visits and blood panels through September' },
        { category: 'Equipment & wound care', amount: 180, description: 'Bandages, antiseptic, specialist dressings for daily wound care' },
        { category: 'Transport', amount: 100, description: 'Horse ambulance for two clinic transfers' },
      ],
      quote: "When Rex arrived, we weren't sure he would make it through the first night. The speed at which your donations arrived gave us the freedom to act immediately without hesitation. That's what saved him.",
      quoteAuthor: 'Dr. Petra Nováková, Foundation Veterinarian',
      outcomes: [
        'Rex survived the first critical week and was transferred from ICU to sanctuary care',
        'Wound infection cleared by day 18',
        'Weight gain of 34 kg over the first six weeks',
        'All donated funds were spent within the first six weeks of rescue',
      ],
      remainingFunds: 0,
      remainingNote: "All €3,200 raised were fully spent on Rex's emergency and recovery care. Rex continues to need ongoing care funded through our general donations and the current Winter Care campaign.",
    },
  },
  {
    id: 'stables-repair-2023',
    title: 'Stable Roof Repair',
    description: "Emergency structural repair to two stable roofs after storm damage in April 2023. Needed to provide safe, weatherproof housing for six horses through the coming winter.",
    target: 4800,
    raised: 5100,
    status: 'completed',
    startDate: 'May 2023',
    endDate: 'July 2023',
    reportAvailable: true,
    report: {
      summary: "Following severe storm damage in April 2023, two of our stable blocks were deemed unsafe for horse habitation. The repair campaign exceeded its target by €300, allowing us to also insulate the western block. All work was completed by 20 July 2023.",
      spending: [
        { category: 'Structural repairs', amount: 2800, description: 'Timber frame repairs and roof re-sheeting — both stable blocks' },
        { category: 'Roofing materials', amount: 1200, description: 'Corrugated steel sheets, fixings, and waterproof membrane' },
        { category: 'Insulation — bonus work', amount: 620, description: 'Rigid insulation board to western block walls — funded by the €300 surplus' },
        { category: 'Labour', amount: 480, description: 'Local construction team — three days of skilled labour' },
      ],
      quote: "We've wanted to insulate that western block for two winters. The generosity of donors made it possible. The horses are noticeably calmer and warmer in there.",
      quoteAuthor: 'Jiří Kovář, Sanctuary Manager',
      outcomes: [
        'Both stable blocks fully repaired and certified safe by 20 July 2023',
        'Western block insulated — estimated 25% reduction in heating costs',
        'Six horses moved back into repaired stabling before August',
        '€300 surplus fully allocated to insulation — nothing held in reserve',
      ],
      remainingFunds: 0,
      remainingNote: "The campaign raised €5,100 against a target of €4,800. The €300 surplus was spent on the insulation project, with full transparency to all donors.",
    },
  },
  {
    id: 'annual-care-2022',
    title: 'Annual Care Fund 2022',
    description: "Full-year operational funding: feed, veterinary care, farrier visits, and part-time staff wages for seven horses in our care.",
    target: 24000,
    raised: 22800,
    status: 'completed',
    startDate: 'January 2022',
    endDate: 'December 2022',
    reportAvailable: true,
    report: {
      summary: "Our first full-year fundraiser covered core operating costs for seven horses throughout 2022. While we fell €1,200 short of target, careful budgeting and two volunteer work weekends kept us fully operational. A detailed financial statement for the full year is available on request.",
      spending: [
        { category: 'Feed & forage', amount: 7200, description: 'Hay, haylage, hard feed, and supplements for seven horses over twelve months' },
        { category: 'Veterinary care', amount: 5400, description: 'Routine and emergency vet visits, vaccinations, bloodwork, and one emergency procedure (Kaspar)' },
        { category: 'Farrier visits', amount: 1680, description: 'Six-weekly hoof trimming for all horses — specialist farrier for senior horses' },
        { category: 'Staffing', amount: 6000, description: 'Part-time sanctuary manager salary (part-funded from this campaign)' },
        { category: 'Utilities & maintenance', amount: 1800, description: 'Electricity, water, and routine maintenance' },
        { category: 'Insurance', amount: 720, description: 'Public liability and animal health insurance' },
      ],
      quote: "Every euro in this report went directly into the care of our horses. Nothing was spent on administration beyond what you see here.",
      quoteAuthor: 'Marie Horáčková, Foundation Director',
      outcomes: [
        'Seven horses maintained in full health throughout 2022',
        'Three new rescues successfully integrated',
        'Zero instances of preventable illness or injury',
        'Marta fully rehabilitated and moved to thriving status',
      ],
      remainingFunds: 0,
      remainingNote: "The €1,200 shortfall against target was covered by two volunteer work weekends and a private donation from a board member. Full audited financial accounts for 2022 are available as a PDF on request.",
    },
  },
];
