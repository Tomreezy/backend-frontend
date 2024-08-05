const express = require("express")
const router = express.Router()
const{getAllUpdates,
    getOneUpdate,
    createUpdate,
    deleteOneUpdate,
    patchOneUpdate}=require("../controllers/updates")



router.route("/").get(getAllUpdates).post(createUpdate)
router.route("/:id").get(getOneUpdate).delete(deleteOneUpdate).patch(patchOneUpdate)


module.exports=router