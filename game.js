/**
 * Created by wg on 15/1/18.
 */
function getResult() {
    var x = parseInt(document.getElementById("x").value)
    var y = parseInt(document.getElementById("y").value)
    var direction = document.getElementById("direction").value
    var location = {
        x: x,
        y: y,
        direction: direction
    }

    var routes = document.getElementById("route").value

    var directionList = ['N', 'W', 'S', 'E'];

    //var number = parseInt(firstDirection(direction));

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

    //function firstDirection(dire) {
    //    if ('N' == dire) {
    //        return 0
    //    } else if ('W' == dire) {
    //        return 1
    //    } else if ('S' == dire) {
    //        return 2
    //    } else if ('E' == dire) {
    //        return 3
    //    }
    //}

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
    document.getElementById("result").innerHTML =location.x+','+location.y+','+direction


}