export default function TailwindPage() {
  return (
    <div className=" w-full h-screen justify-center items-center flex">
      {/* <div className="flex gap-3">
        <button className="bg-blue-600 text-white rounded-md p-2">default</button>
        <button className="white-button rounded-md">Alternative</button>
        <button className="bg-gray-800 text-white rounded-md p-2">Dark</button>
        <button className="white-button rounded-md">Light</button>
        <button className="bg-green-500 text-white rounded-md p-2">Green</button>
        <button className="bg-red-700 text-white rounded-md p-2">Red</button>
        <button className="bg-yellow-300 text-white rounded-md p-2">Yellow</button>
        <button className="bg-purple-700 text-white rounded-md p-2">Purple</button>
      </div> */}{' '}
      {/*1번* */}
      {/* <div className="max-w-sm overflow-hidden rounded-lg  shadow-sm ">
        <div className=" ">
          <img
            src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="flex-col  p-5 items-center">
          <div className="text-3xl font-bold pb-3">2024년 기술 동향</div>
          <div className="text-gray-700 pb-3">
            최신 기술 동향에 대한 기사를 통해 혁식전인 아이디어 와 트렌드를 탐구해보세요. 이 글에서는 인공지능과
            머신러닝의 발전이 우리 생활에 미치는 영향을 다룹니다.
          </div>
          <button className="bg-blue-600 text-white rounded-md p-2">더보기</button>
        </div>
      </div> */}
      {/*2번* */}
      <form className="w-full max-w-[30rem] flex flex-col gap-4 " onSubmit={(e) => e.preventDefault()}>
        <div className=" flex-col ">
          <label>이메일</label>
          <input
            type="email"
            id="email"
            className="w-full  bg-gray-100 rounded-md py-2 pl-2"
            placeholder="abc@gmail.com"
            required
          ></input>
        </div>

        <div className="flex-col">
          <label>비밀번호</label>
          <input type="password" id="password" className=" w-full bg-gray-100 rounded-md py-2 pl-2" required></input>
        </div>

        <div className=" flex">
          <input id="remember" type="checkbox" value="" className="" required />
          <label htmlFor="remember" className="">
            로그인 상태 유지
          </label>
        </div>

        <button className="bg-blue-600 text-white rounded-md p-2 w-full">Sunbmit</button>
      </form>
    </div>
  );
}
