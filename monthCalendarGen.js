var monthCalendarGen = function(date){
    var d;
    
    if (date === undefined || date === ""){ d = new Date(); } else { d = new Date(date); }
    
    var month = d.getMonth();
    var firstMonthDay = new Date(d.getFullYear(), d.getMonth(), 1);
    var lastMonthDay = new Date(d.getFullYear(), d.getMonth()+1, 0);
    var firstCalendarDay = new Date(d.getFullYear(), d.getMonth(), 1 - firstMonthDay.getDay());
    var lastCalendarDay = new Date(d.getFullYear(), d.getMonth()+1, 13 - lastMonthDay.getDay());
    var weekGenerator = function(){
        var weeks = [];
        var numberOfWeeks = 6;
        for (var i=0; i<numberOfWeeks; i++){
            var week =[];
            var sunday = new Date(firstCalendarDay.getFullYear(), firstCalendarDay.getMonth(), firstCalendarDay.getDate() + i*7);
            for (var j=0; j<7; j++){
                var day = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + j);
                week.push(day); 
            }
            weeks.push(week);
        }
        return weeks;
    };
    
    return {
        month: month, 
        firstMonthDay: firstMonthDay, 
        lastMonthDay: lastMonthDay, 
        firstCalendarDay: firstCalendarDay,
        lastCalendarDay: lastCalendarDay,
        run: function(){
            return weekGenerator();
        }
    };
    
    
    
};
