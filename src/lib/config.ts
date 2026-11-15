import type { Text } from "@/lib/language";

export const BRAND_NAME = "Liva Dental";

export const CONTACT = {
  phone: "(512) 555-0142",
  phoneHref: "tel:+15125550142",
  email: "hello@livadental.example",
};

export const nav = {
  logo: BRAND_NAME,
  links: [
    { label: { en: "Home", sq: "Ballina" }, href: "#home" },
    { label: { en: "About", sq: "Rreth Nesh" }, href: "#about" },
    { label: { en: "Services", sq: "Shërbimet" }, href: "#services" },
    { label: { en: "Team", sq: "Ekipi" }, href: "#team" },
    { label: { en: "Pricing", sq: "Çmimet" }, href: "#pricing" },
  ] as { label: Text; href: string }[],
  login: { en: "Call the clinic", sq: "Thirr klinikën" } as Text,
  signUp: { en: "Book a check-up", sq: "Rezervo një kontroll" } as Text,
};

export const hero = {
  eyebrow: { en: "SOUTH AUSTIN, TEXAS", sq: "AUSTIN JUGOR, TEKSAS" } as Text,
  heading: { en: "Gentle Hands, Honest Prices", sq: "Duar Të Buta, Çmime Të Ndershme" } as Text,
  body: {
    en: "You see the full price before we start. We take our time, especially with nervous patients, and we only treat what really needs treating.",
    sq: "E sheh çmimin e plotë para se të fillojmë. E marrim kohën tonë, veçanërisht me pacientët e tensionuar, dhe trajtojmë vetëm atë që ka vërtet nevojë.",
  } as Text,
  ctaPrimary: { en: "Book a check-up", sq: "Rezervo një kontroll" } as Text,
  ctaSecondary: { en: "See the membership", sq: "Shiko anëtarësimin" } as Text,
  badgeShield: {
    title: "4",
    subtitle: { en: "treatment chairs", sq: "karrige trajtimi" } as Text,
  },
  badgeTeam: {
    title: "2014",
    subtitle: { en: "open since", sq: "hapur që nga" } as Text,
  },
  image: {
    src: "/images/hero-dentist-patient.webp",
    alt: { en: "Dentist talking calmly with a patient in a bright, warm clinic room", sq: "Dentist duke biseduar qetësisht me një pacient në një dhomë klinike të ndritshme" } as Text,
  },
};

export const about = {
  heading: { en: "Honest Dentistry, Clear Prices From the Start", sq: "Dentistri e Ndershme, Çmime të Qarta Që Në Fillim" } as Text,
  body: {
    en: "Dr. Liva Moreno opened this clinic in South Austin in 2014, after ten years in a big dental chain where patients were rushed through. Four chairs, two dentists, three hygienists, and no one feels like a number.",
    sq: "Dr. Liva Moreno e hapi këtë klinikë në Austin jugor në 2014, pas dhjetë vitesh në një zinxhir të madh dentar ku pacientët nxitoheshin. Katër karrige, dy dentistë, tre higjenistë, dhe askush nuk ndihet si një numër.",
  } as Text,
  features: [
    {
      title: { en: "We Only Treat What Needs Treating", sq: "Trajtojmë Vetëm Atë Që Ka Nevojë" },
      body: { en: "No upselling, no extra work added to the plan.", sq: "Pa shitje të tepërta, pa punë shtesë të shtuar në plan." },
    },
    {
      title: { en: "Written Price Before We Start", sq: "Çmim i Shkruar Para se të Fillojmë" },
      body: { en: "A full treatment plan with the price, signed off by you first.", sq: "Një plan i plotë trajtimi me çmimin, i miratuar fillimisht nga ti." },
    },
    {
      title: { en: "Extra Time for Nervous Patients", sq: "Kohë Shtesë për Pacientët e Tensionuar" },
      body: { en: "Longer appointments and sedation options, no rushing.", sq: "Takime më të gjata dhe opsione qetësimi, pa nxitim." },
    },
  ] satisfies { title: Text; body: Text }[],
};

