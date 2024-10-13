let a, b;

a = parseInt(prompt("Enter The Value Of A : "));
b = parseInt(prompt("Enter The Value Of B : "));

document.write("Entered Value Of A Is = ", a);
document.write("<br>Entered Value Of B Is = ", b);
function add (x, y)
{
    return x + y;
}

let w = add (a, b);

document.write("<br><br>Addition = ", w);

function sub (m, n)
{
    return m - n;
}

let s = sub (a, b);

document.write("<br>Substraction = ", s);

function mul (p, q)
{
    return p * q;
}

let l = mul (a, b);

document.write("<br>Multiplication = ", l);

function div (u, v)
{
    return u / v;
}

let d = div (a, b);

document.write("<br>Division = ", d);

function rem (e, f)
{
    return e % f;
}

let r = rem (a, b);

document.write("<br>Remainder = ", r);