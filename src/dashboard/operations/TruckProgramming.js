import FormTitle from "../FormTitle";
import { XCircleIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoints/endpoint";
// import { useDispatch } from "react-redux";
import PageTitle from "../../utils/PageTitle";
import PopUp from "../../utils/PopUp";
import { ThumbUpIcon } from "@heroicons/react/solid";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { useLocation } from "react-router-dom";

function TruckProgramming({ formData, setFormData }) {
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
  const [prog, setProg] = useState([])

  useEffect(() => {
    endpoint.get('truck/programme').then(res => {
      console.log(res.data)
      setProg(res.data.data)
    }).catch(res => {
      console.log(res)
    })
  }, [])

  useEffect(() => {
    endpoint.get("/truck")
      .then((res) => {
        console.log(res.data.data);
        setTrucks(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    endpoint.get('/variable/products').then(res => {
      console.log(res.data.data)
      setProducts(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    endpoint.get('/variable/depots').then(res => {
      console.log(res.data.data)
      setDepots(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    endpoint.get('/variable/customers').then(res => {
      console.log(res.data.data)
      setCustomers(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
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
    console.log(e.cancelable)
    e.preventDefault()
    setIsLoading(true)
    endpoint.post('/truck/programme', data).then(res => {
      console.log(res)
      setShow(true)
      setReply({
        icon: <ThumbUpIcon className='mx-auto h-24 text-primary' />,
        message: `${res.data.message} with Tripp ID ${res.data.data}`
      })
      // setIsLoading(!isLoading)
    }).catch(err => {
      setShow(true)
      setReply({
        icon: <XCircleIcon className='mx-auto h-24 text-red-500' />,
        message: err.response.data.message || err.response.data.title
      })
      console.log(err)
    })
  };

  const tripType = [{ tripTypeId: 1, tripTypeName: 'Bridging' },
  { tripTypeId: 2, tripTypeName: 'Long Haul' },
  { tripTypeId: 3, tripTypeName: 'Rescue (Loaded Truck)' },
  { tripTypeId: 4, tripTypeName: 'Rescue (Empty Truck)' },
  { tripTypeId: 5, tripTypeName: 'Training' },
  { tripTypeId: 6, tripTypeName: 'Road Test' }
  ]


  const closePop = () => {
    setIsLoading(!isLoading)
    setShow(false)
  }

  const location = useLocation()

  return (
    <div className="space-y-2">
      {show && <PopUp>
        {reply.icon}
        <p className='mx-auto text-center text-primary bg-transparent'>{reply.message}</p>
        <button className='btn btn-primary' onClick={(e) => closePop()}>Confirm</button>
      </PopUp>}
      {location.pathname === '/dashboard/TruckProgramming' ? <div>
        <FormTitle Title={"Truck Programming"} />
        <hr />
      </div> : ''}
      <form action="" onSubmit={handleSubmit} className="grid text-primary gap-5 w-full">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Truck Number
            <br />
            {location.pathname === '/dashboard/TruckProgramming' ? <select
              className="select select-primary w-full"
              value={data.truckId}
              onChange={(e) => setData({ ...data, truckId: e.target.value })}
              type="text"
              name=""
            >
              <option value="">Select Reason</option>
              {trucks.map(item => <option value={item.truckId} key={item.truckId}>{item.truckNumber}</option>)}
            </select> :
              <select value={formData.truckProgrammingId} onChange={(e) => setFormData({ ...formData, truckProgrammingId: e.target.value })} className="select select-primary w-full">
                <option value="" className="disabled">Select Truck</option>
                {prog.map(item => <option value={item.truckProgrammingId} key={item.truckProgrammingId}>{item.truck.truckNumber}</option>)}
              </select>}
          </label>
          {location.pathname !== '/dashboard/TruckProgramming' ? <label htmlFor="tripId">
            Trip ID
            <div className="border border-primary w-full h-12 px-4 rounded-lg grid items-center">
              {prog.filter((i) => i.truckProgrammingId === formData.truckProgrammingId).map(item => <p>{item.tripReference}</p>)}
            </div>
            {/* <select className="select select-primary w-full" name="" id="tripID">
              <option value="">Select Trip ID</option>
              {prog.map(item => <option value={item.truckProgrammingId} key={item.truckProgrammingId}>{item.tripReference}</option>)}
            </select> */}
          </label> : ''}
          <label htmlFor="">
            Truck Odometer
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {location.pathname === '/dashboard/TruckProgramming' ?
                trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.truckId} className="px-4">{item.truckNumber}</p>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truck.truckNumber} className="px-4">{item.truck.truckNumber}</p>)
              }
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
              {location.pathname === '/dashboard/TruckProgramming' ?
                trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span key={item.truckId} className="px-4">{item.truckCapacity}</span>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truck.truckNumber} className="px-4">{item.truck.truckCapacity}</p>)
              }
            </div>
          </label>
          <label htmlFor="">
            Volume Unit
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {location.pathname === '/dashboard/TruckProgramming' ?
                trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span key={item.truckId} className="px-4">{item.volumeUnit}</span>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truck.truckNumber} className="px-4">{item.truck.volumeUnit}</p>)
              }
            </div>
          </label>
          <label htmlFor="">
            Brand
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {location.pathname === '/dashboard/TruckProgramming' ?
                trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span key={item.truckId} className="px-4">{item.brand.model}</span>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <span key={item.truck.truckId} className="px-4">{item.truck.brand.model}</span>)
              }
            </div>
          </label>
          <label htmlFor="">
            Product Name
            <br />
            {location.pathname === '/dashboard/TruckProgramming' ? <select className="select select-primary w-full" value={data.productId} onChange={(e) => setData({ ...data, productId: e.target.value })} name="" id="">
              <option value="">Select Type</option>
              {products.map(item => <option key={item.productId} value={item.productId}>{item.productName}</option>)}
            </select> :
              prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <div key={item.truck.truckId} className="px-4 pt-3 h-12 rounded-lg w-full border border-primary block">{item.product.productName}</div>)
            }
          </label>
          <label htmlFor="">
            Product Type
            <br />
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {location.pathname === '/dashboard/TruckProgramming' ?
                products.filter((t) => t.productId === data.productId).map(item => <p key={item.productId}>{item.productType}</p>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truck.truckId}>{item.product.productType}</p>)
              }
            </div>
          </label>
          <label htmlFor="" className="">
            Current Position
            <br />
            <input
              class="input input-primary w-full"
              placeholder="Lorem Depot"
              type="text"
              name=""
              id=""
            />
            {/* <LocationMarkerIcon className="srtoke-1 h-6 absolute top-9 right-4" /> */}
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
                setData({ ...data, isDedicatedDestination: e.target.value === "true" })
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
            {location.pathname === '/dashboard/TruckProgramming' ? <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.returningLocationId}
              onChange={(e) =>
                setData({ ...data, returningLocationId: e.target.value })
              }
            >
              <option selected>
                Select Returning Destination
              </option>
              {depots.map(depot => <option key={depot.depotId} value={depot.depotId}>{depot.depotName}</option>)}
            </select>
              :
              prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <div className="w-full border border-primary h-12 px-4 pt-3 rounded-lg" key={item.truck.truckId}>{item.returningDepot}</div>)
            }
          </label>
        </div>
        <fieldset className="grid md:grid-cols-2 gap-3 w-full">
          <label htmlFor="">
            Journey Officer
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {location.pathname === '/dashboard/TruckProgramming' ?
                trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.journeyOfficerId} className="px-4">{item.journeyOfficer}</p>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truckProgrammingId} className="px-4">{item.truck.journeyOfficer}</p>)
              }
            </div>
          </label>
          <label htmlFor="">
            Logistics Officer
            <br />
            <div className='border border-primary h-12 rounded-lg grid items-center'>
              {location.pathname === '/dashboard/TruckProgramming' ?
                trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.logisticsCoordinatorId} className="px-4">{item.logisticsCoordinator}</p>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truckProgrammingId} className="px-4">{item.truck.logisticsCoordinator}</p>)
              }
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
            {location.pathname === '/dashboard/TruckProgramming' ?
              trucks.filter((t) => t.truckId === data.truckId).map(item => <p key={item.deliveryOfficerId} className="px-4">{item.deliveryOfficer}</p>)
              :
              prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truckProgrammingId} className="px-4">{item.truck.deliveryOfficer}</p>)
            }
          </div>
        </label>
        <h2 className="text-xl -mb-4 text-primary font-semibold">
          Trip/Customer Details
        </h2>
        <hr />
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Customer Name
            <br />
            {location.pathname === '/dashboard/TruckProgramming' ? <select className="select select-primary w-full" value={data.customerId} onChange={(e) => setData({ ...data, customerId: e.target.value })} name="" id="">
              <option value="">Select Customer</option>
              {customers.map(item => <option key={item.customerId} value={item.customerId}>{item.customerName}</option>)}
            </select> :
              prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <div key={item.truckProgrammingId} className="px-4 pt-3 rounded-lg border border-primary h-12">{item.customer.customerName}</div>)
            }
          </label>
          <label htmlFor="">
            Customer Type
            <br />
            {/* <select className="select select-primary w-full" name="" id="">
              <option value="">Select Customer Type</option>
              {customers.map(item => <option key={item.customerId} value={item.customerId}>{item.customerType}</option>)}
            </select> */}
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {location.pathname === '/dashboard/TruckProgramming' ?
                customers.filter((t) => t.customerId === data.customerId).map(item => <p>{item.customerType}</p>)
                :
                prog.filter((t) => t.truckProgrammingId === formData.truckProgrammingId).map(item => <p key={item.truckProgrammingId} className="px-2 pt-1">{item.customer.customerType}</p>)
              }
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
        {
          location.pathname === '/dashboard/TruckProgramming' ? <div className="mx-auto">
            {isLoading && <LoadingSpinner />}
            {!isLoading && <button
              disabled={data.customerId === ''}
              class="btn btn-primary mx-auto"
              type="submit"
            >
              Program Truck
            </button>}
          </div> : ''
        }
      </form>
    </div>
  );
}

export default TruckProgramming;
