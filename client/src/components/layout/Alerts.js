import React, { useContext } from 'react';
import AlerContext from '../../context/alert/alertContext';
const Alerts = () => {
  const alertContext = useContext(AlerContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa info-circle'></i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