export const services = {
  tag: { en: "Our Treatments", sq: "Trajtimet Tona" } as Text,
  tagDesc: {
    en: "Modern equipment and old-school manners, for the whole family.",
    sq: "Pajisje moderne dhe sjellje e vjetër e mirë, për të gjithë familjen.",
  } as Text,
  heading: { en: "Treatments for Every Stage", sq: "Trajtime për Çdo Fazë" } as Text,
  items: [
    { icon: "smile", title: { en: "Cleanings & Exams", sq: "Pastrime dhe Kontrolle" }, body: { en: "Routine care with a full written price up front.", sq: "Kujdes rutinë me çmim të plotë të shkruar paraprakisht." } },
    { icon: "shield", title: { en: "Fillings & Repairs", sq: "Mbushje dhe Riparime" }, body: { en: "Simple, lasting fixes with modern materials.", sq: "Riparime të thjeshta dhe të qëndrueshme me materiale moderne." } },
    { icon: "tooth", title: { en: "Crowns & Bridges", sq: "Kurora dhe Ura" }, body: { en: "Durable work, explained before we begin.", sq: "Punë e qëndrueshme, e shpjeguar para se të fillojmë." } },
    { icon: "heart", title: { en: "Sedation Options", sq: "Opsione Qetësimi" }, body: { en: "For patients who find the dentist stressful.", sq: "Për pacientët që e gjejnë stresuese vizitën te dentisti." } },
  ] satisfies { icon: string; title: Text; body: Text }[],
};

export const team = {
  heading: { en: "Our Dentists & Hygienists", sq: "Dentistët dhe Higjenistët Tanë" } as Text,
  body: {
    en: "Four chairs, two dentists, three hygienists, and a team that remembers your name.",
    sq: "Katër karrige, dy dentistë, tre higjenistë, dhe një ekip që e mban mend emrin tënd.",
  } as Text,
  link: { en: "Book with our team", sq: "Rezervo me ekipin tonë" } as Text,
  members: [
    { name: "Dr. Liva Moreno", role: { en: "Lead Dentist", sq: "Dentiste Kryesore" }, image: "/images/team-liva.webp" },
    { name: "Dr. Marcus Reyes", role: { en: "Dentist", sq: "Dentist" }, image: "/images/team-marcus.webp" },
    { name: "Priya Nair", role: { en: "Hygienist", sq: "Higjeniste" }, image: "/images/team-priya.webp" },
    { name: "Jordan Lee", role: { en: "Hygienist", sq: "Higjenist" }, image: "/images/team-jordan.webp" },
  ] satisfies { name: string; role: Text; image: string }[],
};

export const pricing = {
  tag: { en: "Pricing", sq: "Çmimet" } as Text,
  tagDesc: { en: "The price you see is the price you pay.", sq: "Çmimi që shikon është çmimi që paguan." } as Text,
  heading: { en: "Clear Prices, No Surprises", sq: "Çmime të Qarta, Pa Surpriza" } as Text,
  plans: [
    {
      price: "129",
      label: { en: "New Patient Exam", sq: "Kontrolli i Pacientit të Ri" },
      body: { en: "Full exam with X-rays included.", sq: "Kontroll i plotë me rreze X të përfshira." },
      items: [
        { en: "Full mouth exam", sq: "Kontroll i plotë i gojës" },
        { en: "Digital X-rays", sq: "Rreze X dixhitale" },
        { en: "Written treatment plan", sq: "Plan trajtimi i shkruar" },
      ],
      highlighted: false,
    },
    {
      price: "29",
      label: { en: "Membership", sq: "Anëtarësim" },
      body: { en: "For patients without dental insurance.", sq: "Për pacientët pa sigurim dentar." },
      items: [
        { en: "2 cleanings a year", sq: "2 pastrime në vit" },
        { en: "Annual exam + X-rays", sq: "Kontroll vjetor + rreze X" },
        { en: "15% off other treatments", sq: "15% ulje në trajtime të tjera" },
      ],
      highlighted: true,
    },
    {
      price: "119",
      label: { en: "Cleaning", sq: "Pastrim" },
      body: { en: "Standard cleaning, billed per visit.", sq: "Pastrim standard, faturuar për vizitë." },
      items: [
        { en: "Routine cleaning", sq: "Pastrim rutinë" },
        { en: "Fluoride treatment", sq: "Trajtim me fluor" },
        { en: "Oral health check", sq: "Kontroll i shëndetit oral" },
      ],
      highlighted: false,
    },
  ] satisfies { price: string; label: Text; body: Text; items: Text[]; highlighted: boolean }[],
  cta: { en: "Choose Membership", sq: "Zgjidh Anëtarësimin" } as Text,
  suffix: { en: "/month", sq: "/muaj" } as Text,
};

