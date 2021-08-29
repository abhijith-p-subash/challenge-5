
//John's bills and tips
var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid: [],
    tipCalc: function () {
        for (let i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip;
            switch (true) {
                case bill <= 50:
                    tip = (20 / 100) * bill;
                    break;
                case 50 < bill <= 200:
                    tip = (15 / 100) * bill;
                    break;
                case bill > 200:
                    tip = (10 / 100) * bill;
                    break;
            }
            this.tips.push(tip);
            this.finalPaid.push(bill + tip);
        }
    }
}


//Mark's bill and tips
var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalPaid: [],
    tipCalc: function () {
        for (let i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip;
            switch (true) {
                case bill <= 100:
                    tip = (20 / 100) * bill;
                    break;
                case 100 < bill <= 300:
                    tip = (10 / 100) * bill;
                    break;
                case bill > 300:
                    tip = (25 / 100) * bill;
                    break;
            }
            this.tips.push(tip);
            this.finalPaid.push(bill + tip);
        }
    }
}


//Average calculator Function
function averageFinder(data) {
    var sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum = sum + data[i];
    }
    return average = sum / data.length;
}


//John Amount
john.tipCalc();
console.log("John's Tips ");
console.log(john.tips);
console.log("John's Final Amount");
console.log(john.finalPaid);
console.log("John's Average Tips: " + averageFinder(john.tips));


//Mark Amount
mark.tipCalc();
console.log("Mark's Tips ");
console.log(mark.tips);
console.log("Mark's Final Amount");
console.log(mark.finalPaid);
console.log("Mark's Average Tips: " + averageFinder(mark.tips));


//Comapre John's and Mark tips average
if (averageFinder(john.tips) > averageFinder(mark.tips)) {
    console.log("John's Family spend more than Mark's");
} else if (averageFinder(john.tips) < averageFinder(mark.tips)) {
    console.log("Mark;s family spend more than John's");
} else {
    console.log("Both of them spend same Amount...");
}