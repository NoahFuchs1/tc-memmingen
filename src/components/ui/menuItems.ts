type MenuItem = {
  title: string;
  href?: string; // Wenn vorhanden, dann kein Dropdown
  children?: 
  { 
    text: string; 
    href: string;
    isNewTab?: boolean; 
  }[]; // Wenn vorhanden, Dropdown
};

export const menuItems: MenuItem[] = [
  {
    title: "Termine & News",
    children: [
      { text: "Termine & Bildergalerie", href: "/news" },
      { text: "Aktuelle News & Newsarchiv", href: "/news" },
      { text: "Pressemitteilungen / Presselinks", href: "/news" },
    ],
  },
  {
    title: "Tennisangebote",
    children: [
      { text: "Platz buchen", href: "https://tc-memmingen.tennisplatz.info/reservierung", isNewTab: true },
      { text: "Mitglied werden", href: "/mitglied-werden" },
      { text: "Tennisbase Elsner", href: "https://tennisbasedanielelsner.de/", isNewTab: true },
    ],
  },
  {
    title: "Mannschaften",
    children: [
      { text: "Tabellen", href: "/tabellen" },
      { text: "Mannschaften", href: "/mannschaften" },
    ],
  },
  {
    title: "Über den TCM",
    children: [
      { text: "Motto & Geschichte", href: "/motto-und-geschichte" },
      { text: "Vorstand & Beirat", href: "/vorstand-und-beirat" },
      { text: "Kontakt", href: "/kontakt" },
      { text: "Sponsoren", href: "/sponsoren" },
    ],
  },
  {
    title: "Links",
    children: [
      { text: "Vereinsgastätte Juro Grill", href: "https://www.facebook.com/people/Juro-Grillhaus/100083868033268/", isNewTab: true },
      { text: "ATG Tennis", href: "https://www.atg-mm.de/", isNewTab: true },
      { text: "BTV Tennis", href: "https://www.btv.de/de/mein-verein/vereinsseite/tc-memmingen.html#Mannschaften", isNewTab: true },
    ],
  },
  {
    title: "TCM Shop", 
    href: "/tcm-shop"
  }
];