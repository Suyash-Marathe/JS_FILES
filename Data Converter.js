let tb, gb, mb, kb, byte, bit;

tb = parseInt(prompt("Enter The TB : "));

gb = tb * 1024;
mb = tb * 1048576;
kb = tb * 1073741824;
byte = tb * 1099511627776;
bit = tb * 8796093022208;

document.write("Entered TB Is = ", tb);
console.log("Entered TB Is = ", tb);

document.write("<br><br>Entered TB In GB Is = ", gb);
console.log("Entered TB In GB Is = ", gb);

document.write("<br>Entered TB In MB Is = ", mb);
console.log("Entered TB In MB Is = ", mb);

document.write("<br>Entered TB In KB Is = ", kb);
console.log("Entered TB In KB Is = ", kb);

document.write("<br>Entered TB In BYTE Is = ", byte);
console.log("Entered TB In BYTE Is = ", byte);

document.write("<br>Entered TB In BIT Is = ", bit);
console.log("Entered TB In BIT Is = ", bit);
