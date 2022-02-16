import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import Layout from "../../../components/common/layout";

interface Props {}

const BookmarkAddPage: React.FC = () => {
  const [state, setState] = useState({
    link: "",
    title: "Title",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Inertia.post("/bookmarks/preview", state);
    }

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
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
        </div>
      </div>
    </Layout>
  );
};

export default BookmarkAddPage;
