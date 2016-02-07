# monthCalendar-Generator
A very lightweight calendar API to expose the days of a calendar sheet month in 6 arrays with 7 days each.

## How to use
```javascript
var weeksNow = monthCalendarGen().run(); // returns an array of the current month divided by 6 lines (array), which one containing another array with 7 days.

var weeksDecember2016 = monthCalendarGen("2016, 12"); //returns the same as above, but for december 2016. You also can use "2016, dec".

var weekGen = monthCalendarGen(); // in this way, you can access other options, such as:
console.log(weekGen.firstCalendarDay); // returns the first day which should be displayed in the month calendar sheet. For example, "2016, 2" should return "Sun Jan 31 2016".
console.log(weekGen.lastCalendarDay); // the opposite of above. For example, "2016, 2" should return "Sat Mar 12 2016".
console.log(weekGen.firstMonthDay); //returns the first day of the month. In this case: "Mon Feb 01 2016".
console.log(weekGen.lastMonthDay); // opposite of above. "2016, 2" should return "Mon Feb 29 2016".
console.log(weekGen.month); //"2016, 2" returns 1.
console.log(weekGen.run()); // [Array[7], Array[7], Array[7], Array[7], Array[7], Array[7]]
```

See the example below:
![monthCalendar Example](https://github.com/matepaiva/monthCalendar-Generator/example.png)