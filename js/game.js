/**
 * Created by wg on 15/1/18.
 */
function getResult() {
    var sizex =parseInt($("#sizex").val())
    var sizey =parseInt($("#sizey").val())
    var x = parseInt($("#x").val())
    var y = parseInt($("#y").val())
    var direction = $("#direction").val()
    var location = {
        x: x,
        y: y,
        direction: direction
    }

    var routes = $("#route").val()

    var directionList = ['N', 'W', 'S', 'E'];

    var number  =directionList.indexOf(direction);

    for (var i =0;i<routes.length;i++) {
        var route =routes.charAt(i);
        if ('M' == route) {
            move(direction);
        }else {
            if ('L' == route) {
                turnLeft();
            }
            if ('R' == route) {
                turnRight();
            }
            direction = directionList[number];
        }
    }
    alert(location.x+","+location.y)
    if(location.x>sizex || location.y>sizey){
        $("#result").html("超出范围了 请重新输入")
    }else{
        $("#result").html(location.x+','+location.y+','+direction)
    }



    function move(direction) {
        if ('N' == direction) {
            location.y += 1;
        }
        if ('W' == direction) {
            location.x -= 1;
        }
        if ('S' == direction) {
            location.y -= 1;
        }
        if ('E' == direction) {
            location.x += 1;
        }
    }

    function turnLeft() {
        if (number == 3) {
            number = 0;
        }else
            number += 1;
    }

    function turnRight() {
        if (number == 0)
            number = 3;
        else
            number -= 1;
    }


}