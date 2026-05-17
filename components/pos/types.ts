import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type PricingPackage = {
  name: string;
  price: string;
  period: string;
  desc: string;
  highlight: boolean;
  items: string[];
};

export type EquipmentItem = {
  name: string;
  type: string;
  price: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  specs: string[];
  suitableFor: string;
};

export type PosScreen = {
  title: string;
  label: string;
  desc: string;
  image: string;
  icon: LucideIcon;
  imageClassName?: string;
  features?: string[];
};
