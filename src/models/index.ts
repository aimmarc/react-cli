import BaseModel from "./base/baseModel";
import * as services from "@/services";

const injectModel = BaseModel.inject(services);

export { injectModel };
