let even=0, odd=0, i, total=0;

document.write("Odd Numbers : <br>");

for (i=1; i<=100; i++)
{
    if (i % 2 != 0)
    {
        document.write("<br>", i);
        odd = odd + i;
    }
}

document.write("<br><br><br>");

document.write("<br>Even Numbers : <br>")
for (i=1; i<=100; i++)
{
    if (i % 2 == 0)
    {
        document.write("<br>", i);
        even = even + i;
    }
}

document.write("<br><br><br>Sum Of Odd Numbers = ", odd);
document.write("<br>Sum Of Even Numbers = ", even);

document.write("<br><br><br>Total Sum Of Odd And Even Numbers = ", odd + even);