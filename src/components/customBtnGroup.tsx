import type { CustomButtonType } from "@/types/customBtnGroup.type"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useLocation, useNavigate, type To } from "react-router"

export function CustomButtonGroup({ buttonOptions, grpClassName, btnClass }: 
    { buttonOptions: CustomButtonType[], grpClassName: string, btnClass: string })
    {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const handleClick = (navigateTo: To|undefined) => {
        navigate(navigateTo ?? location)
    }
    return (
        <div className={grpClassName}>
        {
            buttonOptions.map(
                button => {
                    return (
                        
                        <Button className={`${btnClass} relative inline-flex`} key={button.id} onClick={() =>handleClick(button.navigateTo)}>
                            { button.btnIcon && <button.btnIcon /> }
                            { button.btnLabel && button.btnLabel }
                        

                        {
                            button.badgeContent && 
                            <Badge className={`absolute w-2 h-4 rounded-full -top-2 -right-2`}
                            style={{backgroundColor: button.badgeFillColor, color: button.badgeTextColor}}
                            >
                                {button.badgeContent}
                            </Badge>
                        }
                        
                        </Button>
                    )
                }
            )
        }
        </div>
    )
}