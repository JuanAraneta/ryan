import { Icons } from "@/components/icons";

export const AIChatPrompt = () => {
  //841
  return (
    <div className="w-full max-w-[52rem] flex gap-4 items-center">
      <div className="relative p-2 border-2 rounded-full border-new-gold h-10 w-10 flex justify-center items-center">
        <Icons.IA className="text-new-gold z-1" />
        <div className="block bg-new-gold w-full h-full absolute inset-0 rounded-full blur-lg opacity-50" />
      </div>

      <span className="w-full px-8 py-6 rounded-full text-white typo-body-large bg-white/15 backdrop-blur-lg">
        How will tariffs impact my business taxes?
      </span>
    </div>
  );
};
