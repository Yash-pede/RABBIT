import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { RabbitEye, RabbitEyeFull, cottonwoll, torch } from "../assets";

const Rabbit = () => {
  const [drug, setDrug] = React.useState("50");
  const [eyeSize, setEyeSize] = React.useState("8vw");
  const [drugacting, setDrugacting] = React.useState("None");
  const [torchactive, setTorchactive] = React.useState(false);
  const [cottonactive, setCottonactive] = React.useState(false);

  const handleChangeDrug = (event) => {
    setDrug(event.target.value);
    // console.log(drug);
    switch (event.target.value) {
      case 25:
        setEyeSize("11vw");
        setDrugacting("Epinephrine");

        break;
      case 49:
        setEyeSize("11.5vw");
        setDrugacting("Atropine");
        break;
      case 49.5:
        setEyeSize("12vw");
        setDrugacting("Ephedrine");
        break;
      case 40:
        setEyeSize("6vw");
        setDrugacting("Physostigmine");
        break;
      case 45:
        setEyeSize("8vw");
        setDrugacting("Lignocaine");
        break;
      case 50.1:
        setEyeSize("8vw");
        setDrugacting("Saline");
        break;

      default:
        setDrugacting("None");
        setEyeSize("8vw");
        break;
    }
  };

  return (
    <>
      <div
        className="flex flex-wrap flex-col overflow-hidden"
        id="experiment-main"
      >
        <div
          id="drugs"
          className="flex justify-center items-center flex-col space-y-7 py-3 border border-gray-500 mx-3"
        >
          <p className="capitalize text-xl text-center md:text-4xl">
            This is the Data of Right Eye because we never instill drugs on the
            left one
          </p>
          <h2 className="text-2xl">
            Drug Acting:{" "}
            <span className="font-bold text-blue-700">{drugacting}</span>
          </h2>
        </div>

        <div
          id="intraocular-pressure"
          className="flex flex-col justify-center items-center space-y-16 mt-10 border border-rose-500 mx-3"
        >
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-semibold text-center my-7">
              Intraocular Tension :
            </h2>
            <Box width={300}>
              <Slider
                defaultValue={50}
                value={drug}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
            <div
              id="intra_pressure"
              className="flex w-full justify-between text-xl font-semibold"
            >
              <h1>L</h1>
              <h1>N</h1>
              <h1>H</h1>
            </div>
          </div>
        </div>

        <div id="Drugs-Instillation" className="mx-7 my-7">
          <h2 className="text-xl md:text-2xl font-semibold text-center my-7">
            Select Drugs :
          </h2>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Drugs</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={drug}
                label="Drug"
                onChange={handleChangeDrug}
              >
                <MenuItem value={25}>Epinephrine</MenuItem>
                <MenuItem value={49}>Atropine</MenuItem>
                <MenuItem value={49.5}>Ephedrine</MenuItem>
                <MenuItem value={40}>Physostigmine</MenuItem>
                <MenuItem value={45}>Lignocaine</MenuItem>
                <MenuItem value={50.1}>Saline</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div
          className="flex flex-col justify-center items-center w-screen mt-10"
          id="Rabbit_eye"
        >
          <div className="flex flex-row ">
            <img
              src={RabbitEyeFull}
              alt=""
              className="object-contain mx-auto w-1/2"
            />
            <div className="w-full h-full flex flex-col overflow-visible justify-center items-center">
              <div
                style={{ width: eyeSize, height: eyeSize }}
                className="bg-red-700 rounded-full relative top-[17vw] left-[3.5vw] z-10 transition-all duration-300"
              />
              <img src={RabbitEye} alt="Rabbits EYE" />
            </div>
          </div>
        </div>

        <div
          id="tools"
          className="w-screen flex flex-row items-center justify-evenly my-10"
        >
          <button
            onClick={() => {
              torchactive === false
                ? setTorchactive(true)
                : setTorchactive(false);
            }}
          >
            <div
              id="torchfull"
              className={`border-2 border-slate-700 w-[25vw] h-[25vw] flex items-center flex-col-reverse ${
                torchactive === true ? "bg-yellow-400" : "bg-white"
              }`}
            >
              <h1 className="font-semibold md:text-xl text-lg">TORCH</h1>
              <img src={torch} alt="" className="max-w-xs w-[25vw] h-auto" />
            </div>
          </button>
          <button
            onClick={() => {
              cottonactive === false
                ? setCottonactive(true)
                : setCottonactive(false);
            }}
          >
            <div
              className={`border-2 border-slate-700 w-[25vw] h-[25vw] flex items-center flex-col-reverse ${
                cottonactive === true ? "bg-yellow-400" : "bg-white"
              }`}
            >
              <h1 className="font-semibold md:text-xl text-lg">COTTON</h1>
              <img
                src={cottonwoll}
                alt=""
                className="max-w-xs w-[25vw] h-auto"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Rabbit;
