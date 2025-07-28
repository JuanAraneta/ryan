import { assetReferenceFieldFactory } from "./assetReferenceFieldFactory";
import { booleanFieldFactory } from "./booleanFieldFactory";
import { contentfulLabelFieldFactory } from "./contentfulLabelFieldFactory";
import { entryReferenceFieldFactory } from "./entryReferenceFieldFactory";
import { richTextFieldFactory } from "./richTextFieldFactory";
import { shortTextFieldFactory } from "./shortTextFieldFactory";
import { singletonLockFieldFactory } from "./singletonLockFieldFactory";

export const factoryRegistry = {
  contentfulLabel: contentfulLabelFieldFactory,
  richText: richTextFieldFactory,
  singletonLock: singletonLockFieldFactory,
  shortText: shortTextFieldFactory,
  entryReference: entryReferenceFieldFactory,
  assetReference: assetReferenceFieldFactory,
  boolean: booleanFieldFactory,
};
