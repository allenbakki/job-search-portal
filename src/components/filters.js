import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { store, filterActions } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { Mode, Roles, Experience, TechStack, MinBasePay } from "../data/data";
import { debounce } from "../controllers/debounce";

//list of data for filters

export default function Filters() {
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.roles);
  const [roleInput, setRoleInput] = useState("");
  const roleHandler = (newRole) => {
    dispatch(filterActions.setRoles(newRole));
  };

  const experience = useSelector((state) => state.experience);
  const [expInput, setExpInput] = useState(0);
  const experienceHandler = (newExp) => {
    dispatch(filterActions.setExperience(newExp));
  };

  const mode = useSelector((state) => state.mode);
  const [modeInput, setModeInput] = useState("");
  const modeHandler = (newMode) => {
    dispatch(filterActions.setMode(newMode));
  };

  const techStack = useSelector((state) => state.techStack);
  const [techStackInput, setTechStackInput] = useState("");
  const techStackHandler = (newTechStack) => {
    dispatch(filterActions.setTechStack(newTechStack));
  };

  const minBasePay = useSelector((state) => state.minBasePay);
  const [minBasePayInput, setMinBasePayInput] = useState("");
  const minBasePayHandler = (newminBasePay) => {
    dispatch(filterActions.setMinBasePay(newminBasePay));
  };

  const [locationInput, setLocationInput] = useState("");
  const locationHandler = (newLocation) => {
    dispatch(filterActions.setLocation(newLocation));
  };
  //implemented debouncing so that filtering time could be optimised
  const debouncedLocationHandler = debounce(locationHandler, 2000);
  const handleInputLocation = (event) => {
    const newValue = event.target.value;
    setLocationInput(newValue);
    debouncedLocationHandler(newValue);
  };

  const [companyNameInput, setCompanyNameInput] = useState("");
  const companyNameHandler = (newCompanyName) => {
    dispatch(filterActions.setCompanyName(newCompanyName));
  };
  const debouncedComapnyNameHandler = debounce(companyNameHandler, 2000);

  const handleInputComapnyName = (event) => {
    const newValue = event.target.value;
    setCompanyNameInput(newValue);
    debouncedComapnyNameHandler(newValue);
  };

  store.subscribe(() => console.log("store data", store.getState()));

  return (
    <div
      style={{
        padding: "0px 0px",
        paddingBottom: "20px",
        display: "flex",
        gap: "6px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Autocomplete
        size="small"
        style={{
          width: "fit-content",
          minWidth: "150px",
          minHeight: "38px",
          display: "flex",
          flexWrap: "wrap",
        }}
        multiple
        value={roles}
        onChange={(event, newValue) => {
          roleHandler(newValue);
        }}
        inputValue={roleInput}
        onInputChange={(event, newInputValue) => {
          setRoleInput(newInputValue);
        }}
        id="controllable-states-demo"
        options={Roles.filter((item) => !roles.includes(item))}
        sx={{
          padding: "0px",
          flexShrink: 0,
          marginTop: { xs: "5px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => {
          return <TextField {...params} label="Roles" />;
        }}
      />

      <Autocomplete
        size="small"
        value={experience}
        onChange={(event, newValue) => {
          experienceHandler(newValue);
        }}
        inputValue={expInput}
        onInputChange={(event, newInputValue) => {
          setExpInput(newInputValue);
        }}
        id="controllable-states-demo"
        options={Experience}
        sx={{
          width: "150px",
          padding: "0px",
          marginTop: { xs: "5px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => <TextField {...params} label="Experience" />}
      />
      <Autocomplete
        size="small"
        style={{ width: "fit-content", minWidth: "120px" }}
        multiple
        value={mode}
        onChange={(event, newValue) => {
          modeHandler(newValue);
        }}
        inputValue={modeInput}
        onInputChange={(event, newInputValue) => {
          setModeInput(newInputValue);
        }}
        id="controllable-states-demo"
        options={Mode.filter((item) => !mode.includes(item))}
        sx={{
          padding: "0px",
          flexShrink: 0,
          marginTop: { xs: "5px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => {
          return <TextField {...params} label="Remote" />;
        }}
      />
      <Autocomplete
        size="small"
        style={{ width: "fit-content", minWidth: "150px" }}
        multiple
        value={techStack}
        onChange={(event, newValue) => {
          techStackHandler(newValue);
        }}
        inputValue={techStackInput}
        onInputChange={(event, newInputValue) => {
          setTechStackInput(newInputValue);
        }}
        id="controllable-states-demo"
        options={TechStack.filter((item) => !techStack.includes(item))}
        sx={{
          padding: "0px",
          flexShrink: 0,
          marginTop: { xs: "5px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => {
          return <TextField {...params} label="Tech Stack" />;
        }}
      />
      <Autocomplete
        size="small"
        value={minBasePay}
        onChange={(event, newValue) => {
          minBasePayHandler(newValue);
        }}
        inputValue={minBasePayInput}
        onInputChange={(event, newInputValue) => {
          setMinBasePayInput(newInputValue);
        }}
        id="controllable-states-demo"
        options={MinBasePay}
        sx={{
          width: "220px",
          padding: "0px",
          marginTop: { xs: "5px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => (
          <TextField {...params} label="Minimum Base Pay" />
        )}
      />
      <TextField
        size="small"
        value={companyNameInput}
        onChange={handleInputComapnyName}
        id="outlined-basic"
        label="Search Company Name"
        variant="outlined"
        sx={{ marginTop: { xs: "5px", sm: "2px", md: "2px" }, width: "220px" }}
      />
      <TextField
        size="small"
        value={locationInput}
        onChange={handleInputLocation}
        label="Location"
        id="filled"
        variant="outlined"
        sx={{ marginTop: { xs: "5px", sm: "2px", md: "2px" }, width: "200px" }}
      />
    </div>
  );
}
