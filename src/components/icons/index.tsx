import { AIIcon } from "./AIIcon";

export const Icons = { AIIcon } as const;

export const getIconByKey = (icon?: string | null) => {
  if (!icon) return null;

  if (icon in Icons) {
    return Icons[icon as keyof typeof Icons];
  }
  return null;
};
