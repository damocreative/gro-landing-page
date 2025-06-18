"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function ClientStoriesCarousel() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-white mb-12">Real Stories from the Ground</h2>
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        modules={[Autoplay, Pagination]}
        className="client-carousel"
      >
        <SwiperSlide>
          <div className="bg-white/95 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <blockquote className="italic bg-[#f1f6fb] p-6 border-l-4 border-yellow-400 mb-6 text-gray-900">
              “We came in thinking we just needed a quick portal check. Instead, we discovered quota mismatches, two ex-employees still active, and salary data falling out of sync. TASC fixed it all — within a week.”
            </blockquote>
            <p className="text-gray-700"><strong className="text-blue-900">Fixing What Wasn't Seen</strong><br />
              An IT firm with 250+ staff came to us for a simple portal check. What we uncovered was anything but simple: their visa quota wasn't showing correctly, two offboarded employees were still active, and salaries weren't syncing across systems. Had this gone unnoticed, they'd have faced hiring blocks and compliance red flags. Within a week, we cleaned it all up, corrected the quota, aligned payroll records, and cleared the ghost employees. Smooth sailing since.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white/95 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <blockquote className="italic bg-[#f1f6fb] p-6 border-l-4 border-yellow-400 mb-6 text-gray-900">
              “Our CR renewal was blocked without warning. It turned out to be a formatting issue in our documents. TASC fixed it in time — and saved our license.”
            </blockquote>
            <p className="text-gray-700"><strong className="text-blue-900">One Step from Deregistration</strong><br />
              A construction company's CR renewal was unexpectedly blocked. They assumed it was routine but it wasn't. Their amended Articles of Association didn't match the required online template, causing the system to reject the update. With the company days away from deregistration, we stepped in, coordinated with the SBC, reformatted the AOA, and resolved the issue just in time. The renewal went through and the business stayed intact.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white/95 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <blockquote className="italic bg-[#f1f6fb] p-6 border-l-4 border-yellow-400 mb-6 text-gray-900">
              “Our iqamas weren't renewing. No one knew why. TASC found the root issue — and helped us turn it around in under a month.”
            </blockquote>
            <p className="text-gray-700"><strong className="text-blue-900">Saving Iqamas, Saving Operations</strong><br />
              A major retail chain hit a wall: iqamas weren't renewing, and nobody knew why. Turns out, they'd slipped below the Saudization threshold. We quickly built a hiring plan with their team, onboarded the required Saudi staff in 10 days, and updated all records. Within 24 days, iqama renewals were back on track and business didn't skip a beat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
} 