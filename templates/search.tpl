<div class="col-xs-6 col-xs-offset-3">
  <h1 class="text-center"> <strong>Search the world wide web</strong> </h1>
  <form>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-music"></span>
      </span>
      <input class="form-control" ng-model="user" type="text" placeholder="Search for anything (music related)..." autofocus required>
    </div>
    <br />
    <div class="text-center" style="border: groove; border-radius: 5px; padding: 10px; margin: 20px">
    	<h2> <strong>Search Parameters</strong> </h2>
    	<input type="checkbox" ng-model="artist"  checked/> Artist <br/>
    	<input type="checkbox" ng-model="track" /> Track <br/>
      <input type="checkbox" ng-model="playlist_artist" /> Playlist with Artist <br/>
    	<input type="checkbox" ng-model="playlist_track" /> Playlist with Track <br/>
      <input type="checkbox" ng-model="playlist_genre" /> Playlist with Genre <br/>
    	<input type="checkbox" ng-model="playlist_decade" /> Playlist with Decade <br/>
    </div>
    <button ng-click="search()" class="btn btn-primary" style="width: 100%; background-color: #7A3014" type="submit">Search for music like a champ!</button>
  </form>
</div>
<div ng-if="display_search" ng-repeat="result in search">
  {{result.artist}}<br />
  {{result.track}}<br />
  {{result.playlist_artist}}<br />
  {{result.playlist_track}}<br />
  {{result.playlist_genre}}<br />
  {{result.playlist_decade}}<br />
</div>
