import Image from 'next/image';

export default function ListMember() {
  return (
    <div>
      <ul role="list" className="flex flex-col">
        <li className="">
          <div className="">
            <Image
              className=""
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5"
              alt="Michael Foster profile photo"
              width={256}
              height={256}
            />
            <div className="">
              <p className="">Michael Foster</p>
              <p className="">michael.foster@example.com</p>
            </div>
          </div>
          <div className="">
            <p className="">Co-Founder / CTO</p>
            <p className="">
              Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
            </p>
          </div>
        </li>

        <li className="">
          <div className="">
            <Image
              className=""
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              alt="Dries Vincent profile photo"
              width={256}
              height={256}
            />
            <div className="">
              <p className="">Dries Vincent</p>
              <p className="">dries.vincent@example.com</p>
            </div>
          </div>
          <div className="">
            <p className="">Business Relations</p>
            <div className="">
              <div className="bg-emerald-500/20">
                <div className="bg-emerald-500"></div>
              </div>
              <p className="">Online</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
// 20분컷할것
