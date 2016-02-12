var body = document.getElementsByTagName("body")[0];


var getTasksDay = function(firstDay, lastDay){
  firstDay = Date.parse(firstDay);
  lastDay = Date.parse(lastDay) + 86400000;
  var tasksKey = [];

  for (var i=0; i<localStorage.length; i++){
    if (localStorage.key(i) >= firstDay && localStorage.key(i) < lastDay){
      tasksKey.push(parseInt(localStorage.key(i)));
    }
  }
  return tasksKey;
};

var config = {
  // Default is english, but you can set manually for any name you want for the months.
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],

  // Below is what is going to happen when you click on a calendar day. It's a way to connect the calendar with outside code. That's the reason for data-date (now you know). If not set, nothing will happen on click.
  sendDateTo: function (date) {
    console.log(date); //example
  },
  table: true, // default is false
  hasButtons: true,
  busyDaysEntry: getTasksDay,
};

monthCalendarGen().constructSheet(body, config);