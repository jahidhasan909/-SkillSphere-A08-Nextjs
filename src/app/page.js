import Banner from "@/Components/Banner/Banner";
import HighestRatedCours from "@/Components/HighestRatedTop/HighestRatedCours";
import Image from "next/image";




const getCoures = async () => {
  const res = await fetch('https://skill-sphere-a08-nextjs.vercel.app/data.json')
  const coures = res.json()

  return coures;
}




export default async function Home() {

  const couresData = await getCoures();
  const topCoures = couresData.sort((a, b) => b.rating - a.rating).slice(0, 3)


  return (
    <div>
      <Banner></Banner>
      <div className="  container mx-auto grid grid-cols-3">
        {
          topCoures.map(topCouress => <HighestRatedCours key={topCouress.id} topCouress={topCouress}></HighestRatedCours>)
        }
      </div>
    </div>
  );
}
