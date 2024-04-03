const grade = "G";

switch (grade) {
    case "A":
        console.log("A -> very good");
        break;
    case "B":
        console.log("B -> good");
        break;
    case "C":
        console.log("C -> average");
        break;
    case "D": case E:
        console.log("poor");   //we can use multiple values to execute same  block of code
        break;

    default:
        console.log("Invalid Grade");
}