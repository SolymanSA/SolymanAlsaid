<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link rel="stylesheet" href="../css/first.css">
</head>

<body>
    <?php 
        function A()
        {
            echo "hello there";
        }
    ?>
    <h1>To Do List</h1>
    <div class="Con" id="Con">

        <div class="fcon">
            <input id="Addinput" type="text" maxlength="30">
            <button class="addB" onclick="Add()">Add</button>
        </div>

    </div>



    <!-- divs created by javascript -->

    <!--
    <div id="Todot" class="Todot">
            <div id="ps" class="ps">
                <p id="p" class="p" style="background-color: rgb(163, 132, 39);">s</p>

                <div class="checkCon">
                    <input type="checkbox" class="checkb" id="checkb"></input>
                </div>
            </div>

        <div id="buttons" class="buttons">
                <button id="delb" class="delb"></button>
                <button id="colb" class="colb"></button>
        </div>
    </div>
     -->





    <script src="../js/first.js"></script>
</body>

</html>