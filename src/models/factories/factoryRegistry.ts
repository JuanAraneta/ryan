import { assetReferenceFieldFactory } from "./assetReferenceFieldFactory";
import { moduleBackgroundFieldFactory } from "./moduleBackgroundFieldFactory";
import { booleanFieldFactory } from "./booleanFieldFactory";
import { contentfulLabelFieldFactory } from "./contentfulLabelFieldFactory";
import { dateFieldFactory } from "./dateFieldFactory";
import { entryReferenceFieldFactory } from "./entryReferenceFieldFactory";
import { richTextFieldFactory } from "./richTextFieldFactory";
import { shortTextFieldFactory } from "./shortTextFieldFactory";
import { singletonLockFieldFactory } from "./singletonLockFieldFactory";
import { iconFieldFactory } from "./iconFieldFactory";
import { wistiaVideoFieldFactory } from "./wistiaVideoFieldFactory";

export const factoryRegistry = {
  contentfulLabel: contentfulLabelFieldFactory,
  richText: richTextFieldFactory,
  singletonLock: singletonLockFieldFactory,
  shortText: shortTextFieldFactory,
  entryReference: entryReferenceFieldFactory,
  assetReference: assetReferenceFieldFactory,
  boolean: booleanFieldFactory,
  date: dateFieldFactory,
  moduleBackground: moduleBackgroundFieldFactory,
  icon: iconFieldFactory,
  wistiaVideo: wistiaVideoFieldFactory,
};
