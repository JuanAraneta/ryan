import { TextLoop } from "@/components/core/TextLoop";
import { AIIcon } from "./AIIcon";
import { IconButton } from "../IconButton";
import { MdArrowUpward } from "react-icons/md";

export type AIChatPromptProps = {
  prompts?: string[];
};

export const AIChatPrompt = ({ prompts }: AIChatPromptProps) => {
  return (
    <div className="w-full max-w-[52rem] flex gap-4 items-center">
      <AIIcon className="hidden dsk:flex" />

      <div className="w-full rounded-full bg-white/15 backdrop-blur-lg flex items-center gap-2 h-14 pl-3 dsk:pl-8 pr-8 dsk:pr-2 ">
        <AIIcon className="flex dsk:hidden scale-80" />

        {prompts && (
          <TextLoop
            interval={5}
            className="text-white typo-body-small dsk:typo-body-large overflow-hidden whitespace-pre-wrap"
          >
            {prompts.map((prompt) => (
              <span key={prompt}>{prompt}</span>
            ))}
          </TextLoop>
        )}
        <IconButton className="hidden dsk:flex ml-auto">
          <MdArrowUpward className="w-6 h-6" />
        </IconButton>
      </div>
    </div>
  );
};
