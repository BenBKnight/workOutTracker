const app = require("express");
const router = app.Router();

const api = require("./api-routes");
const html = require("./html-routes");


router.use(api);
router.use(html);

module.exports = router;