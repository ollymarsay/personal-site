import { useEffect, useState } from "preact/hooks";


// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function CalculateAge() {

  const dateOfBirth = new Date(1994,0,22)
  const timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
  const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

  return <span>{age}</span>
}