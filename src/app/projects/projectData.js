import img1 from "./images/PostMedia.png";
import img2 from "./images/TradeGen.png";
import img3 from "./images/SwiftCart.png";
const projectDataArray = [
  {
    name: "PostMedia",
    mainDescription: "Built sample backend routes for a social media app",
    description: [
      "Secure registration and login/logout of user",
      "User can upload a post",
      "Another users can also like the post and can comment on the post",
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
    name: "SwiftCart",
    mainDescription: "Ecommerce Website for buying and selling products",
    description: [
      "Deeloped both backend and frontend for the website",
      "Admin can upload and sell the products and users can buy it",
      "Developed all functionalities like cart, order, user authentication and others",
    ],
    img:img3,
    link: "/"
  },
];

export default projectDataArray;
