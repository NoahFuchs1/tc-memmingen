type MenuItem = {
  title: string;
  href?: string; 
  children?: { text: string; href: string }[]; 
};

export const menuItems: MenuItem[] = [
  { title: "Docs", href: "/docs" },
  {
    title: "Simple",
    children: [
      { text: "Components", href: "#" },
      { text: "Documentation", href: "#" },
      { text: "Blocks", href: "#" },
    ],
  },
  { title: "About", href: "/about" },
  {
    title: "Simple",
    children: [
      { text: "Components", href: "#" },
      { text: "Documentation", href: "#" },
      { text: "Blocks", href: "#" },
    ],
  },
];