export const testimonials = {
  tag: { en: "Patients", sq: "Pacientët" } as Text,
  tagDesc: { en: "What South Austin families say after their visit.", sq: "Çfarë thonë familjet e Austin jugor pas vizitës." } as Text,
  heading: { en: "Real Visits, Real Relief", sq: "Vizita Reale, Qetësi Reale" } as Text,
  items: [
    { name: "Hannah, Zilker", role: { en: "Patient since 2019", sq: "Paciente që nga 2019" }, rating: 5, quote: { en: "I hadn't been to a dentist in years because of anxiety. They explained every step and never rushed me.", sq: "Nuk kisha shkuar te dentisti për vite për shkak të ankthit. Më shpjeguan çdo hap dhe nuk më nxituan kurrë." }, image: "/images/team-priya.webp" },
    { name: "Marcus, Travis Heights", role: { en: "Patient since 2021", sq: "Pacient që nga 2021" }, rating: 5, quote: { en: "The written price matched the final bill exactly. No surprises at checkout.", sq: "Çmimi i shkruar përputhej saktësisht me faturën finale. Pa surpriza në pagesë." }, image: "/images/team-marcus.webp" },
    { name: "Dana, South Lamar", role: { en: "Patient since 2022", sq: "Paciente që nga 2022" }, rating: 5, quote: { en: "The membership plan made sense for our family since none of us have dental insurance.", sq: "Plani i anëtarësimit kishte kuptim për familjen tonë pasi askush nga ne nuk ka sigurim dentar." }, image: "/images/team-jordan.webp" },
  ] satisfies { name: string; role: Text; rating: number; quote: Text; image: string }[],
};

export const cta = {
  heading: { en: "Ready for a Check-up?", sq: "Gati për një Kontroll?" } as Text,
  body: { en: "Book online or call the clinic. We'll send your written price before any work begins.", sq: "Rezervo online ose thirr klinikën. Do të dërgojmë çmimin e shkruar para se të fillojë çdo punë." } as Text,
  ctaPrimary: { en: "Book a check-up", sq: "Rezervo një kontroll" } as Text,
  ctaSecondary: { en: "Call the clinic", sq: "Thirr klinikën" } as Text,
};

export const footer = {
  columns: [
    {
      title: { en: "Treatments", sq: "Trajtimet" } as Text,
      links: [
        { label: { en: "Cleanings & Exams", sq: "Pastrime dhe Kontrolle" } as Text, href: "#services" },
        { label: { en: "Crowns & Bridges", sq: "Kurora dhe Ura" } as Text, href: "#services" },
        { label: { en: "Sedation Options", sq: "Opsione Qetësimi" } as Text, href: "#services" },
      ],
    },
    {
      title: { en: "Clinic", sq: "Klinika" } as Text,
      links: [
        { label: { en: "About us", sq: "Rreth Nesh" } as Text, href: "#about" },
        { label: { en: "Our team", sq: "Ekipi ynë" } as Text, href: "#team" },
        { label: { en: "Pricing", sq: "Çmimet" } as Text, href: "#pricing" },
      ],
    },
  ],
  about: {
    title: { en: "Visit Us", sq: "Na Vizito" } as Text,
    body: { en: "South Austin, Texas", sq: "Austin Jugor, Teksas" } as Text,
    phone: CONTACT.phone,
    email: CONTACT.email,
  },
  concept: { en: "Concept project · fictional brand", sq: "Projekt koncept · markë fiktive" } as Text,
  copyright: { en: "© 2026 Liva Dental. All rights reserved.", sq: "© 2026 Liva Dental. Të gjitha të drejtat e rezervuara." } as Text,
};
