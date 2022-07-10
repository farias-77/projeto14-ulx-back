import { Router } from "express";

import { creation,cart,cartdelete,historic,YourProduct} from "../controllers/cartproductController.js";
import creationValidation  from "../middlewares/creationValidation.js";
import cartValidation  from "../middlewares/cartValidation.js";

const  cartproductRouter= Router();

cartproductRouter.post("/creation", creationValidation ,creation);
cartproductRouter.post("/cart",cart);
cartproductRouter.post("/YourProduct",YourProduct);
cartproductRouter.post("/historic",historic);
cartproductRouter.post("/cartdelete",cartdelete);
export default cartproductRouter;