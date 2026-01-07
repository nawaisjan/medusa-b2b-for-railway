
import SideMenu from "./side-menu"
import HeroBanner from "./hero-banner"

const Hero = () => {
  return (
    <div className="hero-section py-2 bg-white">
      <div className="content-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-3">
            <SideMenu />
          </div>
          <div className="col-span-1 md:col-span-12 lg:col-span-9">
            <HeroBanner />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
