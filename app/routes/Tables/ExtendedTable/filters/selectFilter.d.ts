export function buildCustomSelectFilter({ placeholder, options, getFilter, ...other }?: {
    placeholder: any;
    options: any;
    getFilter: any;
}): {
    filter: any;
    filterRenderer: (onFilter: any, column: any) => JSX.Element;
};
