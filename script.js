function setup(){
    createCanvas(1500,700);
   }
   function draw(){
       background ("lightblue");
   mydreamhouse();
   }
   function mydreamhouse(){
        //perete
      fill("lightgreen");
       stroke("black");
       rect(400, 200, 400, 300);

       //acoperis
       stroke("black");
       fill("red");
       triangle(400, 200, 600, 100, 800, 200);

       //usa
       stroke("black");
       fill("brown");
       rect(550, 350, 100, 150);

       //hornul 
       fill("lightgreen");
       stroke("black"); 
       rect(650, 115, 50, 70);
   
       //fereastra1
       stroke("blank");
       fill("lightyellow");
       rect(430, 250, 80, 80);

       //fereastra2
       stroke("blank");
       fill("lightyellow");
       rect(680, 250, 80, 80);

       // nor
       fill("white");
       noStroke();
       ellipse(200, 100, 100, 50);
       ellipse(250, 100, 100, 50);
       ellipse(230, 130, 100, 50);
       ellipse(180, 130, 100, 50); 
       ellipse(270, 130, 100, 50);
   }