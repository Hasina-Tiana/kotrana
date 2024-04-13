import Navbar from "./components/Navbar";
import sary from './assets/image/friends.png'

function App() {
  return (
    <>
      <Navbar/>
      <div className="w-full px-10 flex items-center justify-center mt-10">
        <div className="w-1/2 space-y-12">
          <h1 className="text-8xl text-[#6B4D97]">Let&#39;s be friend !</h1>
          <p className="text-justify text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maxime ullam officia reiciendis iusto, laboriosam perferendis mollitia accusantium ipsum! Repellendus accusamus veritatis non asperiores dignissimos quo maiores voluptas inventore dicta.</p>
          <div className="flex justify-center space-x-20 *:text-xl">
            <button className="bg-[#6B4D97] text-white px-4 py-2 rounded">Explore</button>
            <button className="text-[#6B4D97] px-4 py-2 rounded shadow shadow-slate-500">Learn more</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={sary} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
