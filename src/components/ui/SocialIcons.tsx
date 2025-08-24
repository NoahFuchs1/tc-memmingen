import { Button } from "@/components/ui/button";
import { SiFacebook, SiInstagram } from "react-icons/si";

export function SocialIcons() {
  return (
    <div className="flex gap-3">
      <Button asChild variant="ghost" size="icon">
        <a
          href="https://www.facebook.com/tcmemmingen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFacebook />
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <a
          href="https://www.instagram.com/tcmemmingenev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram />
        </a>
      </Button>
    </div>
  );
}
