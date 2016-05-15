<div class="col-xs-6 col-xs-offset-3">
  <h1 class="text-center"> <strong>Search the world wide web</strong> </h1>
  <form>
    <div class="input-group input-group-sm">
      <input class="form-control" ng-model="param" type="text" placeholder="Search for any artist or band..." autofocus required>
      <span class="input-group-addon" ng-click="search(param)">
        <span class="glyphicon glyphicon-music"></span>
      </span>
    </div>
    <br />
    <button ng-click="search(param)" class="btn btn-primary" style="width: 100%; background-color: #7A3014" type="submit">Search for music like a champ!</button>
  </form>
</div>
<div class="col-xs-6 col-xs-offset-3">
	<label>Results: </label>
	<div ng-if="results" ng-repeat="result in results">
		{{result.artist}}<br />
		{{result.track}}<br />
		{{result.playlist_artist}}<br />
		{{result.playlist_track}}<br />
		{{result.playlist_genre}}<br />
		{{result.playlist_decade}}<br />
	</div>
</div>
