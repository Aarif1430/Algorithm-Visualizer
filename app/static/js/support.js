
var slider = document.getElementById("array_size");
var output = document.getElementById("arr_size");
output.innerHTML = slider.value;
var counter = document.getElementById("comparsions");
counter.innerHTML = 0;
var lang = "JavaScript";

slider.oninput = function() {
    output.innerHTML = this.value;
    let size = 1200/this.value;
    values = new Array(floor(1200/size));
    states = new Array(floor(1200/size));

    for(let l = 0; l < values.length; l++) {
        values[l] = float(random(height));
        states[l] = -1;
    }
}

var speed_slider = document.getElementById("speed_size");
var speed_output = document.getElementById("speed_value");
speed_output.innerHTML = speed_slider.value;

speed_slider.oninput = function() {
  speed_output.innerHTML = this.value;
}
//

$(document).ready(function() {
  var btn = $(".button");

  btn.click(function(event) {
  if (event.target.className == 'button') {
    btn.toggleClass("paused");
  var language = lang;
  var algorithm = document.getElementById("sorting").value;

  if (language == "Python"){
  $.ajax({
    url: "/generate",
    type: "POST",
    async: false,
    data: {
      array_of_objects: [
        { sortFunction: algorithm },
        {data : values}
      ]
    },
    success: function(response) {
      console.log("===== SUCCESS =====");
      sortedArray = JSON.parse("[" + response + "]");
      pythonSortWrapper(sortedArray[0]);
      console.log(sortedArray);
      return true;
    },
    error: function(response) {
      console.log("===== ERROR =====");
      console.log(response);
    }
      });
        }
  else if (language == "JavaScript"){
    if (algorithm == "Bubble Sort"){
        bubbleSort(values, 0, values.length);
      }
      else if (algorithm == "Insertion Sort"){
        insertion_sort(values);
      }
      else if (algorithm == "Merge Sort"){
        merge_sort(values);
      }
      else if (algorithm == "Quick Sort"){
        quick_sort(values);
      }
    }
 }

  else{
    location.reload();
    return false;
  }

  });
});


$(function() {
			  $('nguage').on('change', function(event)
			  {
			  if (this.value == "Python"){
				$.ajax({
                        url: "/generate",
                        type: "POST",
                        async: false,
                        data: {
                          array_of_objects: [
                            { sortFunction: this.value },
                            {data : values}
                          ]
                        },
                        success: function(response) {
                          console.log("===== SUCCESS =====");
                          sortedArray = JSON.parse("[" + response + "]");
                          bubbleSort(sortedArray[0], 0, sortedArray[0].length);
                          console.log(sortedArray);
                          return true;
                        },
                        error: function(response) {
                          console.log("===== ERROR =====");
                          console.log(response);
                        }
                      });
                      }
                else if (this.value == "JavaScript"){
                    bubbleSort(values, 0, values.length);
                }
				return false;
			  });
			});

$('#language-dropdown a').click(function(){
    lang = this.text;
    $('#languages').text($(this).text());
  });

  $('#algorithms a').click(function(){
    $('#selected').text($(this).text());
  });