import React from "react";

const Meter = ({ formData, setFormData }) => {
  const handleLoadingDepotChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      resolutions: [
        {
          ...prevFormData.resolutions[0],
          calibration: {
            ...prevFormData.resolutions[0].calibration,
            meter: {
              ...prevFormData.resolutions[0].calibration.meter,
              loadingDepot: +value,
            },
          },
        },
      ],
    }));
  };
  const handleArrivalLocationChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      resolutions: [
        {
          ...prevFormData.resolutions[0],
          calibration: {
            ...prevFormData.resolutions[0].calibration,
            meter: {
              ...prevFormData.resolutions[0].calibration.meter,
              arrivalLocation: +value,
            },
          },
        },
      ],
    }));
  };

  return (
    <div>
      <h4 className="text-xl text-primary font-medium">Meter</h4>

      <fieldset className="grid gap-3 md:grid-cols-2 items-end">
        <label htmlFor="">
          Loading Depot
          <input
            className="input input-primary w-full"
            type="number"
            value={formData.resolutions[0].calibration.meter.loadingDepot}
            name=""
            id=""
            onChange={handleLoadingDepotChange}
          />
        </label>
        <label htmlFor="">
          Arrival Location
          <input
            className="input input-primary w-full"
            type="number"
            value={formData.resolutions[0].calibration.meter.arrivalLocation}
            name=""
            onChange={handleArrivalLocationChange}
          />
        </label>
      </fieldset>
    </div>
  );
};

export default Meter;
