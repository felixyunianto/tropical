import React from "react";
import { DoPaymentImage, FillFormImage, OrderProcessingImage, OrderReceivedImage, OrderSendingImage, StockCheckingImage } from "../../assets";

const BuyFlow = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 bg-white gap-[10px]">
      <div className="text-[24px] font-bold">Cara Pembelian</div>
      <div className="w-8/12 flex flex-col items-center gap-6">
        <div className="grid grid-cols-3 justify-between w-full">
          <div className="w-full flex flex-col items-center px-[38px] py-[10px] gap-4 h-[144px]">
            <div className="">
              <img src={StockCheckingImage} alt="" className="h-[90px]"/>
            </div>
            <div className="">Pengecekan stock</div>
          </div>
          <div className="w-full flex flex-col items-center px-[38px] py-[10px] gap-4 h-[144px]">
            <div className="">
              <img src={FillFormImage} alt="" className="h-[90px]"/>
            </div>
            <div className="">Isi Form Pembelian</div>
          </div>
          <div className="w-full flex flex-col items-center px-[38px] py-[10px] gap-4 h-[144px]">
            <div className="">
              <img src={DoPaymentImage} alt="" className="h-[90px]"/>
            </div>
            <div className="">Melakukan Pembayaran</div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-between w-full">
          <div className="w-full flex flex-col items-center px-[38px] py-[10px] gap-4 h-[144px]">
            <div className="">
              <img src={OrderProcessingImage} alt="" className="h-[90px]"/>
            </div>
            <div className="">Pesanan diproses</div>
          </div>
          <div className="w-full flex flex-col items-center px-[38px] py-[10px] gap-4 h-[144px]">
            <div className="">
              <img src={OrderSendingImage} alt="" className="h-[90px]"/>
            </div>
            <div className="">Barang dikirim</div>
          </div>
          <div className="w-full flex flex-col items-center px-[38px] py-[10px] gap-4 h-[144px]">
            <div className="">
              <img src={OrderReceivedImage} alt="" className="h-[90px]"/>
            </div>
            <div className="">Barang diterima</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyFlow;
