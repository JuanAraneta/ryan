import { ResultOf, TadaDocumentNode } from 'gql.tada';
import { FC } from 'react';
import { ModuleExpertsOverflow } from './ExpertsOverflow';
import { GetModuleExpertsOverflowById } from '@/lib/contentful/query/GetModuleExpertsOverflowById';
import { ModuleCustomerStoriesCarousel } from './ModuleCustomerStoriesCarousel';
import { GetModuleCustomerStoriesOverflowById } from '@/lib/contentful/query/GetModuleCustomerStoriesOverflowById';

type ModuleComponent<Data = unknown> = {
  component: FC<{ data: Data }>;
  queryById: TadaDocumentNode<Data, { id: string }>;
};

type ModuleRegistry = {
  ModuleExpertsOverflow: ModuleComponent<
    ResultOf<typeof GetModuleExpertsOverflowById>
  >;
  ModuleCustomerStoriesCarousel: ModuleComponent<
    ResultOf<typeof GetModuleCustomerStoriesOverflowById>
  >;
};

const moduleRegistry: ModuleRegistry = {
  ModuleExpertsOverflow: {
    component: ModuleExpertsOverflow,
    queryById: GetModuleExpertsOverflowById,
  },
  ModuleCustomerStoriesCarousel: {
    component: ModuleCustomerStoriesCarousel,
    queryById: GetModuleCustomerStoriesOverflowById,
  },
};

export default moduleRegistry;
