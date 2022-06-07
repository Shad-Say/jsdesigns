const holder: object = {
  from: "Pune",
  to: "Mumbai",
  weight: 1.56,
};
function Fedex() {
  this.calculate = (holder: object) => {
    //some calculations
    return 2.45;
  };
}
function UPS() {
  this.calculate = (holder: object) => {
    //some calculations
    return 1.56;
  };
}
function USPS() {
  this.calculate = (holder: object) => {
    //some calculations
    return 4.5;
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = (company: string) => {
    this.company = company;
  };
  this.calculate = (holder: object) => {
    return this.company.calculate(holder);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

fedex.calculate(holder);
ups.calculate(holder);
usps.calculate(holder);

const shipping = new Shipping();
shipping.setStrategy(fedex);
shipping.setStrategy(usps);
shipping.setStrategy(ups);
console.log(
  `FEDEX: ${fedex.calculate(holder)} , UPS: ${ups.calculate(
    holder
  )} , USPS: ${usps.calculate(holder)}  `
);
