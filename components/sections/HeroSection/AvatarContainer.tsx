import Image from "next/image";
import React from "react";

function AvatarContainer() {
  return (
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 p-1">
      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          <Image
            src="/logo.webp"
            alt="logo"
            loading="lazy"
            width={140}
            height={140}
            className="w-full h-25 sm:h-25 md:h-35 lg:h-45 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AvatarContainer;
