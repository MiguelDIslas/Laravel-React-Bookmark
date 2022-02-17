import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import Layout from "../../../components/common/layout";
import Loader from "../../../components/loader";

interface Props {}

const BookmarkAddPage: React.FC = () => {
  const [state, setState] = useState({
    link: "",
    title: "Title",
    showLoader: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Inertia.post("/bookmarks/preview", state, {
      onStart: () => {
        setState({ ...state, showLoader: true });
      },

      onFinish: () => {},
    });
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          {state.showLoader ? (
            <Loader />
          ) : (
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  placeholder="Link"
                  title="Link"
                  onChange={handleChange}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookmarkAddPage;
