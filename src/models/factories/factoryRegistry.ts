import { contentfulLabelFieldFactory } from "./contentfulLabelFieldFactory";
import { richTextFieldFactory } from "./richTextFieldFactory";
import { shortTextFieldFactory } from "./shortTextFieldFactory";
import { singletonLockFieldFactory } from "./singletonLockFieldFactory";

export const factoryRegistry = {
  contentfulLabel: contentfulLabelFieldFactory,
  richText: richTextFieldFactory,
  singletonLock: singletonLockFieldFactory,
  shortText: shortTextFieldFactory,
};
