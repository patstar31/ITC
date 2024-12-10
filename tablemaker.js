function initpayroll() {
    payroll = [];
    document.getElementById("payroll").innerHTML = "";
}
function addtoPayroll() {
    var employee = {
        "name": document.getElementById("employname").value,
        "daysworked": parseInt(document.getElementById("daysworked").value),
        "dayrate": parseFloat(document.getElementById("dayrate").value),
        "dedamount": parseFloat(document.getElementById("dedamount").value),
        "grosspay": function() {
            return Math.round(this.daysworked * this.dayrate * 100) / 100;
        },
        "netpay": function() {
            return Math.round((this.grosspay() - this.dedamount) * 100) / 100;
        }
    };
    payroll.push(employee);
    showPayroll();
}
function computepay() {
    var q = parseInt(document.getElementById("daysworked").value);
    var p = parseFloat(document.getElementById("dayrate").value);
    var d = parseFloat(document.getElementById("dedamount").value);

    var gross = Math.round(q * p * 100) / 100;
    var net = Math.round((gross - d) * 100) / 100;
}
function deleteEmployee() {
    var empNo = parseInt(document.getElementById("delemployee").value) - 1; 
    if (empNo >= 0 && empNo < payroll.length) {
        payroll.splice(empNo, 1); 
        showPayroll();
    } else {
        alert("Invalid employee number.");
    }
}
function showPayroll() {
    var tbody = '';
    var totalGrossPay = 0;
    var theader = "<thead>"
        + "<tr>"
        + "<th>No.</th>"
        + "<th>Employee Name</th>"
        + "<th>Days Worked</th>"
        + "<th>Daily Rate</th>"
        + "<th>Gross Pay</th>"
        + "<th>Deduction</th>"
        + "<th>Net Pay</th>"
        + "</tr>"
        + "</thead>";
    for (var i = 0; i < payroll.length; i++) {
        var emp = payroll[i];
        var empLine = i + 1;
        tbody += "<tr>"
            + "<td>" + empLine + "</td>"
            + "<td>" + emp.name + "</td>"
            + "<td style='text-align:right'>" + emp.daysworked + "</td>"
            + "<td style='text-align:right'>" + emp.dayrate.toFixed(2) + "</td>"
            + "<td style='text-align:right'>" + emp.grosspay().toFixed(2) + "</td>"
            + "<td style='text-align:right'>" + emp.dedamount.toFixed(2) + "</td>"
            + "<td style='text-align:right'>" + emp.netpay().toFixed(2) + "</td>"
            + "</tr>";
        totalGrossPay += emp.grosspay();
    }
    var tfooter = "<tfoot>"
        + "<tr>"
        + "<th colspan='5'>Total Gross Pay</th>"
        + "<th colspan='2' style='text-align:right'>" + totalGrossPay.toFixed(2) + "</th>"
        + "</tr>"
        + "</tfoot>";
    document.getElementById("payroll").innerHTML = "<table>" + theader + "<tbody>" + tbody + "</tbody>" + tfooter + "</table>";
}
var payroll = [];