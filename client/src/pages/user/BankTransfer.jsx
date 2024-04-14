import Header from "../user/common/Header";
import Footer from "../user/common/Footer";

import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { useDispatch } from "react-redux";

import { clearCart } from "../../redux/actions/cartActions";

function BankTransfer() {
    const dispatch = useDispatch();

    const clearCartForBankTransfer = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <Header />
                <div className="cart w-full h-auto">
                    <div className="cart-title w-full bg-backgroundLightGray py-[38px] flex justify-between items-center">
                        <div className="w-[1280px] m-auto flex justify-between items-center">
                            <div className="w-full h-[410px] bg-backgroundLightGray flex justify-center items-center">
                                
                                <div className="text-[20px] text-textBlack font-medium">
                                    <div style={{marginBottom: "10px"}}>
                                        <img style={{margin: "auto"}} src={"/src/assets/images/QR-code.jpg"} width={400} height={400}></img>
                                    </div>
                                    Sau khi chuyển tiền, bạn vui lòng đợi người bán kiểm tra và chuẩn bị hàng giao tới bạn nhé. Xin cảm ơn!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div style={{width: "300px", margin: "auto", marginTop: "5px", marginBottom: "5px"}} 
                className="return-to-shopping bg-lineGray hover:bg-[#c5c5c5] transition px-[18px] py-[11px] rounded-[5px]">
                <Link
                    to="/"
                    className="w-full h-full text-[14px] text-textBlack font-normal flex justify-center items-center gap-2"
                    onClick={clearCartForBankTransfer}
                >
                    <ArrowLeft size={18} />
                    Trở về trang chủ
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default BankTransfer;