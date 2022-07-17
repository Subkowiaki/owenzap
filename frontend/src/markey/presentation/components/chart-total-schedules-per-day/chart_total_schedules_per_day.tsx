
import React, { useState } from "react";

const ChartTotalSchedules: React.FC = () => { 
  const [isInitialLoad, setInitialLoad] = useState<boolean>(true);

  initialLoad(); 

  function initialLoad() { 
    if (isInitialLoad) {
      setInitialLoad(false);
    }
  }

  return (<></>);
}

export default ChartTotalSchedules;