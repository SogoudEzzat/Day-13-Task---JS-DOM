var user = {
    fullName: "mahmmed",
    age: 26,
    gender: "male",
    job: "Developer",
    salary: 20000,
    wife: {
        fullName: "Nada",
        age: 23,
        gender: "fmale",
        son: {
            fullName: "Ahmed",
            age: 2,
            gender: "male",
        }

    }

}
console.log(" name:", user.fullName);
console.log(" age:", user.age);
console.log(" wife:", user.wife.fullName);
console.log("son", user.wife.son.fullName);

var weekDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

for (var i = 0; i < weekDays.length; i++) {
    var day = weekDays[i];

    if (day === "Saturday" || day === "Friday") {
        console.log(day + ": Vacation");
    } else {
        console.log(day + ": Work");
    }
}
var Vacation = 4      //الساعه
if (Vacation >= 4 && Vacation < 6) {
    console.log("We will go to the amusement park.");

}
else if (Vacation >= 7 && Vacation < 11) {
    console.log("We're going to the club.");


}
else {
    console.log("Sleep time");

}

function TheSalary(poins, salar) {
    var full = poins + salar
    return full;

}
console.log(TheSalary(20000, 2000));

function Expenses(HouseholdExpenses, luxuries, doctor,ChildAllowance) {
    var Part1=HouseholdExpenses+ luxuries;
    var part2=doctor+ChildAllowance;
    var sum=Part1+part2
return sum;

}
console.log(Expenses(10000,4000,3000,2000));

function TheRemainder(fullSalary,TheExpenses) {
    var full2 =fullSalary-TheExpenses
    return full2
    
}
console.log(TheRemainder(22000,19000));


 var friends = ["Ahmed", "ezzat", "nada", "sada", "mostafa", "sogoud"]

friends.sort() 
// console.log(friends);
var friends2 =friends.push("Ali");
console.log(friends);
var friends3 = friends.shift()
console.log(friends);

 var p2="A student in the fourth year";
 var check = p2.concat(" and Fun") 
var check = p2.trimEnd() 
var check = p2.trimStart() 
var check = p2.split("&"); 
console.log(check);

var paragraphs = document.querySelectorAll("h3");
paragraphs.forEach(
    function(paragraph){
        paragraph.style.color = "tomato";
        paragraph.style.backgroundColor = "black";
    }
)
var test = document.createElement("p");
document.body.appendChild(test);
var text = document.createTextNode("Hello World with JS. it's a div");
test.appendChild(text);
test.setAttribute("class", "test");
test.setAttribute("id", "test");
test = document.getElementById("test");
test.style.color = "white";
test.style.fontSize = "30px";
test.style.backgroundColor = "red";

test.addEventListener("click", function() {
    console.log("Clicked");
})