import * as React from "react";

export default class Calendar extends React.Component {
  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }: any): any;
  resizeEvent({ event, start, end }: any): any;
  newEvent(event: any): any;
}
