var lastx, lasty;

    canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

     var width = screen.width

     new_width=screen.width-70

     new_height=screen.height-300

     if (width<=992){
         document.getElementById("mycanvas").width=new_width
         document.getElementById("mycanvas").height=new_height
     }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        lastx = e.touches[0].clientX - canvas.offsetLeft;
         lasty = e.touches[0].clientY - canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         currentx = e.touches[0].clientX - canvas.offsetLeft;
         currenty = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

       
        ctx.moveTo(lastx, lasty);

        
        ctx.lineTo(currentx, currenty);
        ctx.stroke();

        lastx = currentx; 
        lasty = currenty;

    }

    function clearArea(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }