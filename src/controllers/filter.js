//to check company name
export const filtersearchCompanyName = (array, searchTerm) => {
  return array.filter(
    (item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
};

//to check location
export const filtersearchLocation = (array, searchTerm) => {
  return array.filter(
    (item) =>
      item.location.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
};
//to check min base pay
export const filterSearchMinBasePay = (array, searchTerm) => {
  let number = parseInt(searchTerm.replace(/\D/g, ""));

  if (number > 0) {
    return array.filter((item) => {
      if (item.minJdSalary !== null && item.maxJdSalary !== null) {
        return item.minJdSalary <= number && number < item.maxJdSalary;
      }
    });
  } else {
    return array;
  }
};

//to check min exp
export const filterSearchMinExp = (array, searchTerm) => {
  if (searchTerm > 0) {
    return array.filter((item) => {
      if (item.minExp !== null && item.maxExp !== null) {
        return item.minExp <= searchTerm && searchTerm < item.maxExp;
      }
    });
  } else {
    return array;
  }
};

function checkList(item, searchTermArray) {
  const lowerCaseArray = searchTermArray.map((item) => {
    return item.toLowerCase();
  });
  return lowerCaseArray.includes(item);
}
//to check roles
export const filterSearchRoles = (array, searchTermArray) => {
  if (searchTermArray.length > 0) {
    return array.filter((item) =>
      checkList(item.jobRole.toLowerCase(), searchTermArray)
    );
  } else {
    return array;
  }
};

//to search for remote,onsite,hybrid
export const filterSearchMode = (array, searchTermArray) => {
  if (searchTermArray.length > 0) {
    return array.filter((item) =>
      checkList(item.location.toLowerCase(), searchTermArray)
    );
  } else {
    return array;
  }
};

//to search for text stack
export const filterSearchTeachStack = (array, searchTermArray) => {
  if (searchTermArray.length > 0) {
    return array.filter((item) => {
      if (item.techStack) {
        return checkList(item.techStack.toLowerCase(), searchTermArray);
      } else {
        return false; // Handles where techStack is missing
      }
    });
  } else {
    return array;
  }
};
