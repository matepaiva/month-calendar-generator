/*jslint browser:true */

var monthCalendarGen = function (yyyy, mm) {

  var regexMonth = /^-?[0-9]{1,2}$/;
  var regexYear = /^-?[0-9]{4}$/;


  var d;

  if (yyyy === undefined || mm === undefined || !(regexYear.test(yyyy)) || !(regexMonth.test(mm))) {
    d = new Date();
  } else {
    d = new Date(yyyy, mm);
  }

  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var month = d.getMonth();
  var year = d.getFullYear();
  var firstMonthDay = new Date(d.getFullYear(), d.getMonth(), 1);
  var lastMonthDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  var firstCalendarDay = new Date(d.getFullYear(), d.getMonth(), 1 - firstMonthDay.getDay());
  var lastCalendarDay = new Date(d.getFullYear(), d.getMonth() + 1, 13 - lastMonthDay.getDay());
  var weekGenerator = function () {
    var weeks = [];
    var numberOfWeeks = 6;
    for (var i = 0; i < numberOfWeeks; i++) {
      var week = [];
      var sunday = new Date(firstCalendarDay.getFullYear(), firstCalendarDay.getMonth(), firstCalendarDay.getDate() + i * 7);
      for (var j = 0; j < 7; j++) {
        var day = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + j);
        week.push(day);
      }
      weeks.push(week);
    }
    return weeks;
  };

  var deliveryDate = function (dataset, callback) {
    callback(dataset);
  };

  var constructSheet = function (containerEl, configObj) {
    if (configObj === undefined) {
      configObj = {};
    }

    var config = {
      months: configObj.months || ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      weekDays: configObj.weekDays || ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      sendDateTo: configObj.sendDateTo,
      table: configObj.table || false,
      hasButtons: configObj.hasButtons || false,
      busyDaysEntry: configObj.busyDaysEntry || []
    };

    var changeSheet = function (n) {
      containerEl.innerHTML = "";
      monthCalendarGen(year, month + n).constructSheet(containerEl, configObj);
    };
    
    var busyDays;
    if (typeof(config.busyDaysEntry) === "function"){
      busyDays = config.busyDaysEntry(firstCalendarDay, lastCalendarDay);
    } else{
      busyDays = config.busyDaysEntry;
    }

    var array = weekGenerator(d);

    var table = document.createElement(config.table ? 'table' : 'div');
    table.classList.add("month");
    var thead = document.createElement(config.table ? 'thead' : 'div');
    thead.classList.add("month-head");
    var tbody = document.createElement(config.table ? 'tbody' : 'div');
    tbody.classList.add("month-body");
    var tr = document.createElement(config.table ? 'tr' : 'div');
    tr.classList.add("month-head-line");
    thead.appendChild(tr);
    var th0 = document.createElement(config.table ? 'th' : 'div');
    th0.classList.add("button-before");
    th0.colSpan = "1";

    if (config.hasButtons) {
      th0.onclick = function () {
        changeSheet(-1);
      };
    }

    var th = document.createElement(config.table ? 'th' : 'div');
    th.classList.add("year-title");
    th.colSpan = "2";
    var thText = document.createTextNode(year);
    th.appendChild(thText);

    var th2 = document.createElement(config.table ? 'th' : 'div');
    th2.colSpan = "3";
    th2.classList.add("month-title");
    var thText2 = document.createTextNode(config.months[month]);
    th2.appendChild(thText2);
    var th3 = document.createElement(config.table ? 'th' : 'div');
    th3.classList.add("button-next");
    th3.colSpan = "1";

    if (config.hasButtons) {
      th3.onclick = function () {
        changeSheet(1);
      };
    }

    tr.appendChild(th0);
    tr.appendChild(th);
    tr.appendChild(th2);
    tr.appendChild(th3);

    var wDays = document.createElement(config.table ? 'tr' : 'div');
    wDays.classList.add("weekdays");
    thead.appendChild(wDays);
    for (var h = 0; h < config.weekDays.length; h++) {
      var wDay = document.createElement(config.table ? 'th' : 'div');
      wDay.classList.add("weekday");
      var wDayTxt = document.createTextNode(config.weekDays[h]);
      wDay.appendChild(wDayTxt);
      wDays.appendChild(wDay);
    }


    table.appendChild(thead);
    table.appendChild(tbody);
    containerEl.appendChild(table);

    for (var i = 0; i < array.length; i++) {
      tr = document.createElement(config.table ? 'tr' : 'div');
      tr.classList.add("week");
      for (var j = 0; j < array[i].length; j++) {
        var td = document.createElement(config.table ? 'td' : 'div');
        if (array[i][j].getMonth() < month) {
          td.classList.add("last-month");
        } else if (array[i][j].getMonth() > month) {
          td.classList.add("next-month");
        } else if (Date.parse(array[i][j]) == Date.parse(today)) {
          td.classList.add("today");
        }
        td.classList.add("day");
        var textNode = document.createTextNode(array[i][j].getDate());
        td.dataset.date = Date.parse(array[i][j]);
        if(busyDays.indexOf(parseInt(td.dataset.date)) != -1){
          td.classList.add("busy-day");
        }
        if (config.sendDateTo) {
          td.onclick = function () {
            var activeDay = document.getElementsByClassName("active-day");
            for (var i = 0; i < activeDay.length; i++) {
              activeDay[i].classList.remove("active-day");
            }
            this.classList.add("active-day");
            deliveryDate(this.dataset.date, config.sendDateTo);
          };
        }
        td.appendChild(textNode);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  };

  return {
    month: month,
    year: year,
    today: today,
    now: now,
    firstMonthDay: firstMonthDay,
    lastMonthDay: lastMonthDay,
    firstCalendarDay: firstCalendarDay,
    lastCalendarDay: lastCalendarDay,
    run: function () {
      return weekGenerator();
    },
    constructSheet: function (containerEl, array) {
      constructSheet(containerEl, array);
    },
  };


};