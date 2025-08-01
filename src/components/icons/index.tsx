import { AIIcon as AI } from "./AIIcon";

export const Icons = { AI } as const;

export const getIconByKey = (icon?: string | null) => {
  if (!icon) return null;

  const key = icon as keyof typeof Icons;
  return Icons[key];
};
