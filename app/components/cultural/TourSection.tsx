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
              src="/tours/cultural/day1.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Sri Lankan Breakfast
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
              src="/tours/cultural/day2.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Dambulla Cave Temple
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 2 - Sigiriya
          </h2>

          {/* point 1 */}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/budda.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Golden Cave Temple
                <br /> At Dambulla
              </p>
            </div>

            <p className="text-center text-sm">
              Sri Lanka’s Artistic Masterpiece I 5 Ancient Cave Temples I 23 000
              Sq Feet Of Murals And 115 Buddha Statues.
            </p>
          </div>

          {/* point 2*/}
          <div className="mb-4">
            {/* title */}

            <div className="mt-2 flex items-start justify-center gap-3 px-6 py-3">
              <img src="/tours/mountain.jpeg" className="w-6 shrink-0" alt="" />

              <p className="text-lg font-semibold text-center leading-snug">
                The Sigiriya Rock Fortress
              </p>
            </div>

            <p className="text-center text-sm">
              Famous Sigiriya Frescoes I Lion’s Paws Entrance To Summit I Water
              Gardens At The Base I Ruins Of A Palace At The Top I One Of The
              Great Wonders Of The Ancient World!
            </p>
          </div>
        </div>

        {/* day 3 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/cultural/day3.jpeg"
              alt="Kandy Lake And Queens Bathing Pavilion"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Kandy Lake And Queens Bathing Pavilion
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 3 - Kandy
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
              UNESCO World Heritage Old Town I Kandy Viewpoint I Temple Of The
              Tooth Evening Pooja I Kandyan Cultural Dance
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
              Amazing Orchid Houses I The Royal Palm Avenue The World’s Fastest
              Growing Bamboos!
            </p>
          </div>
        </div>

        {/* day 4 */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/cultural/day4.jpeg"
              alt="Kandy Lake And Queens Bathing Pavilion"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Taj Bentota Resort And Spa
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            DAY 4 - Bentota Beach
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
              Elephants Bathing In The River I Baby Elephants Feeding I Bathe
              With Elephants At The Millennium Elephant Foundation
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
              src="/tours/cultural/day5.jpeg"
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
        style={{ backgroundImage: "url('/tours/cultural/sigiriya.jpg')" }}
      >
        {/* cost card */}
        <div className="max-w-lg bg-white border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/tours/cultural/cost.jpeg"
              alt="Colombo City Centre Shopping Mall"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Day Title */}
          <h2 className="mt-4 text-left text-2xl font-marcellus font-bold tracking-wide">
            Sri Lanka’s Cultural Triangle
          </h2>

          {/* points */}
          <div className="mb-4">
            {/* title */}
            <div className="mt-2 text-lg font-semibold">
              <span>Cost Per Person (2026)</span>
            </div>

            <ul className="mt-2 text-sm">
              <li>Budget : From USD 588</li>
              <li>3 Star : From USD 628</li>
              <li>4 Star : From USD 698</li>
              <li>Luxury : From USD 798</li>
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

            <img src="/map/2.png" className="w-full" alt="" />
          </div>
        </div>
      </section>

      <BookingHero backgroundImage="/road.jpg" />
    </>
  );
}
