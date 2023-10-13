let calculator = '';
document.getElementById('one-btn').addEventListener('click', function () {
    calculation("1");
});
document.getElementById("two-btn").addEventListener("click", function () {
    calculation("2");
});
document.getElementById("three-btn").addEventListener("click", function () {
    calculation("3");
});
document.getElementById("four-btn").addEventListener("click", function () {
    calculation("4");
});
document.getElementById("five-btn").addEventListener("click", function () {
    calculation("5");
});
document.getElementById("six-btn").addEventListener("click", function () {
    calculation("6");
});
document.getElementById("seven-btn").addEventListener("click", function () {
    calculation("7");
});
document.getElementById("eight-btn").addEventListener("click", function () {
    calculation("8");
});
document.getElementById("nine-btn").addEventListener("click", function () {
    calculation("9");
});
document.getElementById("zero-btn").addEventListener("click", function () {
    calculation("0");
});
document.getElementById("dot-btn").addEventListener("click", function () {
  calculation(".");
});
document.getElementById("add-btn").addEventListener("click", function () {
    calculation(" + ");
});
document.getElementById("mult-btn").addEventListener("click", function () {
  calculation(" * ");
});
document.getElementById("sub-btn").addEventListener("click", function () {
  calculation(" - ");
});
document.getElementById("divide-btn").addEventListener("click", function () {
  calculation(" / ");
});
document.getElementById("equal-btn").addEventListener("click", function () {
    calculator = eval(calculator);
    console.log(calculator);
});
document.getElementById("clear-btn").addEventListener("click", function () {
    calculator = '';
    console.log(calculator);
});
function calculation(value) {
    calculator += value;
    console.log(calculator);
}