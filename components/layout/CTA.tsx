import { Button } from "../ui/button"


const CTA = () => {
  return (
    <section className="bg-[#1E1E1E] text-white py-20 mt-10">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Let’s Build Something
      <span className="text-[#8A7650]"> Exceptional</span>
    </h2>

    <p className="mt-6 text-white/70 max-w-2xl mx-auto">
      Ready to transform your space into a timeless masterpiece?
    </p>

    <div className="mt-10">
      <Button className="bg-[#8A7650] hover:bg-[#6f5f40] transition-all duration-300 px-10 py-4 rounded-xl cursor-pointer font-semibold">
        GET IN TOUCH
      </Button>
    </div>
  </div>
</section>
  )
}

export default CTA