import { AiOutlineSketch, AiOutlineSend, AiOutlineBlock } from "react-icons/ai";

const priceData = [
  {
    icon: <AiOutlineSend className="icon1" />,
    planName: "Start up mini",
    feature1: "1 Maket Place",
    feature2: "Total 80 SKU's",
    feature3: "3 Months Services",
    price: "10000",
  },
  {
    icon: <AiOutlineBlock className="icon2" />,
    planName: "Start up",
    feature1: "Upto 3 Maket Places",
    feature2: "Total 200 SKU's",
    feature3: "3 Months Services",
    price: "20000",
  },
  {
    icon: <AiOutlineSketch className="icon3" />,
    planName: "Standard",
    feature1: "Upto 5 Maket Places",
    feature2: "Total 700 SKU's",
    feature3: "3 Months Services",
    price: "300000",
  },
  {
    icon: <AiOutlineSend className="icon1" />,
    planName: "Premium",
    feature1: "Upto 8 Maket Places",
    feature2: "Total 1500 SKU's",
    feature3: "3 Months Services",
    price: "400000",
  },
  {
    icon: <AiOutlineBlock className="icon2" />,
    planName: "SEO/SMO",
    feature1: "Global Reach",
    feature2: "Weekly Report",
    feature3: "1 Month Service",
    price: "600000",
  },
  {
      icon:<AiOutlineSketch className="icon3" />,
      planName:"Web Development",
      feature1:"Domain & Hosting",
      feature2:"Custom Design",
      feature3:"Cross-Browser Compatibility ",
      price:"800000"
  }
];

export default priceData;
