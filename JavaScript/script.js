function runOperators() {
    const out = [];

    let a = 10, b = 3;
    out.push("1) Arithmetic");
    out.push("10 + 3 = " + (a + b));
    out.push("10 % 3 = " + (a % b));

    out.push("2) Comparison");
    out.push("5 > 3 : " + (5 > 3));
    out.push("5 === '5' : " + (5 === '5'));

    let age = 18;
    let result = age >= 18 ? "ผู้ใหญ่" : "เยาวชน";
    out.push("6) Ternary Operator");
    out.push("age = 18 -> result = " + result);

    document.getElementById("output").textContent = out.join("\n");

    console.clear();
    out.forEach(line => console.log(line));
}