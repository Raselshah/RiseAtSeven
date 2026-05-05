
export default function AnnouncementBar() {
    //  ${mobileMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${hideHeader ? '-translate-y-full' : 'translate-y-0'}
      return (
    <div>
       <div className={` w-full z-50 transition-all duration-500 p-2`}>
        <a href="#" className="group flex justify-center items-center text-xs w-full py-2 px-5 text-balance text-center tracking-tight leading-none font-semibold rounded-2xl transition-all duration-300 hover:rounded-md text-grey-900 bg-mint">
          <span className="block lg:hidden text-[14px]">🚨 Where are your customers actually searching? Download the report</span>
          <div className="hidden lg:block relative overflow-hidden h-4">
            <div className="transition-all duration-300 group-hover:-translate-y-4">🚨 Where are your customers actually searching? Download the report</div>
            <div className="absolute top-0 left-0 translate-y-4 transition-all duration-300 group-hover:translate-y-0">🚨 Where are your customers actually searching? Download the report</div>
          </div>
        </a>
      </div>
    </div>
  )
}
