declare var _default: ({
    id: number;
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
    desc?: undefined;
} | {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay?: undefined;
    desc?: undefined;
} | {
    id: number;
    title: string;
    start: Date;
    end: Date;
    desc: string;
    allDay?: undefined;
})[];
export default _default;
