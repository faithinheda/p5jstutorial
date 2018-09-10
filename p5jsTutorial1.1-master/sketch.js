function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);
  
}

function draw()
{
  //create a background using RGB values
  background(0,0,0)
  //         Red  Green Blue
  // change the paint brush to a specific color according to RGB values
  //  Red Green Blue

  stroke(20,40,10);
  strokeWeight(3);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,100,50);
  rect(700-100,0,100,50);
  rect(700-100,500-50,100,50);
  rect(10,10,100,50);


  //ret(10,10,100,50)
  //    x  y  length height
    
}

