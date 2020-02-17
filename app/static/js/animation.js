// Set Global Variables
        let values = [];
        let w =20;
        let cols, rows;
        let z = 20;
        let grid = [];
        // To store the state of each bar
        // in order to change the color
        let states = [];

        function setup() {

            // Create Canvas of Size Windows
            // Width * Windows Height
            var canvas =  createCanvas(1200, 580);
            canvas.parent('sketch-holder');
            let w = 1200/float(document.getElementById("array_size").value);


            cols = floor(width/z);
            rows =  floor(height/z);

            for (j=0; j< rows; j++){
                for(i=0; i< cols; i++){
                    let cell = new Cell(i, j);
                    grid.push(cell);
                }
            }

            // Insert Random values in array
            values = new Array(floor(width/w));

            for(let l = 0; l < values.length; l++) {
                values[l] = float(random(height));
                states[l] = -1;
            }

            // Print Unsorted Array
            print("Unsorted Array:" + values);

            // Call to bubble sort function
            //bubbleSort(values, 0, values.length);

            // Print Sorted Array
            print("Sorted Array:" + values);

        }

  

       async function pythonSortWrapper(array){
            values = array//array[0];
            counter.innerHTML = array[1];
       }

        // Definition of draw function
        function draw() {
        // this function is used to draw Matrix of size 1200 x 800
        // ariy gets add just according to backend grid
            let w = 1200/float(document.getElementById("array_size").value);

            background(0);
            for (let k=0; k< grid.length; k++ ){
                grid[k].show();
            }
            for(let i = 0; i < values.length; i++) {
                stroke(0);
                fill(255);
                
                if(states[i] == 0) {
                    fill("#7D6608");
                }
                else if (states[i] == 1) {

                    // Element currently sorting
                    fill("#7CFC00");
                }
                else if(states[i]==2){
                    fill("#F5B7B1");
                }
                else{
                    fill("#7D6608");
                }
                rect(i*w, height - values[i], w, values[i]);
                fill(255);
                textSize(13);
                text( Math.round(values[i]), i*w, height - values[i]+10);

            }
                }

        function Cell(i, j){
            this.i = i;
            this.j = j;

            this.show = function(){
                let x = this.i*z;
                let y = this.j*z;
                stroke(255);
                noFill();
                rect(x,y,z,z);
            }
        }
