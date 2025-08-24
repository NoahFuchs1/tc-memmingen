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
      { text: "Termine & Bildergalerie", href: "#" },
      { text: "Aktuelle News & Newsarchiv", href: "/news" },
      { text: "Pressemitteilungen / Presselinks", href: "#" },
    ],
  },
  {
    title: "Tennisangebote",
    children: [
      { text: "Platz buchen", href: "https://tc-memmingen.tennisplatz.info/reservierung", isNewTab: true },
      { text: "Mitglied werden", href: "#" },
      { text: "Tennisbase Elsner", href: "https://tennisbasedanielelsner.de/", isNewTab: true },
    ],
  },
  {
    title: "Mannschaften",
    children: [
      { text: "Tabellen", href: "#" },
      { text: "Mannschaften", href: "#" },
    ],
  },
  {
    title: "Über den TCM",
    children: [
      { text: "Motto & Geschichte", href: "#" },
      { text: "Vorstand & Beirat", href: "#" },
      { text: "Kontakt", href: "#" },
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
];