declare module "swiper" {
  import { SwiperModule } from "./types/shared";
  import Swiper from "./types/swiper-class";
  import { SwiperOptions } from "./types/swiper-options";

  declare const A11y: SwiperModule;
  declare const Autoplay: SwiperModule;
  declare const Controller: SwiperModule;
  declare const EffectCoverflow: SwiperModule;
  declare const EffectCube: SwiperModule;
  declare const EffectFade: SwiperModule;
  declare const EffectFlip: SwiperModule;
  declare const EffectCreative: SwiperModule;
  declare const EffectCards: SwiperModule;
  declare const HashNavigation: SwiperModule;
  declare const History: SwiperModule;
  declare const Keyboard: SwiperModule;
  declare const Lazy: SwiperModule;
  declare const Mousewheel: SwiperModule;
  declare const Navigation: SwiperModule;
  declare const Pagination: SwiperModule;
  declare const Parallax: SwiperModule;
  declare const Scrollbar: SwiperModule;
  declare const Thumbs: SwiperModule;
  declare const Virtual: SwiperModule;
  declare const Zoom: SwiperModule;
  declare const FreeMode: SwiperModule;
  declare const Grid: SwiperModule;
  declare const Manipulation: SwiperModule;

  export default Swiper;
  export {
    A11y,
    Autoplay,
    Controller,
    EffectCards,
    EffectCoverflow,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip,
    FreeMode,
    Grid,
    HashNavigation,
    History,
    Keyboard,
    Lazy,
    Manipulation,
    Mousewheel,
    Navigation,
    Pagination,
    Parallax,
    Scrollbar,
    Swiper,
    SwiperOptions,
    Thumbs,
    Virtual,
    Zoom,
  };
}
