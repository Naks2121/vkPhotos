import React from "react";
import { connect } from "react-redux";
import { User } from "./containers/User";
import { Page } from "./containers/Page";
import { getPhotos } from "./actions/PageActions";

function App(props) {
  const { user, page, getPhotosAction } = props;
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
      <User name={user.name} />
      <Page
        photos={page.photos}
        year={page.year}
        isFetching={page.isFetching}
        getPhotos={getPhotosAction}
      />
    </div>
  );
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotosAction: (year) => dispatch(getPhotos(year)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
