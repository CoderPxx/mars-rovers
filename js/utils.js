/**
 * Created by wg on 1/21/15.
 */
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