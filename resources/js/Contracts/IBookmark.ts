interface IBookmark {
  id: number;
  title: string;
  description: string;
  type: string;
  url: string;
  image_url: string;
  user_id: number;
  is_active: boolean;
  views: number;
  created_at: string;
  updated_at: string;
}

export default IBookmark;