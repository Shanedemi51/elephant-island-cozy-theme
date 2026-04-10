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
              src="/tours/hillcountry/day1.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Beira Lake Pavilion At Colombo
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
              src="/tours/hillcountry/day2.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Temple Of The Tooth
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 2 - Kandy
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/elephant.jpg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Pinnawala Elephant <br />
                Orphanage
              </p>
            </div>

            <p className="text-center text-sm">
              Elephants Bathing In The River I Baby Elephants Feeding I Bathe
              With Elephants At The Millennium Elephant Foundation
            </p>
          </div>

          {/* point 2*/}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/dancer.jpg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Old Royal Capital <br /> Of Kandy
              </p>
            </div>

            <p className="text-center text-sm">
              UNESCO Heritage Old Town I Kandy Viewpoint Temple Of The Tooth
              Evening Pooja I Kandyan Cultural Dance
            </p>
          </div>

          {/* point 3 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/flower.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                Peradeniya Gardens
              </p>
            </div>

            <p className="text-center text-sm">
              Amazing Orchid Houses I The Royal Palm Avenue I The World’s
              Fastest Growing Bamboos!
            </p>
          </div>
        </div>

        {/* day 3 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/hillcountry/day3.jpeg"
              alt="Castlereigh Lake At Hatton"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Castlereigh Lake At Hatton
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 3 - Nuwara Eliya
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/train.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                By Road Or Train To <br /> The Hill Country
              </p>
            </div>

            <p className="text-center text-sm">
              1st Class Seat On The Hill Country Express Or Ascent Of The
              Ramboda Pass Via Hairpin Bends
            </p>
          </div>

          {/* point 2*/}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/morning.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The British Hill Station Of <br /> Nuwara Eliya
              </p>
            </div>

            <p className="text-center text-sm">
              Gregory Lake | Tea Estate And Factory Visit Tea At The Grand Hotel
              | The Hill Club One Of The World’s Most Beautiful Golf Courses.
            </p>
          </div>
        </div>

        {/* day 4 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/hillcountry/day4.jpeg"
              alt="Coconut Tree Hill At Mirissa"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Coconut Tree Hill At Mirissa
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 4 - Bentota Beach
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img
                src="/tours/waterfall.jpeg"
                className="w-6 shrink-0"
                alt=""
              />

              <p className="text-lg font-semibold text-center leading-snug">
                The Descent To <br /> Sri Lanka’s Beaches
              </p>
            </div>

            <p className="text-center text-sm">
              Devon And St Clair’s Waterfalls I Mlesna Tea Castle I Descent
              Through The Great Western Mountain Range
            </p>
          </div>

          {/* point 2*/}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/island.png" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                Relax On The Beach <br /> At Bentota.
              </p>
            </div>

            <p className="text-center text-sm">
              Golden Sandy Beaches I River Boat Trips Turtle Hatchery I Lagoon
              Watersports
            </p>
          </div>
        </div>

        {/* day 5 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/hillcountry/day5.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Train Through The Hill Country
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 5 - Depart Colombo Airport
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/plane.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                Drop Off At Colombo Airport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cost card */}
      <section
        className="bg-cover bg-center flex items-center justify-end p-6 lg:p-20 mb-12"
        style={{
          backgroundImage: "url('/tours/hillcountry/nuwaraEliya.webp')",
        }}
      >
        {/* cost card */}
        <div className="max-w-lg bg-white border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/hillcountry/cost.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Day Title */}
          <h2 className="mt-4 text-left text-2xl font-marcellus font-bold tracking-wide">
            Kandy And The Hill Country
          </h2>

          {/* points */}
          <div className="mb-4">
            {/* title */}
            <div className="mt-2 text-lg font-semibold">
              <span>Cost Per Person (2026)</span>
            </div>

            <ul className="mt-2 text-sm">
              <li>Budget : From USD 578</li>
              <li>3 Star : From USD 622</li>
              <li>4 Star : From USD 678</li>
              <li>Luxury : From USD 772</li>
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

          <img src="/map/3.png" className="w-full" alt="" />
        </div>
      </section>

      <BookingHero backgroundImage="/road.jpg" />
    </>
  );
}
