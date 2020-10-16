




// var n = 0;
// function getTasks() {




//     for (var i = 0; i < localStorage.length; i++) {

//         var Todot = document.createElement("div");
//         Todot.id = "Todot" + n; Todot.className = "Todot";

//         var ps = document.createElement("div");
//         ps.id = "ps" + n; ps.className = "ps";

//         var buttons = document.createElement("div");
//         buttons.id = "buttons" + n; buttons.className = "buttons";

//         var p = document.createElement("p");
//         p.className = "p"; p.style.cssText += "background-color: " + getRandomColor() + ";";

//         var checkCon = document.createElement("div");
//         checkCon.id = "checkCon" + n; checkCon.className = "checkCon";

//         var checkb = document.createElement("input");
//         checkb.id = "checkb"; checkb.className = "checkb"; checkb.type = "checkbox"; checkb.onclick = checkTask;

//         var delb = document.createElement("button");
//         delb.className = "delb"; delb.onclick = deleteTask;

//         var colb = document.createElement("button");
//         colb.className = "colb"; colb.onclick = RanColor;

//         console.log(localStorage.getItem("Todot" + i));

//         var v = localStorage.getItem("Todot" + i);
//         if (!v)
//             continue;

//         console.log("here");




//         p.innerHTML = localStorage.getItem("Todot" + i);

//         document.body.appendChild(Todot);
//         console.log(n);
//         document.getElementById("Todot" + n).appendChild(ps);
//         document.getElementById("Todot" + n).appendChild(buttons);



//         document.getElementById("ps" + n).appendChild(p);
//         document.getElementById("ps" + n).appendChild(checkCon);
//         document.getElementById("checkCon" + n).appendChild(checkb);

//         document.getElementById("buttons" + n).appendChild(delb);
//         document.getElementById("buttons" + n).appendChild(colb);

//         n++;

//     }


//     console.log(n + " ;; " + i);

// }

// // getTasks();









var x = 0;
function Add() {
    var Todot = document.createElement("div");
    Todot.id = "Todot" + x; Todot.className = "Todot";

    var ps = document.createElement("div");
    ps.id = "ps" + x; ps.className = "ps";

    var buttons = document.createElement("div");
    buttons.id = "buttons" + x; buttons.className = "buttons";

    var p = document.createElement("p");
    p.className = "p"; p.style.cssText += "background-color: " + getRandomColor() + ";";

    var checkCon = document.createElement("div");
    checkCon.id = "checkCon" + x; checkCon.className = "checkCon";

    var checkb = document.createElement("input");
    checkb.id = "checkb"; checkb.className = "checkb"; checkb.type = "checkbox"; checkb.onclick = checkTask;

    var delb = document.createElement("button");
    delb.className = "delb"; delb.onclick = deleteTask;

    var colb = document.createElement("button");
    colb.className = "colb"; colb.onclick = RanColor;



    var inp = document.getElementById("Addinput").value;
    p.innerHTML = inp;

    if (inp.trim() != "") {
        document.body.appendChild(Todot);
        document.getElementById("Todot" + x).appendChild(ps);
        document.getElementById("Todot" + x).appendChild(buttons);



        document.getElementById("ps" + x).appendChild(p);
        document.getElementById("ps" + x).appendChild(checkCon);
        document.getElementById("checkCon" + x).appendChild(checkb);

        document.getElementById("buttons" + x).appendChild(delb);
        document.getElementById("buttons" + x).appendChild(colb);

        // localStorage.setItem("Todot" + x, p.innerHTML);



        x++;
    }
}

function checkTask() {
    var cb = this;
    var p = this.parentNode.previousSibling;


    if (cb.checked) {
        p.style.cssText += "text-decoration: line-through; opacity:0.3; color: #bebebe";
    } else {
        p.style.cssText += "text-decoration: none currentcolor solid; opacity:1; color: black";
    }



}


function deleteTask() {
    var tn = this.parentNode.parentNode;
    tn.style.cssText += "opacity:0;";
    setTimeout(() => {
        tn.remove();
    }, 1000);


    // localStorage.removeItem(tn.id, "");
}



function RanColor() {
    var cn = this.parentNode.previousSibling.firstChild;
    cn.style.cssText += "background-color: " + getRandomColor() + ";";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}












