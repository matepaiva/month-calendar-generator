# Month Calendar Generator

```javascript
var calendar = document.getElementById("calendar"); //the outer element.

monthCalendarGen().constructSheet(calendar); // build the calendar inside of that element.
```

![monthCalendar Example Image](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/calendar.png)

See and interact with [examples here](http://matepaiva.github.io/projetos/month-calendar-generator/).

With Month Calendar Generator, we ask you a year and a month -- and we return to you the sheet of that period in 3 different ways: 
- as an array of arrays (6 lines with 7 days in each),
- as an table with all the content and a bunch of classes set up,
- or as divs inside divs, instead of a table but with the same features (just for those who has a problem with tables).

And it's just 2.8kB. [Download it now](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/monthCalendarGen.min.js)!

## Ok, I want just the array of arrays.
This is a good option when you want to do something else with the data.

```javascript
var weeksNow = monthCalendarGen().run(); // returns an array of the current month divided by 6 lines (array), which one containing another array with 7 days.
```
![monthCalendar Example Console](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/example.png)

You must pass the date as two arguments, first being year(YYYY) and second being month (MM). Remember: in JavaScript, month starts at 0 and ends at 11.

If you pass no argument to monthCalendarGen() or a wrong argument (like a string), it will assume date is New Date() -- which means, now. You will get the sheet of the current month.

```javascript
var December2016 = monthCalendarGen(2016, 11).run();
var currentMonth = monthCalendarGen().run();
var alsoCurrentmonth = monthCalendarGen("ablablidubla").run();
```

But if you want to build a calendar, we can handle this. You will see now.

## Build the calendar for me, please.
Oh, it's a pleasure.

All you have to do is passing the Year-month arguments to the generator and one argument to the constructor: where it's going to build it.

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

monthCalendarGen(2016, 1).constructSheet(calendar);
```
...will become this:
```html
<body>
  <div id="calendar">
    <div class="month">
      <div class="month-head">
        <div class="month-title">2016 Fevereiro</div>
        <div class="weekdays">
          <div class="weekday">Dom</div>
          <div class="weekday">Seg</div>
          <div class="weekday">Ter</div>
          <div class="weekday">Qua</div>
          <div class="weekday">Qui</div>
          <div class="weekday">Sex</div>
          <div class="weekday">Sab</div>
        </div>
      </div>
      <div class="month-body">
        <div class="week">
          <div class="last-month day" data-date="1454205600000">31</div>
          <div class="day" data-date="1454292000000">1</div>
          <div class="day" data-date="1454378400000">2</div>
          <div class="day" data-date="1454464800000">3</div>
          <div class="day" data-date="1454551200000">4</div>
          <div class="day" data-date="1454637600000">5</div>
          <div class="day" data-date="1454724000000">6</div>
        </div>
        <div class="week">
          <div class="day" data-date="1454810400000">7</div>
          <div class="day" data-date="1454896800000">8</div>
          <div class="day" data-date="1454983200000">9</div>
          <div class="today day" data-date="1455069600000">10</div>
          <div class="day" data-date="1455156000000">11</div>
          <div class="day" data-date="1455242400000">12</div>
          <div class="day" data-date="1455328800000">13</div>
        </div>
        <div class="week">
          <div class="day" data-date="1455415200000">14</div>
          <div class="day" data-date="1455501600000">15</div>
          <div class="day" data-date="1455588000000">16</div>
          <div class="day" data-date="1455674400000">17</div>
          <div class="day" data-date="1455760800000">18</div>
          <div class="day" data-date="1455847200000">19</div>
          <div class="day" data-date="1455933600000">20</div>
        </div>
        <div class="week">
          <div class="day" data-date="1456023600000">21</div>
          <div class="day" data-date="1456110000000">22</div>
          <div class="day" data-date="1456196400000">23</div>
          <div class="day" data-date="1456282800000">24</div>
          <div class="day" data-date="1456369200000">25</div>
          <div class="day" data-date="1456455600000">26</div>
          <div class="day" data-date="1456542000000">27</div>
        </div>
        <div class="week">
          <div class="day" data-date="1456628400000">28</div>
          <div class="day" data-date="1456714800000">29</div>
          <div class="next-month day" data-date="1456801200000">1</div>
          <div class="next-month day" data-date="1456887600000">2</div>
          <div class="next-month day" data-date="1456974000000">3</div>
          <div class="next-month day" data-date="1457060400000">4</div>
          <div class="next-month day" data-date="1457146800000">5</div>
        </div>
        <div class="week">
          <div class="next-month day" data-date="1457233200000">6</div>
          <div class="next-month day" data-date="1457319600000">7</div>
          <div class="next-month day" data-date="1457406000000">8</div>
          <div class="next-month day" data-date="1457492400000">9</div>
          <div class="next-month day" data-date="1457578800000">10</div>
          <div class="next-month day" data-date="1457665200000">11</div>
          <div class="next-month day" data-date="1457751600000">12</div>
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

monthCalendarGen(2016, 2).constructSheet(calendar, {table:true});
```
And then, when you reload your html, it will be like this:
```html
<body>
  <div id="calendar">
    <table class="month">
      <thead class="month-head">
        <tr class="month-head-line">
          <th class="month-title" colspan="7">2016 Fevereiro</th>
        </tr>
        <tr class="weekdays">
          <th class="weekday">Dom</th>
          <th class="weekday">Seg</th>
          <th class="weekday">Ter</th>
          <th class="weekday">Qua</th>
          <th class="weekday">Qui</th>
          <th class="weekday">Sex</th>
          <th class="weekday">Sab</th>
        </tr>
      </thead>
      <tbody class="month-body">
        <tr class="week">
          <td class="last-month day" data-date="1454205600000">31</td>
          <td class="day" data-date="1454292000000">1</td>
          <td class="day" data-date="1454378400000">2</td>
          <td class="day" data-date="1454464800000">3</td>
          <td class="day" data-date="1454551200000">4</td>
          <td class="day" data-date="1454637600000">5</td>
          <td class="day" data-date="1454724000000">6</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1454810400000">7</td>
          <td class="day" data-date="1454896800000">8</td>
          <td class="day" data-date="1454983200000">9</td>
          <td class="today day" data-date="1455069600000">10</td>
          <td class="day" data-date="1455156000000">11</td>
          <td class="day" data-date="1455242400000">12</td>
          <td class="day" data-date="1455328800000">13</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1455415200000">14</td>
          <td class="day" data-date="1455501600000">15</td>
          <td class="day" data-date="1455588000000">16</td>
          <td class="day" data-date="1455674400000">17</td>
          <td class="day" data-date="1455760800000">18</td>
          <td class="day" data-date="1455847200000">19</td>
          <td class="day" data-date="1455933600000">20</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1456023600000">21</td>
          <td class="day" data-date="1456110000000">22</td>
          <td class="day" data-date="1456196400000">23</td>
          <td class="day" data-date="1456282800000">24</td>
          <td class="day" data-date="1456369200000">25</td>
          <td class="day" data-date="1456455600000">26</td>
          <td class="day" data-date="1456542000000">27</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1456628400000">28</td>
          <td class="day" data-date="1456714800000">29</td>
          <td class="next-month day" data-date="1456801200000">1</td>
          <td class="next-month day" data-date="1456887600000">2</td>
          <td class="next-month day" data-date="1456974000000">3</td>
          <td class="next-month day" data-date="1457060400000">4</td>
          <td class="next-month day" data-date="1457146800000">5</td>
        </tr>
        <tr class="week">
          <td class="next-month day active-day" data-date="1457233200000">6</td>
          <td class="next-month day" data-date="1457319600000">7</td>
          <td class="next-month day" data-date="1457406000000">8</td>
          <td class="next-month day" data-date="1457492400000">9</td>
          <td class="next-month day" data-date="1457578800000">10</td>
          <td class="next-month day" data-date="1457665200000">11</td>
          <td class="next-month day" data-date="1457751600000">12</td>
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
    
    // Default is english, but you can set manually for any name you want for the days of the week.
    week: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    
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
    .weekdays
      .weekday
  .month-body
    .week
      .day
      .last-month
      .next-month
      .today
      .active-day
```
##And that's it!
Feel free to contribute with the code and fork the repository. And [here you have the link to download the minified version](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/monthCalendarGen.min.js) of **Month Calendar Generator**.
