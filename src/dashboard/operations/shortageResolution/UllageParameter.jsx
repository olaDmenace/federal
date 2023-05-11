import React from "react";

function UllageParameter({ formData, setFormData }) {
  const handleUllageChange = (index, field, value) => {
    const updatedFormData = { ...formData };
    updatedFormData.resolutions[0].calibration.ullage[index][field] =
      parseFloat(value);

    // Ensure there are exactly three items in the ullage array
    const numUllage = updatedFormData.resolutions[0].calibration.ullage.length;
    if (numUllage < 3) {
      for (let i = numUllage; i < 3; i++) {
        updatedFormData.resolutions[0].calibration.ullage.push({
          loadingDepot: 0,
          arrivalLocation: 0,
        });
      }
    } else if (numUllage > 3) {
      updatedFormData.resolutions[0].calibration.ullage =
        updatedFormData.resolutions[0].calibration.ullage.slice(0, 3);
    }

    setFormData(updatedFormData);
  };

  return (
    <div>
      <form className="grid gap-5 text-primary my-5" action="">
        <h4 className="text-xl text-primary font-medium">Ullage Parameter</h4>
        {formData.resolutions[0].calibration.ullage.map((item, index) => (
          <div key={index}>
            <h4 className="text-xl mb-5">Compartment {index + 1}</h4>

            <fieldset className="grid gap-3 md:grid-cols-2 items-end">
              <label htmlFor="">
                Loading Depot
                <input
                  className="input input-primary w-full"
                  type="number"
                  min={0}
                  name=""
                  id=""
                  value={item.loadingDepot}
                  onChange={(e) =>
                    handleUllageChange(index, "loadingDepot", e.target.value)
                  }
                />
              </label>
              <label htmlFor="">
                Arrival
                <input
                  className="input input-primary w-full"
                  type="number"
                  min={0}
                  name=""
                  id=""
                  value={item.arrivalLocation}
                  onChange={(e) =>
                    handleUllageChange(index, "arrivalLocation", e.target.value)
                  }
                />
              </label>
              <label htmlFor="">
                Difference
                <input
                  className="input input-primary w-full"
                  type="text"
                  name=""
                  id=""
                />
              </label>
              <label htmlFor="">
                Value
                <input
                  className="input input-primary w-full"
                  type="text"
                  name=""
                  id=""
                />
              </label>
            </fieldset>
          </div>
        ))}
      </form>
    </div>
  );
}

export default UllageParameter;
