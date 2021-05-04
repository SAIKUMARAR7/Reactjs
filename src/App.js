import React from 'react';
import { useState,useEffect } from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import "./style.css";
export default function App() {
  const source = [
  {
    id: 1,
    name: "Covid 19 RT PCR Test in Chennai",
    price: 1500,
    src:"https://prod-metropolisindia-bucket.s3.ap-south-1.amazonaws.com/images/1615642238_1610438648_Blood-Test-Metropolis.jpg",
    description: "This is a laboratory test that can identify the virus that causes COVID-19. This test is intended for the detection of the SARS-CoV-2. It makes use of Real-Time Reverse..."
  },
  {
    id: 2,
    name: "Covid 19 RT PCR Test in Chennai",
    price: 1000,
    src:"https://prod-metropolisindia-bucket.s3.ap-south-1.amazonaws.com/images/700x500_package_labguy.png",
    description: " COVID 19 Antibody Test, also known as a serological Test, is done after full recovery from COVID-19. Eligibility may vary, depending on the availability of tests. A health care professional takes a blood sample, usually by drawing blood from a vein in the arm. Then the sample is tested to determine whether you’ve developed antibodies against the virus"
  },
  {
    id: 3,
    name: "Covid 19 RT PCR Test in Chennai",
    price: 5000,
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_Vz_IdpCCleelnmC_aqDUC1fgIBErDks4WpoH5JAA10RsFlkRhH0GCtdaSH7Lt7sYxQ&usqp=CAU",
    description: "Full Body Check Up at the comfort of your Home & 100% accurate reports."
  },
  {
    id: 4,
    name: "Covid 19 RT PCR Test in Chennai",
    price: 1500,
    src:"https://viewmedica.com/images/thumbslarge/completebloodcount_1280.jpg",
    description: "A complete blood count, also known as a full blood count, is a set of medical laboratory tests that provide information about the cells in a person's blood.",
  }
];
const preload=()=>{
let l=source.length;
 let a=[]
for(var i=0;i<l;i++){
    a.push(0)
}
setCount(a);
}
useEffect(() => {
    preload()
  },[]);
  const [count,setCount] = useState([]);
  const [totalcost,settotalCost] = useState(0);
  const [items,setitems]=useState(0);
  const [page,setpage]=useState(0);

  const increaseamount=(val,i)=>{
  setitems(items+1)
  let temp=count
  let first=temp[i]
  first=first+1
  temp[i]=first
  setCount(temp)
  let s=totalcost+val
  settotalCost(s)
    console.log(count)
  }
  const decreaseamount=(val,i)=>{
  setCount(count - 1)
  setitems(items-1)
  let temp=count
  let first=temp[i]
  first=first-1
  temp[i]=first
  setCount(temp)
  let s=totalcost-val
  settotalCost(s)
}
let sum=count

const pagenumber=( )=>{

    setpage(page+1)


 }
 const demo=()=>(
 source.map((s,i)=>(
    <div className="container card mt-1 " style={{width:"60%"}}>
            <div className="flex justify-between px-10 py-5 border-b">
                <div className="row">
                    <div className="col-6">
                    <p className="text-lg text-gray-700 dark:text-gray-200">{s.name}</p>
                    <p className="text-sm mt-2 text-gray-500">{s.price}</p><p class="text-xs text-gray-400 line-clamp-3">
                       {s.description}
                    </p>
                    </div>
                    <div className="col-6">
                        <div className="ml-4 object-cover rounded-md shadow-md"><img style={{width:"40%",height:"24%"}} className="w-40 h-24 object-cover rounded-md shadow-md"
                        src={s.src}/>
                            <div className="relative flex justify-center -top-4">
                                <div className='ml-2'>
                                {(sum[i]!==0)&&(
                                    <div className="flex justify-evenly">
                                    <span className="btn btn-light"><button onClick={() => decreaseamount(s.price,i)}>-</button></span>
                                    <span className="btn btn-light">{sum[i]}</span>
                                    <span className="btn btn-light"><button onClick={() => increaseamount(s.price,i)}>+</button></span>
                                    </div>
                                    )}
                                  {(sum[i]===0)&&( <span className="btn btn-light"><button onClick={() => increaseamount(s.price,i)}>Add</button></span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           </div>

    </div>

))
 )

return (

  <div>

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand color="danger" href="#home"><img style={{width:"60%",height:"2%"}} className="w-40 h-24 object-cover rounded-md shadow-md"
                        src="https://healact-test.vercel.app/logo_healact_small.png"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Solutions">Solutions</Nav.Link>
      <Nav.Link href="#Pricing">Pricing</Nav.Link>
      <Nav.Link href="#Docs">Docs</Nav.Link>
      <Nav.Link href="#More">More</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info">SignIn</Button>
    </Form>
  </Navbar>
    {(page===0)&&(
    <div className="container mt-3">
    <div className="container" style={{width:"60%",height:"15%"}}>
    <h4>Healact</h4>
    <h6>Health Education & the Art of Living, with Active Care & Training
    Anna Nagar, Chennai</h6>
    </div>
    {demo()}
    <div className="navbarr sticky-bottom">
       <h5 style={{color:"lite"}}>{items} Items
      Total: ₹{totalcost}</h5>
        <button className="btn btn-info"style={{color:"#4B0082",float:"right"}} onClick={() =>pagenumber()}>PlaceOrder</button>
    </div>

</div>)}
{(page===1)&&(
<div className="col-md-6 offset-md-3">
   <div className='mx-auto mt-3 '>
    <h4 className="text-xl m-0 font-semibold text-gray-700 dark:text-gray-200 ml-5 d-flex justify-content-center">Order Placed Successfully</h4>
    <h8 className="text-sm mt-1 text-gray-500 ml-5 d-flex justify-content-center">3.55 PM | Order ID: 802910202</h8>
   </div>
   <div className="d-flex justify-content-center">
   <img className="image-fluid" style={{width:"40%",transform: "rotate(270deg)"}} src="https://healact-test.vercel.app/order-tracking-map.png"/>

   </div>
   <div className="container card w-10/12  m-auto px-6  py-4 h-18 bg-white rounded-lg border-gray-300 border-2 d-flex justify-content-center" style={{width:"60%"}}><h4 className="text-left text-md m-0 text-gray-700 dark:text-gray-200">Estimated Time in <span className="font-semibold text-gray-700 dark:text-gray-200">20 Minutes</span></h4></div>
  <div className="container mr-2 mt-8 px-10 py-6 flex d-flex justify-content-center"><img src="https://healact-test.vercel.app/delivery-person.png"style={{width:80,height:80}} className="object-cover w-24 h-24 rounded"/>
  <div className="ml-5 text-md text-gray-700 dark:text-gray-200 d-flex justify-content-center"><p><span className="font-semibold">Vinay</span> is on the way pick up the test Samples.</p></div></div>
  <div className="d-flex justify-content-center"><button className="btn btn-info"style={{color:"#4B0082"}}>Call</button></div>



</div>
)}

   </div>
 );


}
