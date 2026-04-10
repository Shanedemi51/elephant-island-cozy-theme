import Image from "next/image";
import BookingHero from "../BookingHero";

export default function TourSection() {
  return (
    <>
      {/* days */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 px-8">
        {/* day 1 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day1.jpg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Grand Oriental Hotel At Colombo
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 1 - Colombo
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img
                src="/tours/shopping-bag.png"
                className="w-6 shrink-0"
                alt=""
              />

              <p className="text-lg font-semibold text-center leading-snug">
                Shopping And Sightseeing In
                <br />
                Colombo
              </p>
            </div>

            <p className="text-center text-sm">
              One Galle Face | Colombo City Centre | Barefoot Gallery | Galle
              Face Hotel
            </p>

            <p className="italic mt-6 text-sm text-center">
              Activities Dependent On Arrival Flight Times
            </p>
          </div>
        </div>

        {/* day 2 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day2.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Millennium Elephant Foundation
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 2 - Sigiriya
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/elephant.jpg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Pinnawala Elephant <br /> Orphanage
              </p>
            </div>

            <p className="text-center text-sm">
              Elephants Bathing In The River | Baby Elephants Feeding | Bathe
              With Elephants At The Millennium Elephant Foundation
            </p>
          </div>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/budda.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Golden Cave Temple <br /> At Dambulla
              </p>
            </div>

            <p className="text-center text-sm">
              Sri Lanka’s Artistic Masterpiece | 5 Ancient Cave Temples | 23 000
              Sq Feet Of Murals And 115 Buddha Statues.
            </p>
          </div>
        </div>

        {/* day 3 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day3.jpeg"
              alt="Castlereigh Lake At Hatton"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Sigiriya View From Pidurangala
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 3 - Sigiriya
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/mountain.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Sigiriya Rock Fortress
              </p>
            </div>

            <p className="text-center text-sm">
              Famous Sigiriya Frescoes | Lion’s Paws Entrance To Summit | Water
              Gardens At The base | Ruins Of A Palace At The Top | One Of The
              Great Wonders Of The Ancient World!
            </p>
          </div>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/train.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Medieval Capital <br /> Of Polonnaruwa
              </p>
            </div>

            <p className="text-center text-sm">
              The Island’s Capital Between 1017 AD -1235 AD | Beautiful Stupa’s
              | Gal Vihara Sculptures | The Vast Parakrama Lake
            </p>
          </div>
        </div>

        {/* day 4 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day4.jpeg"
              alt="Coconut Tree Hill At Mirissa"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            The Queens Hotel Kandy
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 4 - Kandy
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/dancer.jpg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Old Royal Capital <br /> Of Kandy
              </p>
            </div>

            <p className="text-center text-sm">
              UNESCO World Heritage Old Town | Kandy Viewpoint | Temple Of The
              Tooth Evening Pooja | Kandyan Cultural Dance
            </p>
          </div>

          {/* point 2*/}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/flower.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                Peradeniya Gardens
              </p>
            </div>

            <p className="text-center text-sm">
              Amazing Orchid Houses | The Royal Palm Avenue | The World’s
              Fastest Growing Bamboos!
            </p>
          </div>
        </div>

        {/* day 5 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day5.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            View From Little Adams Peak At Ella
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 5 - Ella
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/island.png" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                By Train Through The Hill Country
              </p>
            </div>

            <p className="text-center text-sm">
              Ascent Of The Ramboda Pass Via Hairpin Bends | The Old British
              Hill Station Of Nuwara Eliya | 1st Class Seat On The Hill Country
              Express
            </p>
          </div>

          {/* point 2*/}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/morning.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Pretty Village <br /> Of Ella
              </p>
            </div>

            <p className="text-center text-sm">
              9 Arch Railway Bridge I Little Adam’s Peak Viewpoint I Beautiful
              Views Of The Lowlands From Ella Gap
            </p>
          </div>
        </div>

        {/* day 6 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day6.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Leopard At Yala National Park
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 6 - Yala National Park
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/tiger.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                Yala National Park
              </p>
            </div>

            <p className="text-center text-sm">
              Exclusive PM Jeep Safari | Wild Tusker Elephants | Sloth Bears |
              Crocodiles | Flamingoes | The Best Location In The World To See
              Leopards In The Wild!
            </p>
          </div>
        </div>

        {/* day 7 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day7.jpg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Dutch Warehouse Inside Galle Fort
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 7 - Galle
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/lighthouse.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Old Dutch Fort Of Galle
              </p>
            </div>

            <p className="text-center text-sm">
              UNESCO World Heritage Old Town | World Class Shopping | Fabulous
              Dining At Restaurants | Unawatuna Beach | The Best Preserved
              Colonial Town In The Whole Of Asia!
            </p>
          </div>
        </div>

        {/* day 8 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/day8.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Radisson Blu Hotel At Galle
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 8 – To Airport Or Beach Hotel
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/plane.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                Drop Off At Colombo Airport Or Your Beach Hotel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cost card */}
      <section
        className="bg-cover bg-center flex items-center justify-end p-6 lg:p-20 mb-12"
        style={{
          backgroundImage: "url('/tours/complete/galle.jpg')",
        }}
      >
        {/* cost card */}
        <div className="max-w-lg bg-white border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/complete/cost.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Day Title */}
          <h2 className="mt-4 text-left text-2xl font-marcellus font-bold tracking-wide">
            Complete Tour Of Sri Lanka
          </h2>

          {/* points */}
          <div className="mb-4">
            {/* title */}
            <div className="mt-2 text-lg font-semibold">
              <span>Cost Per Person (2026)</span>
            </div>

            <ul className="mt-2 text-sm">
              <li>Budget : From USD 1158</li>
              <li>3 Star : From USD 1232</li>
              <li>4 Star : From USD 1338</li>
              <li>Luxury : From USD 1538</li>
            </ul>

            <div>
              <h6 className="text-lg font-semibold mt-4">What is Included?</h6>
              <p className="text-sm">
                Arrival Pick Up From Colombo Airport. Tour Of Sri Lanka In A/C
                Car Or Van With Tourist Board Approved Driver-Guide. Fluent
                English Speaking Guide At All Attractions. Featured Hotels On
                Room And Breakfast Basis. Return Transfers To Colombo Airport.
              </p>
            </div>

            <div>
              <h6 className="text-lg font-semibold mt-4">
                What is not Included?
              </h6>
              <p className="text-sm">
                Entrance Fees To Attractions And National Parks.
              </p>
            </div>
          </div>


          <img src="/map/6.png" className="w-full" alt="" />
        </div>
      </section>

      <BookingHero backgroundImage="/road.jpg" />
    </>
  );
}
