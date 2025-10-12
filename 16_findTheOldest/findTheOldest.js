const findTheOldest = function(people) {
  // Get the current year just once
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const currentAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    if (currentAge > oldestAge) {
      return person;
    } else {
      return oldest;
    }
  });
}

// Do not edit below this line
module.exports = findTheOldest;
