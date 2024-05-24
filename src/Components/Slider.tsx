import tsushima_napr from "../assets/img/tsushima_napr.jpg";

export default function Slider() {
  return (
    <div className="grid  grid-cols-10 ">
      <div className="bg-gradient-to-r from-[#2E2B44]/100 from-40% via-[#2E2B44]/50 via-60% to-transparent to-70% flex-auto z-50 "></div>
      <div className="col-span-9">
      <img src={tsushima_napr} alt="" className=" z-0" />
      </div>
    </div>
  );
}
