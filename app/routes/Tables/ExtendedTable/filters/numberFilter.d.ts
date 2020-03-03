export function buildCustomNumberFilter({ placeholder, getFilter, comparators, ...other }?: {
    placeholder: any;
    getFilter: any;
    comparators: any;
}): {
    filter: any;
    filterRenderer: (onFilter: any, column: any) => JSX.Element;
};
