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
              src="/tours/highlights/day1.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Colombo City Centre Shopping Mall
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
              src="/tours/highlights/day2.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Temple Of The Tooth At Kandy
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
        </div>

        {/* day 3 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/highlights/day3.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Cinnamon Bentota Beach Hotel
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 3 - Bentota Beach
          </h2>

          {/* point 1 */}
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

         {/* day 4 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/highlights/day4.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Sri Lanka’s Famous Hoppers
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 4 - Depart Colombo Airport
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
        style={{ backgroundImage: "url('/tours/highlights/kandy.jpg')" }}
      >
        {/* cost card */}
        <div className="max-w-lg bg-white border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/highlights/cost.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Day Title */}
          <h2 className="mt-4 text-left text-2xl font-marcellus font-bold tracking-wide">
            Sri Lanka’s Highlights
          </h2>

          {/* points */}
          <div className="mb-4">
            {/* title */}
            <div className="mt-2 text-lg font-semibold">
              <span>Cost Per Person (2026)</span>
            </div>

            <ul className="mt-2 text-sm">
              <li>Budget : From USD 388</li>
              <li>3 Star : From USD 434</li>
              <li>4 Star : From USD 486</li>
              <li>Luxury : From USD 528</li>
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

          <img src="/map/1.png" className="w-full" alt="" />
        </div>
      </section>

      <BookingHero backgroundImage="/road.jpg" />
    </>
  );
}
