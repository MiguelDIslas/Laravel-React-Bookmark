<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use App\Models\Bookmark;
use Illuminate\Http\Request;
use App\Services\BookmarkService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function index()
    {
        $bookmarks = Bookmark::query()
            ->where('user_id', Auth::user()->id)
            ->where('is_active', 1)
            ->orderByDesc('updated_at')
            ->get();
        return Inertia::render('Bookmark/List/index', ['bookmarks' => $bookmarks]);
    }

    public function add()
    {
        return Inertia::render('Bookmark/Add/index');
    }

    public function view(Bookmark $bookmark)
    {
        if (Auth::user()->id !== $bookmark->user_id) {
            abort(401, 'You are not allowed to view this bookmark');
        }
        return Inertia::render('Bookmark/View/index', ['bookmark' => $bookmark]);
    }

    public function getPreviewData(Request $request)
    {
        $postData = $request->validate(['link' => ['required']]);

        $data = (new BookmarkService)->getBookmarkData($postData['link']);

        // return Inertia::render('Bookmark/Add/index', ['data' => $data, 'link' => $postData['link']]);

        $bookmark = Bookmark::create([
            'title' => $data['title'],
            'description' => strval($data['title']),
            'type' => $data['type'],
            'url' => $postData['link'],
            'image_url' => $data['msapplication-TileImage'],
            'user_id' => $request->user()->id,
        ]);

        return redirect()->route('bookmark.view', ['bookmark' => $bookmark]);
    }

    public function makeActive(Request $request)
    {
        $postData = $request->validate(
            ['id' => ['required', 'exists:bookmarks,id']]
        );

        $bookmark = Bookmark::find($postData['id']);

        if (Auth::user()->id !== $bookmark->user_id) {
            abort(401, 'You are not allowed to make this bookmark active');
        }

        $bookmark->is_active = 1;
        $bookmark->save();

        return redirect()->route('bookmarks.index');
    }

    public function redirect(Bookmark $bookmark)
    {
        DB::table($bookmark->getTable())
            ->where('id', $bookmark->id)
            ->increment('views');
        return redirect($bookmark->url);
    }
}
