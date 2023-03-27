import express, {Request,Response,NextFunction,Application, Router} from "express"


const router: Router =express.Router()

router.get("/", (req: Request, res: Response) => {
        res.render("login")
})



export default router