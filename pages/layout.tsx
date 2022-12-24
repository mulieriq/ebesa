import Homepage from "../pages/homepage";
import TopNav from "../components/TopNav";
import Postcard from "../components/Postcard";
import Drawer from "../components/Drawer";
import BottomNav from "../components/BottomNav";

import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div class="h-screen overflow-auto bg-cover bg-no-repeat bg-fixed bg-center bg-[url('https://engineering.nyu.edu/sites/default/files/styles/content_header_1024_2x/public/2018-03/program-environmental-eng.jpg?h=e1d1bc8a&itok=7i1dM4rc')]">
        <div class="block fixed left-0 top-0 inset-x-0 z-50 md:hidden">
          <TopNav />
        </div>
        <div class="w-full h-full flex inline-flex gap-4">
          <div class="hidden md:flex ">
            <Drawer />
          </div>
          <div class="w-full h-auto overflow-auto grid place-content-center pt-20 pb-20 md:pt-0">
            <div class="justify-center p-6 overflow-auto">{children}</div>
          </div>
        </div>
        <div class="block fixed left-0 bottom-0 inset-x-0 z-50 md:hidden">
          <BottomNav />
        </div>
      </div>
    </>
  );
}