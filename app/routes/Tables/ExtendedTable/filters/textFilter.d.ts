export function buildCustomTextFilter({ placeholder, getFilter, ...other }?: {
    placeholder: any;
    getFilter: any;
}): {
    filter: any;
    filterRenderer: (onFilter: any, column: any) => JSX.Element;
};
