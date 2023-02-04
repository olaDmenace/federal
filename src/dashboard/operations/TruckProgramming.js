import FormTitle from "../FormTitle";
import { LocationMarkerIcon, XCircleIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoints/endpoint";
// import { useDispatch } from "react-redux";
import PageTitle from "../../utils/PageTitle";
import PopUp from "../../utils/PopUp";
import { ThumbUpIcon } from "@heroicons/react/solid";
import LoadingSpinner from "../../utils/LoadingSpinner";

function TruckProgramming() {
  PageTitle("Axle & Cartage - Truck Programming");

  // const dispatch = useDispatch();

  const [data, setData] = useState({
    truckId: "",
    isDedicatedDestination: true,
    customerId: "",
    loadingLocationId: "",
    returningLocationId: "",
    restrictions: "",
    programmedDestination: "",
    tripType: "",
    finalDestination: "",
    destinationState: "",
    productId: "",
    bridgingDepotId: "",
    numberOfCustomers: 0
  });


  const [trucks, setTrucks] = useState([])
  const [products, setProducts] = useState([])
  const [depots, setDepots] = useState([])
  const [states, setStates] = useState([])
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    endpoint
      .get("/truck")
      .then((res) => {
        console.log(res.data.data);
        setTrucks(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });


    endpoint.get('/variable/products').then(res => {
      console.log(res.data.data)
      setProducts(res.data.data)
    }).catch(err => {
      console.log(err)
    })


    endpoint.get('/variable/depots').then(res => {
      console.log(res.data.data)
      setDepots(res.data.data)
    }).catch(err => {
      console.log(err)
    })


    endpoint.get('/variable/customers').then(res => {
      console.log(res.data.data)
      setCustomers(res.data.data)
    }).catch(err => {
      console.log(err)
    })

    const data = {
      country: 'Nigeria'
    }
    endpoint.post('https://countriesnow.space/api/v0.1/countries/states', data).then(res => {
      console.log(res.data.data.states)
      setStates(res.data.data.states)
    }).catch(err => {
      console.log(err)
    })
  }, []);



  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [reply, setReply] = useState({
    icon: '',
    message: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    endpoint.post('/truck/programme', data).then(res => {
      console.log(res)
      if (res.status === 200) {
        setReply({
          icon: <ThumbUpIcon className='mx-auto h-24 text-primary' />,
          message: res.data.message
        })
      } else {
        setReply({
          icon: <XCircleIcon className='mx-auto h-24 text-red-500' />,
          message: res.data.message
        })
      }
      setIsLoading(!isLoading)
    }).catch(err => {
      console.log(err)
    })
    console.log(data);
  };

  const tripType = [{ tripTypeId: 1, tripTypeName: 'Bridging' },
  { tripTypeId: 2, tripTypeName: 'Long Haul' },
  { tripTypeId: 3, tripTypeName: 'Rescue (Loaded Truck)' },
  { tripTypeId: 4, tripTypeName: 'Rescue (Empty Truck)' },
  { tripTypeId: 5, tripTypeName: 'Training' },
  { tripTypeId: 6, tripTypeName: 'Road Test' }
  ]

  const operationalStatus = [{ oprationalStatusId: 0, operationalStatus: 'Truck Programmed' },
  { oprationalStatusId: 1, operationalStatus: 'Assigned to a Trip' },
  { oprationalStatusId: 2, operationalStatus: 'Enroute Depot' },
  { oprationalStatusId: 3, operationalStatus: 'At the Loading Depot' },
  { oprationalStatusId: 4, operationalStatus: 'Truck Loaded' },
  { oprationalStatusId: 5, operationalStatus: 'Enroute Bridging Depot' },
  { oprationalStatusId: 6, operationalStatus: 'Enroute Customer Location' },
  { oprationalStatusId: 7, operationalStatus: 'At the Depot' },
  { oprationalStatusId: 8, operationalStatus: 'Truck Flashed' },
  { oprationalStatusId: 9, operationalStatus: 'At the Customer 1 Location' },
  { oprationalStatusId: 10, operationalStatus: 'At the Customer 2 Location' },
  { oprationalStatusId: 11, operationalStatus: 'At the Customer 3 Location' },
  { oprationalStatusId: 12, operationalStatus: 'Goods Delivered to Customer 1' },
  { oprationalStatusId: 13, operationalStatus: 'Goods Delivered to Customer 2' },
  { oprationalStatusId: 14, operationalStatus: 'Goods Delivered to Customer 3' },
  { oprationalStatusId: 15, operationalStatus: 'Inbound' },
  { oprationalStatusId: 16, operationalStatus: 'End Journey' },
  { oprationalStatusId: 17, operationalStatus: 'Available for Loading' }]


  return (
    <div className="space-y-2">
      {show && <PopUp>
        {reply.icon}
        <p className='mx-auto text-center text-primary bg-transparent'>{reply.message}</p>
        <button className='btn btn-primary' onClick={(e) => setShow(false)}>Confirm</button>
      </PopUp>}
      <FormTitle Title={"Truck Programming"} />
      <hr />
      <form action="" className="grid text-primary gap-5 w-full">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Truck Number
            <br />
            <select
              className="select select-primary w-full"
              value={data.truckId}
              onChange={(e) => setData({ ...data, truckId: e.target.value })}
              type="text"
              name=""
            >
              <option value="">Select Reason</option>
              {trucks.map(item => <option value={item.truckId} key={item.truckId}>{item.truckNumber}</option>)}
            </select>
          </label>
          <label htmlFor="">
            Truck Odometer
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.truckId} className="px-4">{item.truckNumber}</p>)}
            </div>
          </label>
          <label htmlFor="">
            Truck Milage to Next PM
            <br />
            <input className="input input-primary w-full" type="text" />
          </label>
          <label htmlFor="">
            Next PM Due Date
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span key={item.truckId} className="px-4">{Date(item.nextPreventiveMaintenance).slice(4, 15)}</span>)}
            </div>
          </label>
          <label htmlFor="">
            Truck Capacity
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span key={item.truckId} className="px-4">{item.truckCapacity}</span>)}
            </div>
          </label>
          <label htmlFor="">
            Volume Unit
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span key={item.truckId} className="px-4">{item.volumeUnit}</span>)}
            </div>
          </label>
          <label htmlFor="">
            Brand
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span key={item.truckId} className="px-4">{item.brand.model}</span>)}
            </div>
          </label>
          <label htmlFor="">
            Product Name
            <br />
            <select className="select select-primary w-full" value={data.productId} onChange={(e) => setData({ ...data, productId: e.target.value })} name="" id="">
              <option value="">Select Type</option>
              {products.map(item => <option key={item.productId} value={item.productId}>{item.productName}</option>)}
            </select>
          </label>
          <label htmlFor="">
            Product Type
            <br />
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {products.filter((t) => t.productId === data.productId).map(item => <p key={item.productId}>{item.productType}</p>)}
            </div>
          </label>
          <label htmlFor="" className="relative">
            Current Position
            <br />
            <input
              class="input input-primary w-full"
              placeholder="Lorem Depot"
              type="text"
              name=""
              id=""
            />
            <LocationMarkerIcon className="srtoke-1 h-6 absolute top-9 right-4" />
          </label>
          <label htmlFor="">
            Dedicated Destination
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.isDedicatedDestination}
              onChange={(e) =>
                setData({ ...data, isDedicatedDestination: e.target.value })
              }
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </label>
          <label htmlFor="">
            <span className="flex gap-2 h-1">Programmed Destination<p className="text-red-900">AR</p></span>
            <br />
            <input
              class="input input-primary w-full"
              placeholder="40, Toyin Street, Ikeja"
              type="text"
              name={data.programmedDestination}
              onChange={(e) => setData({ ...data, programmedDestination: e.target.value })}
              id=""
            />
          </label>
          <label htmlFor="">
            Programmed Trip Type
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.tripType}
              onChange={(e) => setData({ ...data, tripType: +e.target.value })}
            >
              <option value='' selected disabled>
                Trip Type
              </option>
              {tripType.map(t => <option value={t.tripTypeId}>{t.tripTypeName}</option>)}
            </select>
          </label>
          <label htmlFor="">
            Bridging Depot
            <br />
            <select class="select select-primary w-full" value={data.bridgingDepotId} onChange={(e) => setData({ ...data, bridgingDepotId: e.target.value })} name="" id="" disabled={data.tripType !== 1}>
              <option selected disabled>
                Select Bridging Depot
              </option>
              <option value="">Select Bridging Depot</option>
              {depots.map(t => <option value={t.depotId}>{t.depotName}</option>)}
            </select>
          </label>
          <label htmlFor="">
            <span className="flex gap-2 h-1">Restrictions<p className="text-red-900">AR</p></span>
            <br /> <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name={data.restrictions}
              onChange={(e) => setData({ ...data, restrictions: e.target.value })}
              id=""
            />
          </label>
          <label htmlFor="">
            <span className="flex gap-2 h-1">Truck Loading Configuration<p className="text-red-900">AR</p></span>
            <br />
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Loading Location
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.loadingLocationId}
              onChange={(e) =>
                setData({ ...data, loadingLocationId: e.target.value })
              }
            >
              <option>Select Loding Location</option>
              {depots.map(depot => <option key={depot.depotId} value={depot.depotId}>{depot.depotName}</option>)}
            </select>
          </label>
          <label htmlFor="">
            Returning Destination
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.returningLocationId}
              onChange={(e) =>
                setData({ ...data, returningLocationId: e.target.value })
              }
            >
              <option selected disabled>
                Select Returning Destination
              </option>
              {depots.map(depot => <option key={depot.depotId} value={depot.depotId}>{depot.depotName}</option>)}
            </select>
          </label>
        </div>
        <fieldset className="grid md:grid-cols-2 gap-3 w-full">
          <label htmlFor="">
            Journey Officer
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.journeyOfficerId} className="px-4">{item.journeyOfficer}</p>)}
            </div>
          </label>
          <label htmlFor="">
            Logistics Officer
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.logisticsCoordinatorId} className="px-4">{item.logisticsCoordinator}</p>)}
            </div>
          </label>
          {/* <label htmlFor="">
            Trip ID
            <br />
            <input
              class="input input-primary w-full"
              placeholder="ID-120021"
              type="text"
              name=""
              id=""
            />
          </label> */}
        </fieldset>
        <label htmlFor="">
          Delivery Officer
          <br />
          <div className='border border-primary h-12 rounded-lg grid items-center'>
            {trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.deliveryOfficerId} className="px-4">{item.deliveryOfficer}</p>)}
          </div>
        </label>
        <h2 className="text-xl -mb-4 text-primary font-semibold">
          Trip/Customer Details
        </h2>
        <hr />
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Customer Name
            <br /><select className="select select-primary w-full" value={data.customerId} onChange={(e) => setData({ ...data, customerId: e.target.value })} name="" id="">
              <option value="">Select Customer</option>
              {customers.map(item => <option key={item.customerId} value={item.customerId}>{item.customerName}</option>)}
            </select>
          </label>
          <label htmlFor="">
            Customer Type
            <br />
            {/* <select className="select select-primary w-full" name="" id="">
              <option value="">Select Customer Type</option>
              {customers.map(item => <option key={item.customerId} value={item.customerId}>{item.customerType}</option>)}
            </select> */}
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {customers.filter((t) => t.customerId === data.customerId).map(item => <p>{item.customerType}</p>)}
            </div>
          </label>
          <label htmlFor="">
            Customer Destination State
            <br />
            <select class="select select-primary w-full" value={data.destinationState} onChange={(e) => setData({ ...data, destinationState: e.target.value })} name="" id="">
              <option selected disabled>
                Select State
              </option>
              {states.map(item => <option key={item.state_code} value={item.name}>{item.name}</option>)}
            </select>
          </label>
          {/* <label htmlFor="">
            Current Truck Operational Status <br />
            <select class="select select-primary w-full" name="" id="">
              <option selected disabled>
                Select Status
              </option>
              {operationalStatus.map(t => <option value={t.oprationalStatusId}>{t.operationalStatus}</option>)}
            </select>
          </label> */}
        </fieldset>
        <fieldset className="grid gap-3 md:grid-cols-2 items-end">
          <label htmlFor="">
            Programmed Number of Customers
            <br />
            <input
              class="input input-primary w-full"
              type="number"
              name=""
              id=""
              value={data.numberOfCustomers}
              onChange={(e) => setData({ ...data, numberOfCustomers: +e.target.value })}
            />
          </label>
          <label htmlFor="">
            Programmed Business Area (Final Destination)
            <br />
            <input
              class="input input-primary w-full"
              type="text"
              name=""
              id=""
              value={data.finalDestination}
              onChange={(e) =>
                setData({ ...data, finalDestination: e.target.value })
              }
            />
          </label>
        </fieldset>
        {isLoading && <LoadingSpinner />}
        {!isLoading && <button
          onClick={handleSubmit}
          class="btn btn-primary mx-auto"
          type="submit"
        >
          Submit
        </button>}
      </form>
    </div>
  );
}

export default TruckProgramming;
