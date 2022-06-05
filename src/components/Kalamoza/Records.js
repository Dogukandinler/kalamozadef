import React, { useState } from "react";
import Card from "../UI/Card";
import Title from "./Title";
import KalamozaList from "./KalamozaList";

const Records = (props) => {
  const [filteredYear, setFilterYear] = useState("2022");

  const filteredYearHandler = (FilteredYear) => {
    setFilterYear(FilteredYear);
  };

  const filteredChecks = props.items.filter((checks) => {
    return checks.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card>
      <Title filterChange={filteredYearHandler}></Title>
      <KalamozaList items={filteredChecks} />
    </Card>
  );
};

export default Records;
