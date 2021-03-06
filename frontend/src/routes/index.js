import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoggedInLayout from "../layout";
// import Dashboard from "../pages/Dashboard/";
import Tickets from "../pages/Tickets/";
import Signup from "../pages/Signup/";
import Login from "../pages/Login/";
import Connections from "../pages/Connections/";
import Settings from "../pages/Settings/";
import Users from "../pages/Users";
import Contacts from "../pages/Contacts/";
import QuickAnswers from "../pages/QuickAnswers/";
import Queues from "../pages/Queues/";
import Schedules from "../pages/Schedules/";
import Tags from "../pages/Tags/";
import { AuthProvider } from "../context/Auth/AuthContext";
import { WhatsAppsProvider } from "../context/WhatsApp/WhatsAppsContext";
import Route from "./Route";
import docs from "../pages/docs/";
import tokens from "../pages/tokens/";
import HomeDashBoard from "../markey/presentation/pages/home_dashboard/home_dashboard";
import Payments from "../markey/presentation/pages/payments/payments";
import StoreReport from "../markey/presentation/pages/store-report/store_report";
import HealthCheck from "../markey/presentation/pages/health-check/health_check";
import LatePayments from "../markey/presentation/pages/late-payments/late_payments";
import Churn from "../markey/presentation/pages/churn/churn_control";


const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <WhatsAppsProvider>
            <LoggedInLayout>
              <Route exact path="/" component={HomeDashBoard} isPrivate />
              <Route exact path="/payments" component={Payments} isPrivate />
              <Route exact path="/store-report" component={StoreReport} isPrivate />
              <Route exact path="/store-check" component={HealthCheck} isPrivate />
              <Route exact path="/payments-late" component={LatePayments} isPrivate />
              <Route exact path="/churn" component={Churn} isPrivate />
              <Route
                exact
                path="/tickets/:ticketId?"
                component={Tickets}
                isPrivate
              />
              <Route
                exact
                path="/connections"
                component={Connections}
                isPrivate
              />
              <Route exact path="/contacts" component={Contacts} isPrivate />
              <Route exact path="/users" component={Users} isPrivate />
              <Route
                exact
                path="/quickAnswers"
                component={QuickAnswers}
                isPrivate
              />
              <Route exact path="/Settings" component={Settings} isPrivate />
              <Route exact path="/docs" component={docs} isPrivate />
              <Route exact path="/tokens" component={tokens} isPrivate />
              <Route exact path="/Queues" component={Queues} isPrivate />
              <Route exact path="/tags" component={Tags} isPrivate />
              <Route exact path="/schedules" component={Schedules} isPrivate />              
            </LoggedInLayout>
          </WhatsAppsProvider>
        </Switch>
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
