import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

const footerLinks = [
  {
    href: 'https://www.linkedin.com/in/zac-front-end-developer/',
  },
]

export const ContactSection = () => {
  return  <div className='py-16 pt-12 lg:py-24 lg:pt-20' id='contact'>
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{backgroundImage: `url(${grainImage.src})`}}></div>
        <div className="flex flex-col md:flex-row lg:justify-between gap-8 md:gap-16 items-center">
          <div>
  <h2 className='font-serif text-2xl md:text-3xl'>Get In Contact with Me</h2>
  <p className='text-sm md:text-base mt-2'>Ready to bring your next project to life? Drop me a message on LinkedIn or Instagram</p>
  </div>
  <div>
  {footerLinks.map((link) => (
  <a href={link.href} target="_blank" className='text-white bg-gray-900 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border-gray-900'>
    <span className='font-semibold'>Contact Me</span>
    <ArrowUpRightIcon  className="size-4"/>
    </a>
     ))}
  </div>
    </div>
    </div>
</div>
</div>
 
};
