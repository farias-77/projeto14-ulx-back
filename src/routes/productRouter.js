import { Router } from "express";

import { creation,cart,cartdelete,historic,YourProduct} from "../controllers/productController.js";
import creationValidation  from "../middlewares/creationValidation.js";
import cartValidation  from "../middlewares/cartValidation.js";

const  productRouter= Router();

productRouter.post("/creation", creationValidation ,creation);
productRouter.post("/cart",cart);
productRouter.post("/YourProduct",YourProduct);
productRouter.post("/historic",historic);
productRouter.post("/cartdelete",cartdelete);
export default productRouter;