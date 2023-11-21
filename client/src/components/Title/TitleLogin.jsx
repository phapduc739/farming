import { Link } from "react-router-dom"
export default function TitleSignUp() {
    return (<>
        <section className="">
            <div className=" w-[100%] h-auto bg-slate-200 z-10">
                <div className="w-[1280px] h-full m-auto flex justify-between items-center py-[32px] text-textDark">

                    <div className="z-10 "><h2 className="font-bold text-[24px]">Đăng nhập</h2></div>


                    <ol className="flex gap-x-[8px] font-medium text-[14px] ">
                        <li>
                            <Link to="/home"> <i className="fa-solid fa-house text-[14px]"></i></Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right "></i>
                        </li>
                        <li>
                            <h4 className="" >Đăng nhập</h4>
                        </li>
                    </ol>

                </div>
            </div>
        </section >
    </>)
}