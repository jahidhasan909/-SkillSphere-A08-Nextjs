import Banner from "@/Components/Banner/Banner";
import HighestCouresAni from "@/Components/HighestRatedTop/HighestCouresAni";
import HighestRatedCours from "@/Components/HighestRatedTop/HighestRatedCours";
import LearingTipsSection from "@/Components/LearingTips/LearingTipsSection";
import NewReleseAni from "@/Components/newRelease/NewReleseAni";
import StudentReview from "@/Components/StudentReview/StudentReview";
import TopInstructor from "@/Components/TopInstuctor/TopInstructor";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";




const getCoures = async () => {
  const res = await fetch('https://skill-sphere-a08-nextjs.vercel.app/data.json')
  const coures = res.json()

  return coures;
}




export default async function Home() {

  const couresData = await getCoures();
  const topCoures = couresData.sort((a, b) => b.rating - a.rating).slice(0, 4)
  const newRelease = couresData.filter(newCoures => newCoures.status == 'new release')





  return (
    <div>
      <Banner></Banner>
      <div className=" bg-linear-to-r from-[#c7eabb3f] to-[#a2cb8b27] py-24 mb-20">
        <div className="w-full container mx-auto">
          <div className="flex justify-between items-center">
            <div >
              <h2 className="text-2xl font-bold">Popular <span className="text-[#4d7946]">Courses</span></h2>
              <p className="text-[#84b179]">Top rated by our students</p>
            </div>
            <Link href={'/courses'}>
              <Button className={'rounded-md bg-[#84b179] text-white font-semibold'} variant="outline">See all courses <FaArrowRight /></Button>
            </Link>
          </div>
          <HighestCouresAni topCoures={topCoures}></HighestCouresAni>
        </div>
      </div>
      <div>
        <NewReleseAni newRelease={newRelease}></NewReleseAni>
      </div>
      <LearingTipsSection></LearingTipsSection>
      <TopInstructor></TopInstructor>

      <div className="bg-[#edf1e8]">
        <StudentReview></StudentReview>
      </div>
    </div>
  );
}
