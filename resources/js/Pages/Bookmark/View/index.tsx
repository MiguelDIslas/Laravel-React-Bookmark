import { Inertia } from '@inertiajs/inertia';
import React from 'react';
import Layout from '../../../components/common/layout';

interface Props{
    bookmark: any
}

const BookmarkViewPage: React.FC<Props> = ({ bookmark }) => {

    const handleSave = (event: React.MouseEvent) =>{
        event.preventDefault();
        Inertia.post('/bookmark/make-active', {id: bookmark.id})
};

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6">
          {bookmark.title && (
            <div className="card">
              <div className="card-header">{bookmark.title}</div>
              <div className="card-body">
                <p>{bookmark.description}</p>
                              <img src={bookmark.image_url} alt={bookmark.title} width="100%" />
                              <button className="btn btn-primary mt-3" onClick={handleSave}>Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookmarkViewPage;