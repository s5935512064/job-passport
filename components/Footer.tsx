import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const job_location = [
  { id: 1, name: "งาน ใกล้รถไฟฟ้า BTS" },
  { id: 2, name: "งาน ใกล้รถไฟฟ้า MRT" },
  { id: 3, name: "งาน ใกล้สายรถเมล์" },
  { id: 4, name: "หางาน นิคม" },
  { id: 5, name: "หางาน กรุงเทพมหานคร" },
  { id: 6, name: "หางาน พระนครศรีอยุธยา" },
  { id: 7, name: "หางาน นนทบุรี" },
  { id: 8, name: "หางาน เชียงใหม่" },
  { id: 9, name: "หางาน ฉะเชิงเทรา" },
  { id: 10, name: "หางาน ชลบุรี" },
  { id: 11, name: "หางาน ปทุมธานี" },
  { id: 12, name: "หางาน พระนครศรีอยุธยา" },
  { id: 13, name: "หางาน ระยอง" },
  { id: 14, name: "หางาน สมุทรปราการ" },
  { id: 14, name: "หางาน สมุทรสาคร" },
];

const job_type = [
  { id: 1, name: "งาน บุคคล/ฝึกอบรม" },
  { id: 2, name: "งาน การตลาด/ขาย" },
  { id: 3, name: "หางาน บัญชี" },
  { id: 4, name: "งาน อาหาร/เครื่องดื่ม/กุ๊ก/บาร์เทนเดอร์/นักงานเสิร์ฟ" },
  { id: 5, name: "งาน งานบริการลูกค้า - Call Center" },
  { id: 6, name: "งาน ช่างเทคนิค/อิเลคโทรนิค/ซ่อมบำรุง/ช่างพิมพ์" },
  { id: 7, name: "งาน ผลิต/ควบคุมคุณภาพ/โรงงาน" },
  { id: 8, name: "งาน วิศวกร" },
  { id: 9, name: "งาน Part-time/พนักงานชั่วคราว" },
  { id: 10, name: "งาน Freelance" },
  { id: 11, name: "Job Index" },
];

const Footer: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="w-full px-5 md:px-10 xl:px-0 lg:flex justify-center py-5  relative border-t bg-white hidden">
        <div className="max-w-7xl w-full relative gap-4 grid grid-cols-4 ">
          <div className="grid grid-rows-[10] gap-2 grid-cols-2 ">
            <p className="font-bold col-span-2 row-span-1">
              หางานงานตามพื้นที่
            </p>

            {job_location.map((item, index) => (
              <p key={index} className="text-sm">
                {item.name}
              </p>
            ))}
          </div>

          <div className="grid grid-rows-[10] gap-2 grid-cols-2 col-span-2 px-6">
            <p className="font-bold col-span-2 row-span-1">งานตามประเภทงาน</p>

            {job_type.map((item, index) => (
              <p key={index} className="text-sm">
                {item.name}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-bold col-span-2 row-span-1">
                สำหรับผู้สมัครงาน
              </p>

              <p className="text-sm">สมัครสมาชิก / เข้าสู่ระบบ</p>

              <p className="text-sm">ฝากประวัติ</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold col-span-2 row-span-1">สำหรับบริษัท</p>

              <p className="text-sm">ลงประกาศรับสมัครงาน</p>

              <p className="text-sm">อัตราโฆษณา</p>

              <p className="text-sm">ติดต่อเรา</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 md:px-10 xl:px-0 flex flex-col justify-center items-center pt-2 gap-4 relative bg-[#82170F] divide-y divide-[#EEEEDD]">
        <div className="w-full flex justify-center items-center py-3 ">
          <div className="max-w-7xl w-full h-fit relative ">
            <div className="flex justify-between  items-center flex-col md:flex-row gap-2 ">
              <div className="flex items-center gap-2">
                <div className="w-32 relative shrink-0">
                  <Image
                    src="/assets/logo-jobpassport.gif"
                    alt="logo"
                    width={100}
                    height={20}
                  />
                </div>

                <div className="text-white max-w-sm">
                  <p className="text-sm font-bold">
                    บริษัท จ๊อบพาสปอร์ต เอเชีย จำกัด
                  </p>
                  <p className="text-xs">
                    9/33 หมู่ 4 นิคมอุตสาหกรรมอมตะซิตี้ ต.มาบยางพร อ.ปลวกแดง
                    จ.ระยอง 21140 เวลาทำการ : จันทร์-เสาร์ : 08.00 - 17.00 น.
                  </p>
                </div>
              </div>

              <div className="flex  items-center gap-2 justify-end">
                <div className="w-8 relative h-8 ">
                  <Image src="/assets/facebook2.svg" alt="facebook" fill />
                </div>
                <div className="w-8 relative h-8 ">
                  <Image src="/assets/line.svg" alt="line" fill />
                </div>
                <div className="w-8 relative h-8 ">
                  <Image src="/assets/iconmail.svg" alt="iconmail" fill />
                </div>

                <div className="w-8 relative h-8 ">
                  <Image src="/assets/phone.svg" alt="phone" fill />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-4">
          <div className="max-w-7xl w-full h-fit relative ">
            <div className="flex justify-between  items-center flex-col-reverse md:flex-row gap-2">
              <div className="flex items-center text-white text-sm">
                <p>© JOB PASSPORT ASIA CO., LTD. All Rights Reserved.</p>
              </div>

              <div className="flex flex-wrap  items-center gap-2 md:justify-end text-white text-sm">
                <p>นโยบายความเป็นส่วนตัว</p>
                <p>เงื่อนไขการใช้งาน</p>
                <p>นโยบายคุ้กกี้</p>
                <p>แผนที่เว็บไซต์</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
