import React from "react";

const Footer = () => {

  const chatToWhatsApp = () => {
    let url = `https://api.whatsapp.com/send?phone=6281334091665`;

    let message = `Halo min, \nSaya pengin konsultasi nih`;

    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  };

  return (
    <div className="w-full flex justify-center items-center bg-[#F6F6F6]">
      <div className="w-full md:grid md:grid-cols-2 gap-[10px] bg-[#F6F6F6] py-[60px] max-w-[1366px]">
        <div className="py-[10px] px-8 md:pl-[90px] flex flex-col gap-4">
          <div className="text-2xl font-bold">Tropical</div>
          <div className="text-sm">
            Furniture Custom HPL / Duco, Sofa & Design Interior
          </div>
          <div className="text-sm font-bold">Ada Kendala ?</div>
          <div className="">
            <button className="rounded-lg bg-[#EBC386] px-4 py-1.5 font-bold text-[12px]" onClick={() => chatToWhatsApp()}>
              Hubungi CS Kami
            </button>
          </div>
        </div>
        <div className="py-[10px] md:grid md:grid-cols-2 gap-[10px] px-8">
          <div className="flex flex-col gap-[10px] md:px-[10px] mt-4 md:mt-0">
            <div className="text-[18px] font-bold">Alamat Kami</div>
            <p className="text-">
              Jalan Dirgantara 3 Blok B2/17, Kecamatan Kedungkandang, Kelurahan
              lesanpuro, Kota Malang, 65138
            </p>
          </div>
          <div className="flex flex-col gap-[10px] md:px-[10px] mt-6 md:mt-0">
            <div className="text-[18px] font-bold">Sosial Media</div>
            <a className="cursor-pointer hover:text-[#FF6A61]" rel="noreferrer" href="https://www.instagram.com/tropical.furniture/" target="_blank"><p className="text-justify">Instagram</p></a>
            <a className="cursor-pointer hover:text-[#FF6A61]" rel="noreferrer" href="https://www.facebook.com/Tropicalfurnitureofficial/" target="_blank"><p className="text-justify">Facebook</p></a>
            <a className="cursor-pointer hover:text-[#FF6A61]" rel="noreferrer" href="mailto:zeniamerritya@gmail.com" target="_blank"><p className="text-justify">Email</p></a>
            {/* <p className="text-justify">Facebook</p>
            <p className="text-justify">Email</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
