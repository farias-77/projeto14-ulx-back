import { Router } from "express";

import { creation,cart,cartdelete,historic,YourProduct,addCart, yourdelete,creationHistoric} from "../controllers/cartproductController.js";
import creationValidation  from "../middlewares/creationValidation.js";
import cartValidation  from "../middlewares/cartValidation.js";

const  cartproductRouter= Router();

cartproductRouter.post("/creation", creationValidation ,creation);
cartproductRouter.post("/cart",cart);
cartproductRouter.post("/YourProduct",YourProduct);
cartproductRouter.post("/historic",historic);
cartproductRouter.post("/creationHistoric",creationHistoric);
cartproductRouter.post("/cartdelete",cartdelete);
cartproductRouter.post("/yourdelete",yourdelete);
cartproductRouter.post("/addCart",addCart);

export default cartproductRouter;