import React from "react";

const LPG = (whiteData, setWhiteData) => {
  return (
    <div>
      <div className="space-y-2">
        {" "}
        <form action="" className="grid text-primary gap-5 w-full">
          <fieldset className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
            <label htmlFor="">
              Truck Numbers
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select Truck Numbers</option>
              </select>
            </label>

            <label htmlFor="">
              Product Type
              <input
                className="w-full input input-primary"
                placeholder="White Powder"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Odometer Reading
              <input
                className="w-full input input-primary"
                placeholder="1234"
                type="text"
                name=""
                id=""
              />
            </label>
          </fieldset>
          <h2 className="text-xl -mb-4 text-primary font-semibold">
            TIF - LPG
          </h2>
          <hr />
          <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
            <label htmlFor="">
              Trip ID
              <br />
              <input
                class="input input-primary w-full"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Delivery Officer
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value=""> Select Delivery Officer</option>
              </select>
            </label>
            <label htmlFor="">
              Journey Officer
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value=""> Select Journey Officer</option>
              </select>
            </label>
            <label htmlFor="">
              Logistics Coordinator
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value=""> Select LC</option>
              </select>
            </label>
            <label htmlFor="">
              Inspection Date
              <br />
              <input
                class="input input-primary w-full"
                type="date"
                name=""
                id=""
              />
            </label>
          </fieldset>
          <hr />
          <fieldset className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 items-end">
            <label htmlFor="">
              1. Vehicle license, Road worthiness and Insurance Certificates
              Valid?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              2. Valid Drivers’ license?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              3. Complete PPE? (Hard Helmet, Safety boots, and Hi-Vis clothing,
              Company T-Shirt and Identity cards)
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select </option>
              </select>
            </label>
            <label htmlFor="">
              4. Assistant Available?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              5. Truck free from oil and gas leaks?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              6. Windscreen free of cracks and the wipers in good condition?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              7. Is the horn & reverse alarm functional?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              8. Driving mirrors free of cracks and firmly fixed?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              9. All Tyres including the 2 spares in good condition and of a
              minimum thread depth of 2mm?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              10. Correct wheel nuts and studs are fitted?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              11. Seat belts in the truck fitted and functioning properly?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              12. Does the engine start using the ignition key? (No pushing,
              non-usage of wires)
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              13. Vehicle equipped with two (unexpired) 9kg fire extinguisher
              and caution sign?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              14. Vehicle have 2 standard wheel chocks with handles?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              15. Are the following Hydraulic Jack, Wheel Spanner, Tyre Lifter,
              Tyre chains and Padlocks, Tyre Gauge, Tyre Pump Offloading
              Adaptor, Towing Chain and Harness present and effective?
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={whiteData.answer}
                onChange={(e) =>
                  setWhiteData({ ...whiteData, answer: +e.target.value })
                }
              >
                <option value="1"> Select</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default LPG;
