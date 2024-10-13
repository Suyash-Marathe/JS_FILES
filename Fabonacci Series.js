function changebg()
{
    document.body.style.backgroundColor='maroon';
}

function resetbg()
{
    document.body.style.backgroundColor='pink';
}

function print()
{
    let n = document.getElementById("number").value;
    if (n == "")
    {
        let level = prompt("Enter The Number : ");

        let choice = confirm("Do You Want To Print Series ?");
        if (choice == true)
        {
            let a=0, b=1, c=0, level;

            document.write("", a);
            console.log("", a);

            document.write("<br>", b);
            console.log("", b);

            for (let i=1; i<=level; i++)
            {
               c = a + b;
               document.write("<br>", c);
               console.log("", c);

               a = b;
               b = c;
            }
        }
        else
        {
            alert("Bye !!");
        }
    }
    else
    {
        let choice = confirm("Do You Want To Print Series ?");
        if (choice == true)
        {
            let a=0, b=1, c=0;

            document.write("", a);
            console.log("", a);

            document.write("<br>", b);
            console.log("", b);

            for (let i=1; i<=n; i++)
            {
                c = a + b;
                document.write("<br>", c);
                console.log("", c);

                a = b;
                b = c;
            }
        }
        else
        {
            alert("Bye !!");
        }
    }
}