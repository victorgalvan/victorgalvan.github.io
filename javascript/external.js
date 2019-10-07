//window.alert(5+6);
//window.alert('5+6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x = "web";
//const y = "mapping";
//const out = x+y;
//document.write(out);
// A prompt box is used to prompt users to input a value before entering a page.
//user_name=window.prompt("Please enter your name", "Type your name here");
//const x= user_name
//const out= x
//document.write(out);
//document.write(user_name);
//x=22;
//const y=33;
//document.writeln(x+y);
//document.writeln("<br>");
//document.writeln(x += 33);
//document.writeln("<button onclick='condition()'>Conditional Test</button>")

//function condition()
//{
//  x=confirm("Are you sure you want to proceed?");
//  if(x)
//  {
//    document.writeln("You chose Okay!");
//  }
//  else
//  {
//    document.writeln("You chose Cancel!");
//  }
//}
var webmaps =
  [
    ["True Size",
    "https://thetruesize.com/",
    "The purpose of this website was to compare the size of a state or country to other states and countries by allowing the user to search for a specific region and dragging it to another region of the world."
    ],
    ["In Flight",
    "https://www.theguardian.com/world/",
    "This web map is used as a way to celebrate 100 years of passenger air travel.  We are presented with an interactive map letting the user to slide through different times of day on May 5th of 2014. It correlates to the number of planes in flight during that specific time and the direction in which it was going. ",
    ]
  ];
function welcome ()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my webpage, " + user_name +"!</h1>"

  return message
}

//document.write(welcome());
//document.write(let message);

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps [0].length; column++)
    {
      if (column <2) {

      } else {

      }
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
