# 05 Third-Party APIs: Work Day Scheduler

Published Site URL: https://ks1.github.io/HW05-WorkDayScheduler/

Source code: https://github.com/KS1/HW05-WorkDayScheduler

Screenshots: https://github.com/KS1/HW05-WorkDayScheduler/blob/main/Work%20Day%20Scheduler%20-%20Screenshot.pdf 

## Completed Tasks

1. Created a simple calendar application to allow a user to save events for each hour of the day. 
2. Used [Moment.js](https://momentjs.com/) library to work with date and time. 
3. The current day is displayed at the top of the calendar.
4. Timeblocks for each hour are displayed for standard business hours.
5. Each timeblock is color coded to indicate whether it is in the past, present, or future.
6. Clicking on timeblock triggers the event.
7. Click on the save button for that timeblock, saves the text for that event in the local storage.
8. Refreshing the page displays the saved events.

## Worked on following User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
