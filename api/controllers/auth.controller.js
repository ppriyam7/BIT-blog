import { createRequire } from "module";
const require = createRequire(import.meta.url);
export const signup = async (req, res) => {
  console.log(req.body);
};
