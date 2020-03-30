// Function to Change the level number
function change_level(number)
{
  $("h1").text("Level "+ number);
}
// Function to Select random box to blink
function blink()
{
  var btn=document.querySelectorAll("button");
  var len = btn.length;
  var random_number = Math.floor(Math.random()*len);
  //alert(random_number);
  btn[random_number].classList.add("blink");

  setTimeout(function(){
    btn[random_number].classList.remove("blink")
  },100);
  return random_number;
}


//Press any key to start. Change "Press A key to start to Level 1" with first blink and store interval

var level=1;
var blink_number=[];
var click_number=[];
var check = 0;

$(document).keypress(function(e){
  //alert($("h1").text());
  if($("h1").text()==="Press A Key to Start")
  {
  change_level(level);
  blink_number.push(blink());
  console.log(blink_number);
}});

$("button").click(function(){
  // Blink for the click
  var btn = this.classList;
  console.log(btn);


  //alert(click_number.length);
  if(click_number.length<level)
  {
    btn.add("blink");
    setTimeout(function(){
      btn.remove("blink")
    },100);
  switch(this.name){
    case "button1":
    click_number.push(0);
    break;

    case "button2":
    click_number.push(1);
    break;

    case "button3":
    click_number.push(2);
    break;

    case "button4":
    click_number.push(3);
    break;

    default:
    console.log(this.name);

  }}
  //console.log(click_number);
  if(blink_number.length===click_number.length)
  {
    for(var i=0;i<blink_number.length;i++)
    {
      //console.log(blink_number.length);
      if(blink_number[i]==click_number[i])
      {
      //  console.log(blink_number[i]);
        //console.log(click_number[i]);
        check=1;
      }
      else {
        check=0;
      }
      if(check===0)
      {
        break;
      }
    }
    //alert(check);
    if(check===1)
    {
      level = level+1;
      change_level(level);
      click_number=[];
      blink_number.push(blink());
      console.log(blink_number);
    }
    else if(check===0)
    {
      $("h1").text("Game Over. Press Refresh to Start");
    }
  }
  //alert(click_number);
});
