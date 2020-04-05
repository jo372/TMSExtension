let DateTimePicker = (function(){
  let datepicker_properties = {

  }
  class DatePicker {
      constructor() {
        console.log("Date Picker!");
        console.log(`date picker properties: ${JSON.stringify(datepicker_properties)}`);
      }
  }

  let timepicker_properties = {
    'interval': 5
  }


  class TimePicker {
    constructor() {
      console.log("Time Picker!");
      console.log(`time picker properties: ${JSON.stringify(timepicker_properties)}`);
    }
    getInterval() { return timepicker_properties.interval; }
    appendTo(domEl) {

      const minsInAnHour = 60,
            hoursInADay = 24,
            interval = this.getInterval(),
            maxMins = (hoursInADay * minsInAnHour);

      let classList = domEl.classList;
      let elId = domEl.id;

      let newSelectEl = document.createElement('select');
      if(elId){ newSelectEl.id = elId; }
      if(classList) { newSelectEl.classList.add(classList); }

      let hours = -1;
      let mins = 0;

      for(let i=0; i <= maxMins; i+=interval) {
        let newOption = document.createElement('option');
        hours = parseInt(hours);
        mins = parseInt(mins);
        let actual_time = i%minsInAnHour;

        if(i%interval == 0) {
          mins += i;
          // if i % 60
          if(i%minsInAnHour == 0) {
              hours += 1;
          }
          
          if(hours < 10) { hours = '0' + hours; }

          if(actual_time < 10) { actual_time = '0' + actual_time; }


          newOption.value = `${hours + ':' + actual_time}`;
          newOption.innerText = newOption.value;
          newSelectEl.append(newOption);
        }
      }


      // replacing the original element with our new one.
      domEl.parentNode.replaceChild(newSelectEl, domEl);
      /*
      for(let i=0; i <= maxMins; i += ) {

        if(i%5 == 0) {
          console.log(i);
        }

        let allotted_time = (i / minsInAnHour);

        //console.log(allotted_time, 60 * ('0.' + String(allotted_time).split('.').pop()));

        hours = parseInt(hours);
        mins = parseInt(i);

        if(allotted_time%minsInAnHour==0) {
          hours += 1;
          if(hours < 10) {
            hours = '0' + hours;
          }
        }

        mins = (allotted_time-parseInt(hours)) * minsInAnHour;

        if(parseInt(mins) < 10) {
          mins = '0' + mins;
        }

        //console.log(`allotted_time: ${allotted_time}; mins: ${i}; hours: ${hours};`);
        //console.log(hours, mins);
        //console.log(i, maxMins, interval, allotted_time);
      }
      // rewrite this.
      /*
      let hours = 0;
      let mins = 0;

      // write it out .
      let interval = this.getInterval();
      let maxMins = ( (24 * 60) / interval);
      // loop through the intervals in this case the default is 5 mins.
      for(let i=0; i < maxMins ; i+=interval ) {
        let newOption = document.createElement('option');

        // if the mins are less than 10, add a zero in front of it.
        if(parseInt(i) < 10) {
          mins = '0' + i;
        } else {
          mins = i;
        }


        // if the mins are equal to 60, set the mins back to 0 infront.
        if(parseInt(mins)%interval==0) {
          hours += 1;
        }
        newOption.value = `${hours + ':' + mins}`;
        newOption.innerText = newOption.value;
        newSelectEl.append(newOption);
      }

      // replacing the original element with our new one.
      domEl.parentNode.replaceChild(newSelectEl, domEl);*/
    }
  }
  return {
    'datepicker': DatePicker,
    'timepicker': TimePicker
  };
})();
