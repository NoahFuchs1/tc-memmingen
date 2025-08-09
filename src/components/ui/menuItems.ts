type MenuItem = {
  title: string;
  href?: string; // Wenn vorhanden, dann kein Dropdown
  children?: { text: string; href: string }[]; // Wenn vorhanden, Dropdown
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
      { text: "Platz buchen", href: "#" },
      { text: "Mitglied werden", href: "#" },
      { text: "Tennisbase Elsner", href: "#" },
    ],
  },
  {
    title: "Mannschaften",
    children: [
      { text: "Spielpläne", href: "#" },
      { text: "Tabellen", href: "#" },
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
      { text: "Vereinsgastätte Juro Grill", href: "#" },
      { text: "ATG Tennis", href: "#" },
      { text: "BTV Tennis", href: "#" },
    ],
  },
];