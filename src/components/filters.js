import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { store, filterActions } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { Mode, Roles, Experience, TechStack, MinBasePay } from "../data/data";

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

  const location = useSelector((state) => state.location);
  const [locationInput, setLocationInput] = useState("");
  const locationHandler = (newLocaton) => {
    dispatch(filterActions.setLocation(newLocaton));
  };

  const companyName = useSelector((state) => state.companyName);
  const [companyNameInput, setCompanyNameInput] = useState("");
  const companyNameHandler = (newCompanyName) => {
    dispatch(filterActions.setCompanyName(newCompanyName));
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
        sx={{ padding: "0px", flexShrink: 0 }}
        renderInput={(params) => {
          return <TextField {...params} label="Roles" />;
        }}
      />

      <Autocomplete
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
          marginTop: { xs: "10px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => <TextField {...params} label="Experience" />}
      />
      <Autocomplete
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
          marginTop: { xs: "10px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => {
          return <TextField {...params} label="Remote" />;
        }}
      />
      <Autocomplete
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
          marginTop: { xs: "10px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => {
          return <TextField {...params} label="Tech Stack" />;
        }}
      />
      <Autocomplete
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
          width: "200px",
          padding: "0px",
          marginTop: { xs: "10px", sm: "2px", md: "2px" },
        }}
        renderInput={(params) => (
          <TextField {...params} label="Minimum Base Pay" />
        )}
      />
      <TextField
        value={companyName}
        onChange={(event, newValue) => {
          companyNameHandler(newValue);
        }}
        inputValue={companyNameInput}
        onInputChange={(event, newInputValue) => {
          setCompanyNameInput(newInputValue);
        }}
        id="outlined-basic"
        label="Search Company Name"
        variant="outlined"
        sx={{ marginTop: { xs: "10px", sm: "2px", md: "2px" } }}
      />
      <TextField
        value={location}
        onChange={(event, newValue) => {
          locationHandler(newValue);
        }}
        inputValue={locationInput}
        onInputChange={(event, newInputValue) => {
          setLocationInput(newInputValue);
        }}
        label="Location"
        id="filled"
        type="search"
        variant="outlined"
        sx={{ marginTop: { xs: "10px", sm: "2px", md: "2px" } }}
      />
    </div>
  );
}