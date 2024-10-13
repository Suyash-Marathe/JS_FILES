let a, b;

a = parseInt(prompt("Enter The Value Of A : "));
b = parseInt(prompt("Enter The Value Of B : "));

function add (x, y)
{
    return x + y;
}

let c = add (a, b);

document.write("Addition = ", c);