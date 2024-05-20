import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
import { CampaignsList } from "./campaigns/CampaignsList";
import { CampaignsCreate } from "./campaigns/CampaignsCreate";
import { CampaignsEdit } from "./campaigns/CampaignsEdit";
import { CampaignsShow } from "./campaigns/CampaignsShow";
import { AdsList } from "./ads/AdsList";
import { AdsCreate } from "./ads/AdsCreate";
import { AdsEdit } from "./ads/AdsEdit";
import { AdsShow } from "./ads/AdsShow";
import { AdGroupsList } from "./adGroups/AdGroupsList";
import { AdGroupsCreate } from "./adGroups/AdGroupsCreate";
import { AdGroupsEdit } from "./adGroups/AdGroupsEdit";
import { AdGroupsShow } from "./adGroups/AdGroupsShow";
import { OrganizationsList } from "./organizations/OrganizationsList";
import { OrganizationsCreate } from "./organizations/OrganizationsCreate";
import { OrganizationsEdit } from "./organizations/OrganizationsEdit";
import { OrganizationsShow } from "./organizations/OrganizationsShow";
import { CategoriesList } from "./categories/CategoriesList";
import { CategoriesCreate } from "./categories/CategoriesCreate";
import { CategoriesEdit } from "./categories/CategoriesEdit";
import { CategoriesShow } from "./categories/CategoriesShow";
import { StorageList } from "./storage/StorageList";
import { StorageCreate } from "./storage/StorageCreate";
import { StorageEdit } from "./storage/StorageEdit";
import { StorageShow } from "./storage/StorageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AdManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
        <Resource
          name="Campaigns"
          list={CampaignsList}
          edit={CampaignsEdit}
          create={CampaignsCreate}
          show={CampaignsShow}
        />
        <Resource
          name="Ads"
          list={AdsList}
          edit={AdsEdit}
          create={AdsCreate}
          show={AdsShow}
        />
        <Resource
          name="AdGroups"
          list={AdGroupsList}
          edit={AdGroupsEdit}
          create={AdGroupsCreate}
          show={AdGroupsShow}
        />
        <Resource
          name="Organizations"
          list={OrganizationsList}
          edit={OrganizationsEdit}
          create={OrganizationsCreate}
          show={OrganizationsShow}
        />
        <Resource
          name="Categories"
          list={CategoriesList}
          edit={CategoriesEdit}
          create={CategoriesCreate}
          show={CategoriesShow}
        />
        <Resource
          name="Storage"
          list={StorageList}
          edit={StorageEdit}
          create={StorageCreate}
          show={StorageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
