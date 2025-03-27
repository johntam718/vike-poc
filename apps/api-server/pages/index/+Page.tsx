import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FeaturesSection } from "@/pages/index/features-section";
import { m } from "@/paraglide/messages";
import { getLocale, locales, setLocale } from "@/paraglide/runtime";

export default function Page() {

  return (
    <>
      <FeaturesSection />
      {/* {m.example_message({ username: "Johns" })} */}
      <div className="flex flex-col items-center">

        {m.username()}
        <div>
          {getLocale()}
        </div>
        <Button onClick={() => {
          setLocale(locales[1])
          // reload
        }} className="mt-20">
          Chinese
        </Button>
        <Button onClick={() => {
          setLocale(locales[0])
        }} className="mt-20">
          English
        </Button>
      </div>
      <Footer />
    </>
  );
}
