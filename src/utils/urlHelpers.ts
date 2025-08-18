import _ from "lodash";

const MODULE_QUERY_KEY = "filter";

export const getModuleQueryKey = (moduleType = "") =>
  `${moduleType}.${MODULE_QUERY_KEY}`;

export function getQueryParam(
  searchParams: Record<string, string | string[] | undefined>,
  key: string,
): string | null {
  const value = searchParams[key];
  return Array.isArray(value) ? value[0] || null : value || null;
}

export function toggleQueryParam(
  searchParams: Record<string, string | string[] | undefined>,
  currentPath: string,
  key: string,
  value: string,
): string {
  const currentValue = getQueryParam(searchParams, key);
  const isActive = currentValue === value;

  return createQueryUrl(
    searchParams,
    currentPath,
    key,
    isActive ? null : value,
  );
}

export function createQueryUrl(
  searchParams: Record<string, string | string[] | undefined>,
  currentPath: string,
  key: string,
  value: string | null,
): string {
  const params = new URLSearchParams();

  Object.entries(searchParams).forEach(([k, v]) => {
    if (k !== key && v !== undefined) {
      if (Array.isArray(v)) {
        v.forEach((val) => params.append(k, val));
      } else {
        params.set(k, v);
      }
    }
  });

  if (value) {
    params.set(key, value);
  }

  const queryString = params.toString();
  return queryString ? `${currentPath}?${queryString}` : currentPath || "/";
}

export function toggleFilterParam(
  searchParams: Record<string, string | string[] | undefined>,
  currentPath: string,
  key: string,
  filterValue: string,
): string {
  const sluggedValue = _.kebabCase(filterValue);
  const currentValue = getQueryParam(searchParams, key);
  const isActive = currentValue === sluggedValue;

  return createQueryUrl(
    searchParams,
    currentPath,
    key,
    isActive ? null : sluggedValue,
  );
}

export function getActiveFilter(
  searchParams: Record<string, string | string[] | undefined>,
  key: string,
  availableFilters: string[],
): string | null {
  const sluggedParam = getQueryParam(searchParams, key);
  if (!sluggedParam) return null;

  return (
    availableFilters.find((filter) => _.kebabCase(filter) === sluggedParam) ||
    null
  );
}
