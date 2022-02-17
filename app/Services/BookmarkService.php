<?php

namespace App\Services;

class BookmarkService {
    public function getBookmarkData(string $url){
      $data = \OpenGraph::fetch($url, true);
        $data['title'] = $this->checkPropertyData('title', $data);
        $data['description'] = $this->checkPropertyData('description', $data);
        $data['image'] = $this->checkPropertyData('image', $data);

        return $data;
    }

    private function checkPropertyData(string $name,array $data){
        if($data[$name] === '' && isset($data["twitter:{$name}"]) && $data["twitter:{$name}"] !== '' ){
            return $data["twitter:{$name}"];
        }

        return $data[$name];
    }
}