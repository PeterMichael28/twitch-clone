import Image from 'next/image'
import { UserButton, currentUser } from '@clerk/nextjs';



export default async function Home() {

  // const user = await currentUser();

  // const userAuth = auth();
// 
  // console.log({user})
  // console.log({userAuth})
  return (
  <div><UserButton /></div>
  )
}
