import DetailsCard from '@/Components/DetailsCard/DetailsCard';
import React from 'react';

const DetailsPage = async ({ params }) => {

  const { id } = await params;
  const res = await fetch('https://skill-sphere-a08-nextjs.vercel.app/data.json')
  const couresdetails = await res.json()

  const expectedCouresDetails = couresdetails.find(details => details.id == id)



  return (
    <div className=''>
      <DetailsCard expectedCouresDetails={expectedCouresDetails}></DetailsCard>
    </div>
  );
};

export default DetailsPage;