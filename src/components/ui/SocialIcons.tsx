import { Button } from "@/components/ui/button";
import { SiFacebook, SiInstagram } from "react-icons/si";

export function SocialIcons() {
  return (
    <div className="flex gap-3">
      <Button variant="ghost" size="icon">
        <SiFacebook />
      </Button>
      <Button variant="ghost" size="icon">
        <SiInstagram />
      </Button>
    </div>
  );
}
