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
              src="/tours/southern/day1.jpg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Ministry of Crab Restaurant
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
              src="/tours/southern/day2.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Old Town Of Galle
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 2 - Galle
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img
                src="/tours/lighthouse.jpeg"
                className="w-6 shrink-0"
                alt=""
              />

              <p className="text-lg font-semibold text-center leading-snug">
                The Old Dutch Fort Of Galle
              </p>
            </div>

            <p className="text-center text-sm">
              UNESCO World Heritage Old Town I World Class Shopping I Fabulous
              Dining At Restaurants I Unawatuna Beach The Best Preserved
              Colonial Town In The Whole Of Asia!
            </p>
          </div>
        </div>

        {/* day 3 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/southern/day3.jpeg"
              alt="Castlereigh Lake At Hatton"
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
            DAY 3 - Yala National Park
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
              Exclusive PM Jeep Safari I Wild Tusker Elephants I Sloth Bears I
              Crocodiles I Greater Flamingoes I The Best Location In The World
              To See Leopards In The Wild!
            </p>
          </div>
        </div>

        {/* day 4  */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/southern/day4.jpg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            The Riff, Hikkaduwa
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 4 - To Airport or Beach Hotel
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
          backgroundImage: "url('/tours/southern/galle.webp')",
        }}
      >
        {/* cost card */}
        <div className="max-w-lg bg-white border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/southern/cost.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Day Title */}
          <h2 className="mt-4 text-left text-2xl font-marcellus font-bold tracking-wide">
            Tour Of Southern Sri Lanka
          </h2>

          {/* points */}
          <div className="mb-4">
            {/* title */}
            <div className="mt-2 text-lg font-semibold">
              <span>Cost Per Person (2026)</span>
            </div>

            <ul className="mt-2 text-sm">
              <li>Budget : From USD 684</li>
              <li>3 Star : From USD 724</li>
              <li>4 Star : From USD 758</li>
              <li>Luxury : From USD 878</li>
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

            <img src="/map/4.png" className="w-full" alt="" />
          </div>
        </div>
      </section>

      <BookingHero backgroundImage="/road.jpg" />
    </>
  );
}
