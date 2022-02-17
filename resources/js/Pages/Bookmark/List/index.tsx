import React from "react";
import Layout from "../../../components/common/layout";
import { InertiaLink } from "@inertiajs/inertia-react";
import route from "ziggy-js";
import IBookmark from "../../../Contracts/IBookmark";
import BookmarkItem from "../../../components/bookmark/BookmarkItem";

interface Props {
  bookmarks: Array<IBookmark>;
}

const BookmarkListPage: React.FC<Props> = ({ bookmarks }) => (
  <Layout>
    <div className="row">
      <div className="col-sm-8">
        <ul className="list-group">
          {bookmarks.length > 0 &&
            bookmarks.map((bookmark, index) => {
              return <BookmarkItem key={index} bookmark={bookmark} />;
            })}
        </ul>
      </div>
    </div>
  </Layout>
);

export default BookmarkListPage;
