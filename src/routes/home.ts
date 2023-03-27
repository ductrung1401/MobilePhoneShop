import { Router, Request, Response } from 'express';



const router:Router=Router()

router.get("/",(req:Request,res:Response)=>{
    res.render("index")
})
router.get("/register",(req:Request,res:Response)=>{
    res.render("register")
})
router.get("/logout",(req:Request,res:Response)=>{
    res.clearCookie("token")
    res.redirect('/')
})
export default router