import React, { useState } from "react";
import { HeroImage } from "../../assets";

const Consultation = () => {
  const [tab, setTab] = useState(0);

  const chatToWhatsAppMaterial = () => {
    let url = `https://api.whatsapp.com/send?phone=6281334091665`;

    let message = `KONSULTASI - Hai admin mau tanya dong bahan dan jenis sofa di tropical furniture`;

    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  };

  const chatToWhatsAppCategory = () => {
    let url = `https://api.whatsapp.com/send?phone=6281334091665`;

    let message = `KONSULTASI - Hai admin mau tanya dong Kategori produk apa saja di tropical furniture?`;

    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  };

  const chatToWhatsAppCustomProduct = () => {
    let url = `https://api.whatsapp.com/send?phone=6281334091665`;

    let message = `KONSULTASI - Hai admin mau tanya dong apa bisa custom produk di tropical furniture?`;

    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  };

  return (
    <div
      className="w-full pt-6 pb-[46px] flex justify-center items-center px-7 lg:px-[90px]"
      id="konsultasi"
    >
      <div className="w-full max-w-[1366px] lg:px-[90px] flex justify-start items-center min-h-[400px] h-auto md:h-[400px] ">
        <div
          className="w-full rounded-lg relative p-4 md:p-6 lg:p-8 overflow-hidden min-h-[400px] h-full bg-white "
          style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex flex-col gap-6 h-full flex-1  overflow-hidden">
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold">
              Konsultasi dengan kami
            </h1>
            <div className="w-full z-[1] flex flex-col items-start flex-1 h-full">
              <ul className="flex lg:w-full lg:grid lg:gap-2 lg:grid-cols-3 overflow-y-scroll text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 scrollbar-hide">
                <li
                  className="mr-2 cursor-pointer w-full"
                  onClick={() => setTab(0)}
                >
                  <span
                    className={`inline-flex w-48 md:w-52 lg:w-full justify-center text-xs lg:text-sm bg-gray-100 rounded-t-lg p-2 h-fit ${
                      tab === 0
                        ? "text-black bg-gray-100 active"
                        : "hover:text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Tanya bahan & Jenis Sofa
                  </span>
                </li>
                <li
                  className="mr-2 cursor-pointer w-full"
                  onClick={() => setTab(1)}
                >
                  <span
                    className={`inline-flex w-48 md:w-52 lg:w-full justify-center text-xs lg:text-sm bg-gray-100 rounded-t-lg p-2 h-fit ${
                      tab === 1
                        ? "text-black bg-gray-100 active"
                        : "hover:text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Kategori Produk ISIRUMAH
                  </span>
                </li>
                <li
                  className="mr-2 cursor-pointer w-full"
                  onClick={() => setTab(2)}
                >
                  <span
                    className={`inline-flex w-48 md:w-52 lg:w-full justify-center text-xs lg:text-sm bg-gray-100 rounded-t-lg p-2 h-fit ${
                      tab === 2
                        ? "text-black bg-gray-100 active"
                        : "hover:text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Bisa Custom Produk?
                  </span>
                </li>
              </ul>

              {tab === 0 && (
                <div className="w-full flex-1 flex flex-col p-2 bg-white">
                  <span className="text-sm">Bahan Sofa dari kami</span>
                  <ul className="list-decimal pt-4">
                    <li className="text-xs ml-4">
                      kerangka kayu sofa menggunakan kayu meranti, yg bersifat
                      anti rayap, anti bau dan anti lapuk
                    </li>
                    <li className="text-xs ml-4">
                      Bahan lapisan sofa (upsholtery) bisa di custom sesuai
                      selera dan kebutuhan, ada bahan Polyester yang tidak mudah
                      kusut dan tidak mudah sobek, Rayon yang lembut dan tahan
                      lama, Linen yang kuat dan tidak mudah pudar, Velvet
                      memiliki tekstur yang halus dan mengkilat
                    </li>
                    <li className="text-xs ml-4">
                      Untuk dudukan dan sandaran Sofa Tropical memilih Royal
                      foam yang memiliki tingkat density yang tinggi, sehingga
                      Anda pun nyaman berlama-lama duduk atau rebahan setelah
                      seharian beraktifitas.
                    </li>
                  </ul>
                  <div className="">
                    <button
                      className="text-white bg-[#FF6A61] rounded-lg px-3 py-2 font-bold text-xs mt-6"
                      onClick={() => chatToWhatsAppMaterial()}
                    >
                      Chat Admin
                    </button>
                  </div>
                </div>
              )}

              {tab === 1 && (
                <div className="w-full flex-1 flex flex-col p-2 bg-white">
                  <span className="text-sm">Kategori yang kami tawarkan</span>
                  <ul className="list-decimal pt-4">
                    <li className="text-xs ml-4">
                      Sofa ( Sofabed, Sofa L, Sofa 2 Seater, Stool, Sofa 3
                      seater, Sofa Custom )
                    </li>
                    <li className="text-xs ml-4">
                      Rak & Penyimpanan ( Rak buku&Rak Display, Meja TV,
                      Credenza, Rak sepatu, Rak dinding & Ambalan)
                    </li>
                    <li className="text-xs ml-4">
                      Kasur ( Merk Elite, Falcon, Tote Bed, Busa Royal )
                    </li>
                    <li className="text-xs ml-4">
                      Kabinet dapur & kitchen set
                    </li>
                    <li className="text-xs ml-4">
                      Lemari Pakaian ( Lemari 2 Pintu, Lemari 3 Pintu, Lemari
                      Laci, Meja Rias )
                    </li>
                    <li className="text-xs ml-4">
                      Penyimpanan kantor ( Lemari Kantor, Meja & Kursi Kantor,
                      Kabinet Kantor, Meja Kerja, Kursi Tunggu )
                    </li>
                    <li className="text-xs ml-4">Meja & Kursi Makan</li>
                    <li className="text-xs ml-4">Meja tamu & Nakas</li>
                  </ul>

                  <div className="">
                    <button
                      className="text-white bg-[#FF6A61] rounded-lg px-3 py-2 font-bold text-xs mt-6"
                      onClick={() => chatToWhatsAppCategory()}
                    >
                      Chat Admin
                    </button>
                  </div>
                </div>
              )}

              {tab === 2 && (
                <div className="w-full flex-1 flex flex-col p-2 bg-white">
                  <span className="text-sm">Bisa custom</span>
                  <p className="pt-4 text-xs">
                    Bisa banget, kalian ngga akan kesulitan untuk memilih ukuran
                    sesuai ukuran ruangan rumah anda dan jenis bahan produk
                    furniture di isirumah
                  </p>
                  <div className="">
                    <button
                      className="text-white bg-[#FF6A61] rounded-lg px-3 py-2 font-bold text-xs mt-6"
                      onClick={() => chatToWhatsAppCustomProduct()}
                    >
                      Chat Admin
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="absolute rounded-full w-[268px] hidden md:flex  md:w-[368px] md:h-[368px] bg-[#EBC386] -bottom-1/4 -right-24  justify-center items-center">
            <img src={HeroImage} alt="" width="295" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
