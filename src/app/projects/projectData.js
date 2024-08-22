import img1 from "./images/PostMedia.png";
import img2 from "./images/TradeGen.png";
import img3 from "./images/SwiftCart.png";
const projectDataArray = [
  {
    name: "PostMedia",
    mainDescription: "Built sample backend routes for a social media app",
    description: [
      "Secure registration and login/logout of user",
      "User can create/upload a post(can be Image or Video)",
      "User can Like and Comment on posts of other accounts",
    ],
    img: img1,
    link: "https://github.com/JrRahul18/user-registration-validation-nodejs"
  },
  {
    name: "TradeGen",
    mainDescription:
      "Developed a sample static website related to Stock Exchange App",
    description: [
      "Built a responsive website for commercial use",
      "Used react hooks for responsive rendering of data",
      "Also explored various third party libraries and APIs to fetch data",
    ],
    img: img2,
    link: "https://github.com/JrRahul18/tradegen-website"
  },
  {
    name: "SwiftCart Hub",
    mainDescription: "FullStack Ecommerce Website for buying and selling products",
    description: [
      "Browse a wide range of productswith category filtering ( ex. price, search keywords, product category and ratings)",
      "Developed all functionalities like Cart, Order, User Authentication",
      "Admin dashboard for product, order, and user management",
    ],
    img:img3,
    link: "https://github.com/JrRahul18/SwiftCart-Hub"
  },
];

export default projectDataArray;
