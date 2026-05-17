"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type ImageSlotProps = {
  src: string;
  alt: string;
  icon: LucideIcon;
  label: string;
  className?: string;
};

export default function ImageSlot({ src, alt, icon: Icon, label, className = "object-contain" }: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex h-full min-h-52 flex-col items-center justify-center bg-[radial-gradient(circle_at_top,#dbeafe,transparent_45%),#f8fafc] p-6 text-center ${className}`}>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-blue-700 shadow-sm">
          <Icon className="h-8 w-8" />
        </div>
        <div className="text-sm font-extrabold text-slate-950">{label}</div>
        <div className="mt-2 max-w-56 text-xs leading-5 text-slate-500">
          ວາງຮູບໄວ້ທີ່ <span className="font-bold text-blue-700">{src}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
