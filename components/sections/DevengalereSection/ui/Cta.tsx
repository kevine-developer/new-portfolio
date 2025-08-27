import { Button } from "../../../ui/button";
import { Play, Users } from "lucide-react";

function Cta() {
  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
      <Button
        variant="outline"
        className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 group"
        asChild
      >
        <a
          href="https://tiktok.com/@dev_en_galere"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Voir mes vidéos
        </a>
      </Button>
      <Button
        variant="outline"
        className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 group"
        asChild
      >
        <a
          href="https://instagram.com/dev_en_galere"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Rejoindre la communauté
        </a>
      </Button>
    </div>
  );
}

export default Cta;
