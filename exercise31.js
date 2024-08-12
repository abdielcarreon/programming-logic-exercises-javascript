//Given a number, indicating what kind of angle is according to the number setted as argument
/* sharpAngle = < 90;
rectAngle = 90;
obtuseAngle =  > 90;
convexAngle = < 180;
flattAngle = 180;
concaveAngle = > 180; */

function angularSetter(grades) {

    let result;
    if(grades <= 0) {
        result = 'We sorry, the measurements must be from 1 to 360 maximum';
    }else if (grades === 90) {
        result = 'Right Angle';
    } else if(grades > 0 && grades < 90) {
        result = 'Acute Angle';
    } else if(grades === 180) {
        result = 'Flat Angle';
    } else if(grades > 90 && grades < 180) {
        result = 'Obtuse Angle';
    } else if(grades === 360) {
        result = 'Full Angle';
    } else if(grades > 180 && grades < 360) {
        result = 'Concave Angle';
    }else if(grades > 360) {
        result = 'We sorry, the measurements must be from 1 to 360 maximum';
    }

    return result;
}

console.log(angularSetter(361));