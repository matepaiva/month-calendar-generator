# Month Calendar Generator

![monthCalendar Example Image](https://github.com/matepaiva/monthCalendar-Generator/blob/master/calendar.png)

With Month Calendar Generator, we ask you a year and a month -- and we return to you the sheet of that period in 3 different ways: 
- as an array of arrays (6 lines with 7 days in each),
- as an table with all the content and a bunch of classes set up,
- or as divs inside divs, instead of a table but with the same features (just for those who has a problem with tables).

And it's just 2k. Download it now!

## Ok, I want just the array of arrays.
This is a good option when you want to do something else with the data.

```javascript
var weeksNow = monthCalendarGen().run(); // returns an array of the current month divided by 6 lines (array), which one containing another array with 7 days.
```
![monthCalendar Example Console](https://github.com/matepaiva/monthCalendar-Generator/blob/master/example.png)

Pay attention: if you pass no argument to monthCalendarGen(), it will consider you are talking about the current momment. And, when passing the date, you can make the most of the JavaScript ways to create dates:

```javascript
var December2016 = monthCalendarGen("2016, 12").run();  // same as...
    December2016 = monthCalendarGen("2016, dec").run(); // same as...
    December2016 = monthCalendarGen(1481335200000).run(); // same as...
    December2016 = monthCalendarGen("Fri Dec 02 2016 00:00:00 GMT-0200 (BRST)").run(); // same as... You got it.
```

But if you want to build a calendar, we can handle this. You will see now.

## Build the calendar for me, please.
Oh, it's a pleasure.

All you have to do is passing the Year-month argument to the generator and one argument to the constructor: where it's going to build it.

This...
```html
<body>
  <div id="calendar"></div>
   
  <script src="monthCalendarGen.js"></script>
  <script src="index.js"></script>
</body>
```
...with this...

```javascript
var calendar = document.getElementById("calendar"); //the outer element.

monthCalendarGen("2016, mar").constructSheet(calendar);
```
...will become this:
```html
<body>
 <div id="calendar">
  <div class="month">
    <div class="month-head">
      <div class="month-title">2016 March</div>
    </div>
    <div class="month-body">
      <div class="week">
        <div class="last-month day" data-date="1456628400000">28</div>
        <div class="last-month day" data-date="1456714800000">29</div>
        <div class="day" data-date="1456801200000">1</div>
        <div class="day" data-date="1456887600000">2</div>
        <div class="day" data-date="1456974000000">3</div>
        <div class="day" data-date="1457060400000">4</div>
        <div class="day" data-date="1457146800000">5</div>
      </div>
      <div class="week">
        <div class="day" data-date="1457233200000">6</div>
        <div class="day" data-date="1457319600000">7</div>
        <div class="day" data-date="1457406000000">8</div>
        <div class="day" data-date="1457492400000">9</div>
        <div class="day" data-date="1457578800000">10</div>
        <div class="day" data-date="1457665200000">11</div>
        <div class="day" data-date="1457751600000">12</div>
      </div>
      <div class="week">
        <div class="day" data-date="1457838000000">13</div>
        <div class="day" data-date="1457924400000">14</div>
        <div class="day" data-date="1458010800000">15</div>
        <div class="day" data-date="1458097200000">16</div>
        <div class="day" data-date="1458183600000">17</div>
        <div class="day" data-date="1458270000000">18</div>
        <div class="day" data-date="1458356400000">19</div>
      </div>
      <div class="week">
        <div class="day" data-date="1458442800000">20</div>
        <div class="day" data-date="1458529200000">21</div>
        <div class="day" data-date="1458615600000">22</div>
        <div class="day" data-date="1458702000000">23</div>
        <div class="day" data-date="1458788400000">24</div>
        <div class="day" data-date="1458874800000">25</div>
        <div class="day" data-date="1458961200000">26</div>
      </div>
      <div class="week">
         <div class="day" data-date="1459047600000">27</div>
         <div class="day" data-date="1459134000000">28</div>
         <div class="day" data-date="1459220400000">29</div>
         <div class="day" data-date="1459306800000">30</div>
         <div class="day" data-date="1459393200000">31</div>
         <div class="next-month day" data-date="1459479600000">1</div>
         <div class="next-month day" data-date="1459566000000">2</div>
      </div>
      <div class="week">
        <div class="next-month day" data-date="1459652400000">3</div>
        <div class="next-month day" data-date="1459738800000">4</div>
        <div class="next-month day" data-date="1459825200000">5</div>
        <div class="next-month day" data-date="1459911600000">6</div>
        <div class="next-month day" data-date="1459998000000">7</div>
        <div class="next-month day" data-date="1460084400000">8</div>
        <div class="next-month day" data-date="1460170800000">9</div>
      </div>
    </div>
  </div>
 </div>

 <script src="monthCalendarGen.js"></script>
 <script src="index.js"></script>
</body>
```
Isn't it beautiful?

If you want it to display as table, you just have to pass an extra argument into an config object:

```javascript
var calendar = document.getElementById("calendar"); //the outer element.

monthCalendarGen("2016, mar").constructSheet(calendar, {table:true});
```
And then, when you reload your html, it will be like this:
```html
<body>
  <div id="calendar">
    <table class="month">
      <thead class="month-head">
        <tr class="month-head-line">
          <th class="month-title" colspan="7">2016 March</th>
        </tr>
      </thead>
      <tbody class="month-body">
        <tr class="week">
          <td class="last-month day" data-date="1456628400000">28</td>
          <td class="last-month day" data-date="1456714800000">29</td>
          <td class="day" data-date="1456801200000">1</td>
          <td class="day" data-date="1456887600000">2</td>
          <td class="day" data-date="1456974000000">3</td>
          <td class="day" data-date="1457060400000">4</td>
          <td class="day" data-date="1457146800000">5</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1457233200000">6</td>
          <td class="day" data-date="1457319600000">7</td>
          <td class="day" data-date="1457406000000">8</td>
          <td class="day" data-date="1457492400000">9</td>
          <td class="day" data-date="1457578800000">10</td>
          <td class="day" data-date="1457665200000">11</td>
          <td class="day" data-date="1457751600000">12</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1457838000000">13</td>
          <td class="day" data-date="1457924400000">14</td>
          <td class="day" data-date="1458010800000">15</td>
          <td class="day" data-date="1458097200000">16</td>
          <td class="day" data-date="1458183600000">17</td>
          <td class="day" data-date="1458270000000">18</td>
          <td class="day" data-date="1458356400000">19</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1458442800000">20</td>
          <td class="day" data-date="1458529200000">21</td>
          <td class="day" data-date="1458615600000">22</td>
          <td class="day" data-date="1458702000000">23</td>
          <td class="day" data-date="1458788400000">24</td>
          <td class="day" data-date="1458874800000">25</td>
          <td class="day" data-date="1458961200000">26</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1459047600000">27</td>
          <td class="day" data-date="1459134000000">28</td>
          <td class="day" data-date="1459220400000">29</td>
          <td class="day" data-date="1459306800000">30</td>
          <td class="day" data-date="1459393200000">31</td>
          <td class="next-month day" data-date="1459479600000">1</td>
          <td class="next-month day" data-date="1459566000000">2</td>
        </tr>
        <tr class="week">
          <td class="next-month day" data-date="1459652400000">3</td>
          <td class="next-month day" data-date="1459738800000">4</td>
          <td class="next-month day" data-date="1459825200000">5</td>
          <td class="next-month day" data-date="1459911600000">6</td>
          <td class="next-month day" data-date="1459998000000">7</td>
          <td class="next-month day" data-date="1460084400000">8</td>
          <td class="next-month day" data-date="1460170800000">9</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script src="monthCalendarGen.js"></script>
  <script src="index.js"></script>
</body>
```

That's it. Now the details:

##The config object
Untill now, there are 3 values you can set in your config object:

```javascript
  var config = {
    // Default is english, but you can set manually for any name you want for the months.
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    
    // Below is what is going to happen when you click on a calendar day. It's a way to connect the calendar with outside code. That's the reason for data-date (now you know). If not set, nothing will happen on click.
    sendDateTo: function(date){
      console.log(date); //example
    }, 
    table: true // default is false.
  };
```

##The CSS stuff
As you could see, there are some built-in classes inside the Month Calendar Generator. They are:

```css
.month
  .month-head
    .month-head-line
      .month-title
  .month-body
    .week
      .day
      .last-month
      .next-month
```
##And that's it!
Feel free to contribute with the code and fork the repository. And here you have the link to download the minified version of Month Calendar Generator.