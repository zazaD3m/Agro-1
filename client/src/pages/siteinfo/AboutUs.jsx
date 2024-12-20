const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/8.jpg')",
      }}
      className="relative w-full animate-fadeIn bg-cover bg-center text-white opacity-0 delay-200 duration-500 fill-mode-forwards"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 bg-gradient-to-t from-transparent via-transparent to-black/35" />
      <div className="relative px-2">
        <section className="flex flex-col items-center gap-4 pt-12 2xl:pt-32">
          <h1 className="aboutUsShowText text-3xl font-medium !delay-500 !duration-500 sm:text-4xl 2xl:text-5xl">
            ჩვენ შესახებ
          </h1>
          <p className="aboutUsShowText max-w-xl text-pretty text-center text-sm font-medium leading-6 !delay-1000 !duration-500 sm:text-base lg:max-w-3xl 2xl:leading-7">
            &quot;აგროეზო&quot; არის ინოვაციური ონლაინ პლატფორმა, რომელიც მიზნად
            ისახავს სოფლის მეურნეობასთან დაკავშირებული პროდუქციისა და სერვისების
            ხელმისაწვდომობას. ჩვენი მიზანია გავაძლიეროთ სოფლის მეურნეობა და
            შევქმნათ სიმბიოზური კავშირი სოფლიდან ქალაქში. ჩვენი პლატფორმა
            საშუალებას აძლევს გამყიდველებს და მყიდველებს პირდაპირ დაუკავშირდნენ
            ერთმანეთს, რაც ამარტივებს პროცესს და ზრდის ეკონომიკურ სარგებელს.
          </p>
        </section>
        <section className="flex flex-col items-center gap-4 pt-8">
          <h1 className="aboutUsShowText !delay-1500 text-3xl font-medium !duration-500 sm:text-4xl 2xl:text-5xl">
            ჩვენი ხედვა
          </h1>
          <p className="aboutUsShowText !delay-2000 max-w-xl text-pretty text-center text-sm font-medium leading-6 opacity-0 !duration-500 sm:text-base lg:max-w-3xl 2xl:leading-8">
            ჩვენი პლატფორმა უნდა გახდეს სივრცე, სადაც ნებისმიერი ფერმერი
            მარტივად შეძლებს საკუთარი პროდუქტის რეალიზაციას.
          </p>
        </section>
        <section className="flex flex-col items-center gap-4 pb-32 pt-8">
          <h1 className="aboutUsShowText font-mediumi !delay-2500 text-3xl font-medium !duration-500 2xl:text-5xl">
            ჩვენი მისია
          </h1>
          <p className="aboutUsShowText max-w-xl text-pretty text-center text-sm font-medium leading-6 opacity-0 !delay-3000 !duration-500 sm:text-base lg:max-w-3xl 2xl:leading-8">
            &quot;აგროეზო&quot; ონლაინ პლატფორმა სოფლის მეურნეობასთან
            დაკავშირებული პროდუქციისა და სერვისებისთვის, რომელიც გამყიდველებს და
            პოტენციურ მყიდველებს საშუალებას აძლევს, პირდაპირ დაუკავშირდნენ
            ერთმანეთს.
          </p>
        </section>
      </div>
    </div>
  );
};
export default AboutUs;
